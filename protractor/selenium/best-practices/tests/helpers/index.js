import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

/**
 * Wait for an element to be present
 *
 * @param {ElementFinder} elementFinder
 * @param {number} timeout
 *
 * @returns {Promise<void>}
 */
export async function waitForElementVisible(elementFinder, timeout = DEFAULT_TIMEOUT) {
    const EC = protractor.ExpectedConditions;

    // Waits for the element to be visible on the dom.
    await browser.wait(EC.visibilityOf(elementFinder), timeout);
}

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
export async function setTestContext(data = {}) {
    const {path, products = [], user} = data;
    const {username} = user;
    const userStorage = `sessionStorage.setItem("session-username", "${username}");`;
    const productStorage = products.length > 0 ? `sessionStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    // Go to the domain and set the storage
    await browser.get('/');
    await browser.executeScript(`${userStorage} ${productStorage}`);

    // Now got to the page
    await browser.get(path);
}
