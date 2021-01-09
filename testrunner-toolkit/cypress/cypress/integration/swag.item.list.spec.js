import {LOGIN_USERS, PAGES, PRODUCTS} from '../support/e2eConstants';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';

describe('Swag items list', () => {
  it('should validate that all products are present', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    SwagOverviewPage.screen.should('be.visible');
    SwagOverviewPage.swagItems.should('have.length', 6);
  });

  it('should validate that the details of a product can be opened', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    SwagOverviewPage.screen.should('be.visible');

    // Actual test starts here
    const product = 'Sauce Labs Backpack';

    SwagOverviewPage.openSwagDetails(product);
    SwagDetailsPage.screen.should('be.visible');
    SwagDetailsPage.screen.contains(product);
  });

  it('should validate that a product can be added to the cart', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    SwagOverviewPage.screen.should('be.visible');

    // Actual test starts here
    AppHeaderPage.cart.should('have.text', '');
    SwagOverviewPage.addSwagToCart(0);
    AppHeaderPage.cart.should('have.text', '1');
  });

  it('should validate that a product can be removed from the cart', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
      products: [PRODUCTS.BACKPACK],
    });
    SwagOverviewPage.screen.should('be.visible');

    // Actual test starts here
    AppHeaderPage.cart.should('have.text', '1');
    SwagOverviewPage.removeSwagFromCart(0);
    AppHeaderPage.cart.should('have.text', '');
  });

  it('should be able to open the cart summary page', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    SwagOverviewPage.screen.should('be.visible');

    // Actual test starts here
    AppHeaderPage.openCart();
    CartSummaryPage.screen.should('be.visible');
  });
});
