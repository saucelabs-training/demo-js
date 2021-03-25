import {LOGIN_USERS, PAGES, PRODUCTS} from '../support/e2eConstants';
import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';

describe('Swag Item Details', () => {
  it('should validate that we can go back from the details to the inventory page', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    cy.visit(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);

    // Actual test starts here
    SwagDetailsPage.screen.should('be.visible');
    SwagDetailsPage.goBack();
    SwagDetailsPage.screen.should('not.exist');
  });

  it('should validate that a product can be added to a cart', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
    });
    cy.visit(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
    SwagDetailsPage.screen.should('be.visible');

    // Actual test starts here
    AppHeaderPage.cart.should('have.text', '');
    SwagDetailsPage.addToCart();
    AppHeaderPage.cart.should('have.text', '1');
  });

  it('should validate that a product can be removed from the cart', () => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.SWAG_ITEMS,
      products: [PRODUCTS.BACKPACK],
    });
    cy.visit(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
    SwagDetailsPage.screen.should('be.visible');

    // Actual test starts here
    AppHeaderPage.cart.should('have.text', '1');
    SwagDetailsPage.removeFromCart();
    AppHeaderPage.cart.should('have.text', '');
  });
});
