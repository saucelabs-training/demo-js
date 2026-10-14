import CheckoutCompletePage from '../page-objects/CheckoutCompletePage.js';
import {setTestContext} from '../helpers/index.js';
import {LOGIN_USERS, PAGES} from "../configs/e2eConstants.js";

describe('Checkout - Complete', () => {
    it('should be able to test loading of login page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_COMPLETE,
        });

        await expect(await CheckoutCompletePage.waitForIsShown()).toEqual(
            true,
            'Checkout complete page was not shown',
        );
    });
});
