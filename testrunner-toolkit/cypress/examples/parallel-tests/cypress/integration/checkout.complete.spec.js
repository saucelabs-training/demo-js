import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import {LOGIN_USERS, PAGES} from "../support/e2eConstants";

describe('Checkout - Complete', () => {
    it('should be able to test loading of login page', () => {
        cy.setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_COMPLETE,
        });
        CheckoutCompletePage.screen.should('be.visible');
    });
});
