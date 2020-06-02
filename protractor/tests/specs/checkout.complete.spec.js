import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES} from '../configs/e2eConstants';

describe('Checkout - Complete', () => {
    it('should be able to test loading of login page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_COMPLETE,
        });

        expect(await CheckoutCompletePage.waitForIsDisplayed()).toEqual(
            true,
            'Checkout complete page was not shown',
        );
    });
});
