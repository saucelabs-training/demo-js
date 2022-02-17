import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import { LOGIN_USERS, PAGES, PRODUCTS } from '../support/e2eConstants';

describe('Cart Summary page', () => {
	it('should validate that we can continue shopping', () => {
		cy.setTestContext({
			user: LOGIN_USERS.STANDARD,
			path: PAGES.CART,
		});
		CartSummaryPage.screen.should('be.visible');

		// Actual test starts here
		CartSummaryPage.continueShopping();
		SwagOverviewPage.screen.should('be.visible');
	});

	it('should validate that we can go from the cart to the checkout page', () => {
		cy.setTestContext({
			user: LOGIN_USERS.STANDARD,
			path: PAGES.CART,
		});
		CartSummaryPage.screen.should('be.visible');

		// Actual test starts here
		CartSummaryPage.goToCheckout();
		CheckoutPersonalInfoPage.screen.should('be.visible');
	});

	it('should validate that a product can be removed from the cart', () => {
		cy.setTestContext({
			user: LOGIN_USERS.STANDARD,
			path: PAGES.CART,
			products: [PRODUCTS.BACKPACK],
		});
		CartSummaryPage.screen.should('be.visible');

		// Actual test starts here
		AppHeaderPage.cart.should('have.text', '1');
		CartSummaryPage.swag(0).should('be.visible');
		CartSummaryPage.items.should('have.length', 1);
		CartSummaryPage.removeSwag(0);
		AppHeaderPage.cart.should('have.text', '');
		CartSummaryPage.items.should('have.length', 0);
	});
});
