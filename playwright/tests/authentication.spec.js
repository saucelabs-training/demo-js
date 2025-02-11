const { test } = require('./fixture');
const {expect} = require('@playwright/test');

test('cancel from cart and return to inventory', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.locator('button[data-test="continue-shopping"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('sign in successfully', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html', {message: 'Login Not Successful'});
});

test('logout successfully', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/', {message: 'Logout Not Successful'});
});