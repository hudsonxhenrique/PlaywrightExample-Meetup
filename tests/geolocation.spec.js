const { test, expect } = require('@playwright/test');

test.use({
    geolocation: { latitude: 2.294474, longitude: 48.858455 },
    permissions: ['geolocation'],

})

test('Test using predefined geolocation', async ( { page }) => {

    await page.goto('https://the-internet.herokuapp.com/');

    await page.click('a[href="/geolocation"]');

    await page.click('button[onclick="getLocation()"]');

    await expect(await page.locator('#lat-value').innerText()).toEqual('2.294474');

    await expect(await page.locator('#long-value').innerText()).toEqual('48.858455');
});