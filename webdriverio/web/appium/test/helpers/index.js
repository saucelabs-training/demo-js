/**
 * Trigger the onChange on an element
 *
 * @param {string} selector the selector
 */
export function triggerOnChange(selector) {
    if (browser.isIOS) {
        browser.execute((elementSelector) => {
            let input = document.querySelector(elementSelector);
            let lastValue = '';
            let event = new Event('input', {bubbles: true});
            let tracker = input._valueTracker;
            if (tracker) {
                tracker.setValue(lastValue);
            }
            input.dispatchEvent(event);
        }, selector);
    }
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
export function setTestContext(data = {}) {
    const {path, products = [], user} = data;
    const {username} = user;
    const userStorage = `sessionStorage.setItem("session-username", "${username}");`;
    const productStorage = products.length > 0 ? `sessionStorage.setItem("cart-contents", "[${products.toString()}]");` : '';

    // Go to the domain and set the storage
    browser.url('');
    browser.execute(`${userStorage} ${productStorage}`);

    // Now got to the page
    browser.url(path);
}
