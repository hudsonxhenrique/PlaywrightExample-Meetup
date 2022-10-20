const { test, expect } = require('@playwright/test');

test('Testing an anthentication page', async ( { browser }) => {

    const context = await browser.newContext({httpCredentials: {username: 'admin', password: 'admin'}});
    const page = await context.newPage();
    
    await page.goto('https://the-internet.herokuapp.com/')

    await page.click('a[href="/basic_auth"]');

    await expect(await page.locator('div[class="example"] p').innerText()).toContain('Congratulations');

});