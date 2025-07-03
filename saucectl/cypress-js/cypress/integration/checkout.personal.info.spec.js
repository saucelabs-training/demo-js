import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {LOGIN_USERS, PAGES, PERSONAL_INFO} from "../support/e2eConstants";

describe('Checkout - Personal info', () => {
    beforeEach(() => {
        cy.setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_PERSONAL_INFO,
        });
        CheckoutPersonalInfoPage.screen.should('be.visible');
    });

    it('should validate we get an error if we don not provide all personal information', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.NO_POSTAL_CODE);
        CheckoutPersonalInfoPage.screen.should('be.visible');
        CheckoutPersonalInfoPage.errorMessage.should('have.text','Error: Postal Code is required');
    });

    it('should validate that we can cancel the first checkout', () => {
        CartSummaryPage.screen.should('not.exist');
        CheckoutPersonalInfoPage.cancelCheckout();
        CartSummaryPage.screen.should('be.visible');
    });

    it('should be able to continue the checkout', () => {
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);
        CheckoutSummaryPage.screen.should('be.visible');
    });
});
