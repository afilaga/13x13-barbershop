import { test, expect } from '@playwright/test';

test('has correct title and brand name', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/13x13/);
});

test('has dikidi button in hero section', async ({ page }) => {
    await page.goto('/');
    const heroButton = page.locator('a[href="https://dikidi.net/#widget=205276"]').first();
    await expect(heroButton).toBeVisible();
    await expect(heroButton).toContainText('ЗАПИСАТЬСЯ');
});

test('logo is loaded and visible', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('img[alt="13x13 Logo"]').first();
    await expect(logo).toBeVisible();
});

test('mobile hero CTA is visible', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    const cta = page.getByRole('link', { name: /записаться/i }).first();
    await expect(cta).toBeVisible();
});
