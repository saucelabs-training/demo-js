import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import {setTestContext} from '../helpers';

fixture`Test swag items details page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
    });

test('should validate that we can go back from the details to the inventory page', async t => {
    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (t.browser.name.toLowerCase() !== 'internet explorer') {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.openSwagDetails(PRODUCTS.BACKPACK);
        await t.expect(SwagDetailsPage.isScreenDisplayed()).ok();
        await SwagDetailsPage.goBack();
        await t.expect(SwagOverviewPage.isScreenDisplayed()).ok();
    }
});

test('should validate that a product can be added to a cart', async t => {
    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (t.browser.name.toLowerCase() !== 'internet explorer') {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: `${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`,
        });
        await t.expect(SwagDetailsPage.isScreenDisplayed()).ok();
        await t.expect(await AppHeaderPage.getCartAmount()).eql('');
        await SwagDetailsPage.addToCart();
        await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
    }
});

test('should validate that a product can be removed from the cart', async t => {
    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (t.browser.name.toLowerCase() !== 'internet explorer') {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: `${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`,
            products: [PRODUCTS.BACKPACK],
        });
        await t.expect(SwagDetailsPage.isScreenDisplayed()).ok();
        await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
        await SwagDetailsPage.removeFromCart();
        await t.expect(await AppHeaderPage.getCartAmount()).eql('');
    }
});
