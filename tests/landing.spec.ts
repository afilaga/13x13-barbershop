import { test, expect } from '@playwright/test';

test('has correct title and brand name', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/13x13/);
});

test('has dikidi button in hero section', async ({ page }) => {
    await page.goto('/');
    const heroButton = page.locator('a[href="https://dikidi.net/#widget=207607"]').first();
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

test('mobile homepage does not show a blocking preload screen', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.getByRole('heading', { name: /барбершоп/i }).first()).toBeVisible();
    await expect(page.getByTestId('desktop-preloader')).not.toBeVisible();
    await expect(page.locator('canvas')).toHaveCount(0);
});

test('desktop homepage keeps the branded preload screen', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');
    await expect(page.getByTestId('desktop-preloader')).toBeVisible();
});

test('native mobile menu opens without client hydration', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await page.locator('summary[aria-label="Открыть меню"]').click();
    await expect(page.getByRole('link', { name: 'ГАЛЕРЕЯ' })).toBeVisible();
});
