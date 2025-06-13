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
    const userCookies = `document.cookie="session-username=${username}";`;
    const productStorage = products.length > 0 ? `localStorage.setItem("cart-contents", "[${products.toString()}]");` : '';
    
    // Check if we're running on iOS Safari
    const isIOS = browser.options.desiredCapabilities.platformName === 'iOS';
    
    return browser
        // Go to the domain
        .url(browser.launchUrl)
        // Wait a bit longer for iOS Safari
        .perform(function() {
            if (isIOS) {
                return new Promise(resolve => setTimeout(resolve, 2000));
            }
        })
        // Set the storage
        .execute(`${userCookies} ${productStorage}`)
        // Wait a bit longer for iOS Safari
        .perform(function() {
            if (isIOS) {
                return new Promise(resolve => setTimeout(resolve, 1000));
            }
        })
        // Go to the page
        .url(`${browser.launchUrl}${path}`)
        // Wait a bit longer for iOS Safari
        .perform(function() {
            if (isIOS) {
                return new Promise(resolve => setTimeout(resolve, 2000));
            }
        });
}

module.exports = {
    setTestContext,
};
