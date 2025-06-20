import {LOGIN_USERS, PAGES} from '../configs/e2eConstants';
import {setTestContext} from '../helpers';
import LoginPage from '../page-objects/LoginPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';

fixture`Test cart items overview page`
  .beforeEach(async t => {
      await t
        .resizeWindow(1400, 900)
  });

test('should validate that we can continue shopping', async t => {
    await setTestContext({
        baseUrl: LoginPage.url,
        user: LOGIN_USERS.STANDARD,
        path: PAGES.CHECKOUT_COMPLETE,
    });
    await t.expect(CheckoutCompletePage.isScreenDisplayed()).ok();
});
