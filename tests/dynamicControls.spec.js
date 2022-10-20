const { test, expect } = require('@playwright/test');

test('Test with input enable and disable', async ( { page }) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.click('a[href="/dynamic_controls"]');

    await page.click('button[onclick="swapInput()"]');

    await page.fill('input[type="text"]', 'Texto de teste do input 123');

    await page.click('button[onclick="swapInput()"]');

    await expect(await page.locator('input[type="text"]').inputValue()).toContain('Texto de teste');

});