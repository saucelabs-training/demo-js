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
        sessionStorage.setItem('session-username', sessionUserName);
        sessionStorage.setItem('cart-contents', productSessionStorage);
    });
    await setSessionStorage(username, productStorage);
    await t.navigateTo(`${baseUrl}${path}`);
}
