import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, phone, info } = body;

        // Configuration
        const botToken = process.env.TELEGRAM_BOT_TOKEN || '8754679267:AAEEX0KTn0azUdtkGUL5B1W0LHUEKJcH4GQ';
        
        // Default Chat IDs if env is missing
        const defaultChatIds = ['113357472', '1792864953'];
        const chatIdsEnv = process.env.TELEGRAM_CHAT_ID;
        const chatIds = chatIdsEnv ? chatIdsEnv.split(',').map(id => id.trim()) : defaultChatIds;

        const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

        // 1. Send Direct Telegram Notifications
        if (botToken && chatIds.length > 0) {
            const { name, phone, age, experience } = body;
            const message = `⬛️ 13x13: НОВАЯ ЗАЯВКА\n\nИМЯ: ${name}\nТЕЛЕФОН: ${phone}\nВОЗРАСТ: ${age || '—'}\nОПЫТ: ${experience || '—'}\n\n---\n13x13.ru/rabota`;

            // Send to each recipient
            for (const chatId of chatIds) {
                try {
                    await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            chat_id: chatId,
                            text: message,
                            parse_mode: 'Markdown'
                        }),
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
                        ...body
                    }),
                });
            } catch (n8nError) {
                console.error('Error forwarding to n8n:', n8nError);
            }
        }

        return NextResponse.json({ success: true, recipients: chatIds.length });

    } catch (error: any) {
        console.error('Error in hiring submission:', error);
        return NextResponse.json(
            { success: false, error: error.message },
            { status: 500 }
        );
    }
}
