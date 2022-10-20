const { test, expect } = require('@playwright/test');

test('Login with success', async ( { page }) => {
    
    await page.goto('https://the-internet.herokuapp.com/');

    await page.click('a[href="/login"]');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');

    await page.click('button[type="submit"]');

    //await expect(page).toHaveURL(/.*secure/);
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!')
})