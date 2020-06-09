import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import {setTestContext} from '../helpers';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';


fixture`Test cart items overview page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
    });

test('should validate that we can continue shopping', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
    });
    await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
    await CartSummaryPage.continueShopping();
    await t.expect(SwagOverviewPage.isScreenDisplayed()).ok();
});

test('should validate that we can go from the cart to the checkout page', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
    });
    await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
    await CartSummaryPage.goToCheckout();
    await t.expect(CheckoutPersonalInfoPage.isScreenDisplayed()).ok();
});

test('should validate that a product can be removed from the cart', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CART,
        products: [PRODUCTS.BACKPACK],
    });
    await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
    await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
    await t.expect(await CartSummaryPage.getAmount()).eql(1);
    await CartSummaryPage.removeSwag(0);
    await t.expect(await AppHeaderPage.getCartAmount()).eql('');
    await t.expect(await CartSummaryPage.getAmount()).eql(0);
});
