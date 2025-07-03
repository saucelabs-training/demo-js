import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import LoginPage from "../page-objects/LoginPage";
import CartSummaryPage from "../page-objects/CartSummaryPage";
import MenuPage from "../page-objects/MenuPage";
import {LOGIN_USERS, PAGES, PRODUCTS} from "../support/e2eConstants";

describe('Menu', () => {
  beforeEach(() => {
    cy.setTestContext({
      user: LOGIN_USERS.STANDARD,
      path: PAGES.CART,
      products: [PRODUCTS.BACKPACK],
    });
    CartSummaryPage.screen.should('be.visible');
    MenuPage.open();
  });

  it('should be able to the swag items overview page', () => {
    MenuPage.openInventoryList();
    SwagOverviewPage.screen.should('be.visible');
  });

  // Cypress can't, unless you accept `"chromeWebSecurity": false` in your cypress.json-file
  // open external urls
  // it('should be able to open the about page', () => {
  //   MenuPage.openAboutPage();
  //   CartSummaryPage.screen.should('not.exist');
  // });

  it('should be able to log out', () => {
    MenuPage.logout();
    LoginPage.screen.should('be.visible');
  });

  it('should be able to clear the cart', () => {
    AppHeaderPage.cart.should('have.text', '1');
    MenuPage.restAppState();
    AppHeaderPage.cart.should('have.text', '');
  });
})
