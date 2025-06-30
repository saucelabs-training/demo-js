import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../support/e2eConstants";

describe('Checkout - Summary', () => {
    beforeEach(() => {
        cy.setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_SUMMARY,
            products: [PRODUCTS.BACKPACK],
        });
        CheckoutSummaryPage.screen.should('be.visible');
    });

    it('should validate that we can continue shopping', () => {
        CheckoutSummaryPage.finishCheckout();
        CheckoutCompletePage.screen.should('be.visible');
    });

    it('should validate that we can cancel checkout and go to the inventory page', () => {
        CheckoutSummaryPage.cancelCheckout();
        SwagOverviewPage.screen.should('be.visible');
    });

    it('should validate that we have 1 product in our checkout overview', () => {
        CheckoutSummaryPage.items.should('have.length', 1);
    });
});
