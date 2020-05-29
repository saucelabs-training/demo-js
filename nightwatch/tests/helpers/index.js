/**
 * Set the test context
 *
 * @param {object} browser
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 *
 * @returns
 */
function setTestContext(browser, data = {}) {
    const {path, products = [], user} = data;
    const {username} = user;
    const userStorage = `sessionStorage.setItem("session-username", "${username}");`;
    const productStorage = products.length > 0 ? `sessionStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    return browser
        // Go to the domain
        .url(browser.launchUrl)
        // Set the storage
        .execute(`${userStorage} ${productStorage}`)
        // Go to the page
        .url(`${browser.launchUrl}${path}`);
}

module.exports = {
    setTestContext,
};
