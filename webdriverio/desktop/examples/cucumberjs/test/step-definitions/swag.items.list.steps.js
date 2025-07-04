import AppHeaderPage from '../pageobjects/AppHeaderPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import SwagDetailsPage from '../pageobjects/SwagDetailsPage';
import CartSummaryPage from '../pageobjects/CartSummaryPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";
import {Given, When, Then} from "@cucumber/cucumber";

/**
 * This step example is using the CucumberJS cucumber expressions,
 * see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md#cucumber-expressions
 */
Given('I\'m on the swag overview page as an existing user', async () => {
  await setTestContext({
    user: LOGIN_USERS.STANDARD,
    path: PAGES.SWAG_ITEMS,
  });
  await SwagOverviewPage.waitForIsShown();
});
Given('I\'m on the swag overview page as an existing user with one product in my cart', async () => {
  await setTestContext({
    user: LOGIN_USERS.STANDARD,
    path: PAGES.SWAG_ITEMS,
    products: [PRODUCTS.BACKPACK]
  });
  await SwagOverviewPage.waitForIsShown();
});

Given('the cart has {int} items', async (amount) => {
  await expect(await AppHeaderPage.getCartAmount()).toEqual(
    amount,
    'The amount of cart items is not equal to nothing',
  );
});

When('I open the product details of {string}', async (product) => {
  await SwagOverviewPage.openSwagDetails(product);
});

When('I add product {int} to the cart', async (productNumber) => {
  await SwagOverviewPage.addSwagToCart(productNumber - 1);
});

When('I remove product {int} from the cart', async (productNumber) => {
  await SwagOverviewPage.removeSwagFromCart(productNumber - 1);
});

When('I open the cart', async () => {
  await AppHeaderPage.openCart();
});

Then('I should see {int} swag items', async (amount) => {
  await expect(await SwagOverviewPage.getAmount()).toEqual(
    amount,
    'Amount of items was not equal to 6',
  );
});

Then('I should see the details of the {string}', async (product) => {
  await expect(await SwagDetailsPage.getText()).toContain(
    product,
    'Swag Item detail page did not show the right text',
  );
});

Then('I should see the cart page', async () => {
  await expect(await CartSummaryPage.waitForIsShown()).toEqual(
    true,
    'Cart Summary page was not shown',
  );
});
