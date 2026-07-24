import {ClientFunction, t} from 'testcafe';

/**
 * Set the tests context
 *
 * @param {object} data
 * @param {string} data.baseUrl
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 *
 * @returns {Promise<void>}
 */
export async function setTestContext(data = {}) {
    const {baseUrl, path, products = [], user} = data;
    const {username} = user;
    const productStorage = products.length > 0 ? `[${products.toString()}]` : '[]';

    // Go to the domain and set the storage
    await t.navigateTo(baseUrl);
    const setSessionStorage = ClientFunction((sessionUserName, productSessionStorage) => {
        document.cookie=`session-username=${sessionUserName}`;
        localStorage.setItem('cart-contents', productSessionStorage);
    });
    await setSessionStorage(username, productStorage);
    await t.navigateTo(`${baseUrl}${path}`);
}

/**
 * Runs a click action and confirms the client-side navigation it triggers
 * actually landed, retrying the click if it didn't.
 *
 * TestCafe simulates clicks rather than dispatching native browser input
 * events, which can occasionally be missed by the app's click handlers on
 * client-side route changes. Re-issuing the click recovers from that instead
 * of just waiting longer on a click that never registered.
 *
 * @param {() => Promise<void>} clickAction
 * @param {Selector} resultSelector
 * @param {object} [options]
 * @param {number} [options.attempts]
 * @param {number} [options.timeout]
 *
 * @returns {Promise<void>}
 */
export async function clickUntilVisible(clickAction, resultSelector, {attempts = 3, timeout = 5000} = {}) {
    for (let attempt = 1; attempt <= attempts; attempt++) {
        await clickAction();

        if (await resultSelector.with({timeout}).visible) {
            return;
        }
    }
}
