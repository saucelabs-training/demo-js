import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import {setTestContext} from '../helpers';
import CartSummaryPage from '../page-objects/CartSummaryPage';

fixture`Test swag items overview page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
    });

test('should validate that all products are present', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
    });

    // The actual test
    await t.expect(SwagOverviewPage.getAmount()).eql(6);
});

test('should validate that the details of a product can be opened', async t => {
    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (t.browser.name.toLowerCase() !== 'internet explorer') {
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });

        // The actual test
        const product = 'Sauce Labs Backpack';

        await SwagOverviewPage.openSwagDetails(product);
        await t.expect(SwagDetailsPage.isScreenDisplayed()).ok();
        await t.expect(SwagDetailsPage.getSwagTitle()).eql(product);
    }
});

test('should validate that a product can be added to a cart', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
    });

    // The actual test
    await t.expect(await AppHeaderPage.getCartAmount()).eql('');
    await SwagOverviewPage.addSwagToCart(0);
    await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
});

test('should validate that a product can be removed from the cart', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
        products: [PRODUCTS.BACKPACK],
    });

    // The actual test
    await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
    await SwagOverviewPage.removeSwagFromCart(0);
    await t.expect(await AppHeaderPage.getCartAmount()).eql('');
});

test('should be able to open the cart summary page', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.SWAG_ITEMS,
    });

    // The actual test
    await AppHeaderPage.openCart();
    await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
});
