const { test } = require('./fixture');
const {expect} = require('@playwright/test');

test('cancel from cart returns to inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.locator('button[data-test="continue-shopping"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('cancel from info page returns to cart', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();
    await page.locator('button[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('button[data-test="checkout"]').click();

    await page.locator('button[data-test="cancel"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');
});

test('cancel from checkout page returns to inventory', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();
    await page.locator('button[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('.shopping_cart_link').click();
    await page.locator('button[data-test="checkout"]').click();
    await page.locator('input[data-test="firstName"]').fill('Luke');
    await page.locator('input[data-test="lastName"]').fill('Perry');
    await page.locator('input[data-test="postalCode"]').fill('90210');
    await page.locator('input[data-test="continue"]').click();

    await page.locator('button[data-test="cancel"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

test('start checkout navigates to checkout page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('input[data-test="username"]').fill('standard_user');
    await page.locator('input[data-test="password"]').fill('secret_sauce');
    await page.locator('input[data-test="login-button"]').click();
    await page.locator('button[data-test="add-to-cart-sauce-labs-onesie"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.locator('button[data-test="checkout"]').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});
