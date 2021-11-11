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
export function setTestContext(data = {}) {
    const {path, products = [], user} = data;
    const {username} = user;
    const userCookies = `document.cookie="session-username=${username}";`;
    const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    // Go to the domain and set the storage
    browser.url('');
    browser.execute(`${userCookies} ${productStorage}`);

    // Now got to the page
    browser.url(path);
}
