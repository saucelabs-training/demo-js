import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES} from "../configs/e2eConstants";

describe('Checkout - Complete', () => {
    it('should be able to test loading of login page', () => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_COMPLETE,
        });

        expect(CheckoutCompletePage.waitForIsShown()).toEqual(
            true,
            'Checkout complete page was not shown',
        );
    });
});
