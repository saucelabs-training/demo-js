// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Set the test context
 *
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 */
 Cypress.Commands.add("setTestContext", (data = {}) => {
    const {path, products = [], user} = data;
    const {username} = user;
    const productStorage = products.length > 0 ? `[${products.toString()}]` : '[]';
  
    // Go to the domain and set the storage
    cy.visit('');
    window.sessionStorage.setItem("session-username", username);
    window.sessionStorage.setItem("cart-contents", productStorage);
  
    // Now got to the page
    cy.visit(path);
  });
