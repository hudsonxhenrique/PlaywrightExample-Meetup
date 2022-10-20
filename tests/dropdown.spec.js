const { test, expect } = require('@playwright/test');

test('Test select option 2', async ( { page }) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.click('a[href="/dropdown"]');

    //await page.locator('#dropdown').selectOption('2');
    await page.locator('#dropdown').selectOption({label: 'Option 2'});

    await expect(page.locator('#dropdown')).toHaveValue('2');

});