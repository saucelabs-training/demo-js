import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import {setTestContext} from '../helpers';
import LoginPage from '../page-objects/LoginPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

fixture`Test checkout summary page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_SUMMARY,
            products: [PRODUCTS.BACKPACK],
        });
        await t.expect(CheckoutSummaryPage.isScreenDisplayed()).ok();
    });

test('should validate that we can continue shopping', async t => {
    await CheckoutSummaryPage.finishCheckout();
    await t.expect(CheckoutCompletePage.isScreenDisplayed()).ok();
});

test('should validate that we can cancel checkout and go to the inventory page', async t => {
    await CheckoutSummaryPage.cancelCheckout();
    await t.expect(SwagOverviewPage.isScreenDisplayed()).ok();
});

test('should validate that we have 1 product in our checkout overview', async t => {
    await t.expect(CheckoutSummaryPage.getSwagAmount()).eql(1);
});
