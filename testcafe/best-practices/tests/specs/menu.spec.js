import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import {setTestContext} from '../helpers';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import MenuPage from '../page-objects/MenuPage';
import AppHeaderPage from '../page-objects/AppHeaderPage';

fixture`Test checkout summary page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
        await MenuPage.open();
    });

test('should be able to go to the swag items overview page', async t => {
    await MenuPage.openInventoryList();
    await t.expect(SwagOverviewPage.isScreenDisplayed()).ok();
});

test('should be able to open the about page', async t => {
    await MenuPage.openAboutPage();
    await t.expect(CartSummaryPage.isScreenDisplayed()).notOk();
});

test('should be able to log out', async t => {
    await MenuPage.logout();
    await t.expect(LoginPage.isScreenDisplayed()).ok();
});

test('should be able to clear the cart', async t => {
    await t.expect(await AppHeaderPage.getCartAmount()).eql('1');
    await MenuPage.restAppState();
    await t.expect(await AppHeaderPage.getCartAmount()).eql('');
});
