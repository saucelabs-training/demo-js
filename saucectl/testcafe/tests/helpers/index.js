import {ClientFunction, t} from 'testcafe';

const setSessionStorage = ClientFunction((sessionUserName, productSessionStorage) => {
    document.cookie = `session-username=${sessionUserName}; Secure; SameSite=Strict`;
    localStorage.setItem('cart-contents', productSessionStorage);
});

const getReadyState = ClientFunction(() => document.readyState);

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
    const productStorage = JSON.stringify(products);

    // Go to the domain and wait for page to be ready before mutating storage
    await t.navigateTo(baseUrl);
    await t.expect(getReadyState()).eql('complete');

    await setSessionStorage(username, productStorage);

    // Give the browser/TestCafe runtime a moment to settle after storage mutation
    await t.wait(500);

    await t.navigateTo(`${baseUrl}${path}`);
    await t.expect(getReadyState()).eql('complete');
}
