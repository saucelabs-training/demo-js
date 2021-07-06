import LoginPage from '../page-objects/LoginPage';

describe('Axe Login test', () => {
  beforeEach(() => {
    cy.visit('');

    // Inject the axe-core library
    cy.injectAxe();
  });

  it('should be able to test loading of login page', () => {
    LoginPage.screen.should('be.visible');

    // first a11y test
    cy.checkA11y();
  });
});
