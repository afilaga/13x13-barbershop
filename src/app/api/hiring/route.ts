import { NextResponse } from 'next/server';

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_CONTENT_LENGTH_BYTES = 8 * 1024;

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

type HiringPayload = {
    name: string;
    phone: string;
    age: string;
    experience: string;
    agreed: true;
    captchaToken: string;
    honeypot: string;
};

function getClientIp(request: Request): string {
    const forwardedFor = request.headers.get('x-forwarded-for');
    if (forwardedFor) {
        return forwardedFor.split(',')[0]?.trim() || 'unknown';
    }

    return (
        request.headers.get('cf-connecting-ip')?.trim() ||
        request.headers.get('x-real-ip')?.trim() ||
        'unknown'
    );
}

function pruneRateLimitStore(now: number) {
    for (const [key, entry] of rateLimitStore) {
        if (entry.resetAt <= now) {
            rateLimitStore.delete(key);
        }
    }
}

function checkRateLimit(key: string) {
    const now = Date.now();
    if (rateLimitStore.size > 3000) {
        pruneRateLimitStore(now);
    }

    const existing = rateLimitStore.get(key);
    if (!existing || existing.resetAt <= now) {
        rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return { allowed: true, retryAfter: 0 };
    }

    if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
        return {
            allowed: false,
            retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
        };
    }

    existing.count += 1;
    rateLimitStore.set(key, existing);
    return { allowed: true, retryAfter: 0 };
}

function normalizeInput(value: unknown): string {
    if (typeof value !== 'string') {
        return '';
    }

    return value.replace(/\s+/g, ' ').trim();
}

function validateHiringPayload(rawBody: unknown): { ok: true; data: HiringPayload } | { ok: false; error: string } {
    if (!rawBody || typeof rawBody !== 'object') {
        return { ok: false, error: 'Invalid payload' };
    }

    const body = rawBody as Record<string, unknown>;

    const name = normalizeInput(body.name);
    const phone = normalizeInput(body.phone);
    const age = normalizeInput(body.age);
    const experience = normalizeInput(body.experience);
    const captchaToken = normalizeInput(body.captchaToken);
    const honeypot = normalizeInput(body.company);
    const agreed = body.agreed === true;

    if (name.length < 2 || name.length > 80) {
        return { ok: false, error: 'Invalid name' };
    }

    if (phone.length < 7 || phone.length > 24) {
        return { ok: false, error: 'Invalid phone' };
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
        return { ok: false, error: 'Invalid phone' };
    }

    if (age && !/^\d{1,2}$/.test(age)) {
        return { ok: false, error: 'Invalid age' };
    }

    if (age) {
        const parsedAge = Number(age);
        if (!Number.isInteger(parsedAge) || parsedAge < 14 || parsedAge > 80) {
            return { ok: false, error: 'Invalid age' };
        }
    }

    if (experience.length > 40) {
        return { ok: false, error: 'Invalid experience' };
    }

    if (!agreed) {
        return { ok: false, error: 'Consent required' };
    }

    return {
        ok: true,
        data: {
            name,
            phone,
            age,
            experience,
            agreed: true,
            captchaToken,
            honeypot,
        },
    };
}

async function verifyTurnstileToken(token: string, ip: string): Promise<boolean> {
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY?.trim();

    if (!turnstileSecret) {
        return true;
    }

    if (!token) {
        return false;
    }

    const body = new URLSearchParams();
    body.set('secret', turnstileSecret);
    body.set('response', token);
    if (ip !== 'unknown') {
        body.set('remoteip', ip);
    }
    body.set('idempotency_key', crypto.randomUUID());

    try {
        const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: body.toString(),
            cache: 'no-store',
            signal: AbortSignal.timeout(5000),
        });

        if (!response.ok) {
            return false;
        }

        const data = (await response.json()) as { success?: boolean };
        return data.success === true;
    } catch {
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const contentLength = request.headers.get('content-length');
        if (contentLength && Number(contentLength) > MAX_CONTENT_LENGTH_BYTES) {
            return NextResponse.json({ success: false, error: 'Payload too large' }, { status: 413 });
        }

        const clientIp = getClientIp(request);
        const rateLimit = checkRateLimit(clientIp);
        if (!rateLimit.allowed) {
            return NextResponse.json(
                { success: false, error: 'Too many requests' },
                {
                    status: 429,
                    headers: { 'Retry-After': String(rateLimit.retryAfter) },
                }
            );
        }

        let rawBody: unknown;
        try {
            rawBody = await request.json();
        } catch {
            return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
        }

        const validatedPayload = validateHiringPayload(rawBody);
        if (!validatedPayload.ok) {
            return NextResponse.json({ success: false, error: validatedPayload.error }, { status: 400 });
        }

        const payload = validatedPayload.data;
        if (payload.honeypot) {
            return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
        }

        const captchaValid = await verifyTurnstileToken(payload.captchaToken, clientIp);
        if (!captchaValid) {
            return NextResponse.json({ success: false, error: 'Captcha verification failed' }, { status: 400 });
        }

        // Configuration
        const botToken = process.env.TELEGRAM_BOT_TOKEN?.trim();
        const chatIdsEnv = process.env.TELEGRAM_CHAT_ID;
        const chatIds = (chatIdsEnv ?? '').split(',').map((id) => id.trim()).filter(Boolean);

        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        // 1. Send Direct Telegram Notifications
        if (botToken && chatIds.length > 0) {
            const message = [
                '⬛️ 13x13: НОВАЯ ЗАЯВКА',
                '',
                `ИМЯ: ${payload.name}`,
                `ТЕЛЕФОН: ${payload.phone}`,
                `ВОЗРАСТ: ${payload.age || '—'}`,
                `ОПЫТ: ${payload.experience || '—'}`,
                '',
                '---',
                '13x13.ru/rabota',
            ].join('\n');

            // Send to each recipient
            for (const chatId of chatIds) {
                try {
                    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                        }),
                        signal: AbortSignal.timeout(5000),
                    });
                } catch (tgError) {
                    console.error(`Error sending to Telegram ID ${chatId}:`, tgError);
                }
            }
        }

        // 2. Forward to N8N (if URL is provided)
        if (n8nWebhookUrl) {
            try {
                await fetch(n8nWebhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        source: '13x13_Hiring_Page',
                        name: payload.name,
                        phone: payload.phone,
                        age: payload.age,
                        experience: payload.experience,
                        agreed: payload.agreed,
                    }),
                    signal: AbortSignal.timeout(5000),
                });
            } catch (n8nError) {
                console.error('Error forwarding to n8n:', n8nError);
            }
        }

        return NextResponse.json({ success: true, recipients: chatIds.length });

    } catch (error) {
        console.error('Error in hiring submission:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error' },
            { status: 500 }
        );
    }
}
