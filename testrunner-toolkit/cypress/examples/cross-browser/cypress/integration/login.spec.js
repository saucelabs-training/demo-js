import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import { LOGIN_USERS } from '../support/e2eConstants';

describe('LoginPage', () => {
  beforeEach(() => {
    cy.visit('');
  });

  it('should be able to test loading of login page', () => {
    LoginPage.screen.should('be.visible');
  });

  it('should be able to login with a standard user', () => {
    LoginPage.signIn(LOGIN_USERS.STANDARD);
    SwagOverviewPage.screen.should('be.visible');
  });

  it('should not be able to login with a locked user', () => {
    // It doesn't matter which error we check, all errors should be checked in a UT
    // With this UT we just check that A failure is triggered
    LoginPage.signIn(LOGIN_USERS.LOCKED);
    LoginPage.errorMessage.should('have.text','Epic sadface: Sorry, this user has been locked out.');
  });
});
