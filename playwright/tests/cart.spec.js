const { test } = require('../tests/fixture');
const {expect} = require('@playwright/test');

test('add item from product page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1', { message: 'Item not correctly added to cart' });
});

test('remove item from product page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    await page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0, { message: 'Item not correctly removed from cart' });
});

test('add item from inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});

test('remove item from inventory page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();

    await page.locator('[data-test="remove-sauce-labs-bike-light"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0, { message: 'Shopping Cart is not empty' });
});

test('remove item from cart page', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();

    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

    await expect(page.locator('.shopping_cart_badge')).toHaveCount(0, { message: 'Shopping Cart is not empty' });
});
