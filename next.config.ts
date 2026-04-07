import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";
const isStrictCsp = process.env.STRICT_CSP === "true";

const strictCspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://mc.yandex.ru https://dikidi.net https://challenges.cloudflare.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data: https://mc.yandex.ru https://yandex.ru https://*.yandex.ru;
  font-src 'self' data:;
  connect-src 'self' https://mc.yandex.ru https://challenges.cloudflare.com https://dikidi.net https://*.dikidi.net https://yandex.ru https://*.yandex.ru;
  frame-src 'self' https://yandex.ru https://*.yandex.ru https://dikidi.net https://*.dikidi.net https://challenges.cloudflare.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`;

const relaxedCspHeader = `
  default-src 'self' https: data: blob:;
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https:;
  style-src 'self' 'unsafe-inline' https:;
  img-src 'self' blob: data: https:;
  font-src 'self' data: https:;
  connect-src 'self' https: wss:;
  frame-src 'self' https:;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'self';
  ${isDev ? "" : "upgrade-insecure-requests;"}
`;

const cspHeader = (isStrictCsp ? strictCspHeader : relaxedCspHeader)
  .replace(/\n/g, " ")
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader,
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "accelerometer=(), autoplay=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
