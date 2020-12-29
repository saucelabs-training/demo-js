import {LOGIN_USERS, PAGES, PERSONAL_INFO} from '../configs/e2eConstants';
import {setTestContext} from '../helpers';
import LoginPage from '../page-objects/LoginPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';

fixture`Test checkout overview page`
    .beforeEach(async t => {
        await t.resizeWindow(1366, 768);
        await setTestContext({
            baseUrl: LoginPage.url,
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_PERSONAL_INFO,
        });
        await t.expect(CheckoutPersonalInfoPage.isScreenDisplayed()).ok();
    });

test('should validate we get an error if we don not provide all personal information', async t => {
    // It doesn't matter which error we check here, all error states should have been tested in a UT
    // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
    await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.NO_POSTAL_CODE);
    await t.expect(CheckoutPersonalInfoPage.isScreenDisplayed()).ok();
    await t.expect(CheckoutPersonalInfoPage.getErrorMessage()).eql('Error: Postal Code is required');
});

test('should validate that we can cancel the first checkout', async t => {
    await t.expect(CartSummaryPage.isScreenDisplayed()).notOk();
    await CheckoutPersonalInfoPage.cancelCheckout();
    await t.expect(CartSummaryPage.isScreenDisplayed()).ok();
});

test('should be able to continue the checkout', async t => {
    await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);
    await t.expect(CheckoutSummaryPage.isScreenDisplayed()).ok();
});
