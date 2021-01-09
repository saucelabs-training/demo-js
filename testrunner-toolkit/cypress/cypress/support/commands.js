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
