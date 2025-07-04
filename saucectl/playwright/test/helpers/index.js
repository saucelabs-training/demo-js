const BasePage = require('../page-objects/BasePage')
const { PAGES } = require('../e2eConstants')

/**
 * Set the tests context
 *
 * @param {object} page
 * @param {object} data
 * @param {object} data.user
 * @param {string} data.user.username
 * @param {string} data.user.password
 * @param {string} data.path
 * @param {array} data.products
 *
 * @returns {Promise<void>}
 */
async function setTestContext(page, data = {}) {
    const basePage = new BasePage(page)
    const { BASE_URL } = PAGES
    const { path, products = [], user } = data
    const { username } = user
    const productStorage =
        products.length > 0 ? `[${products.toString()}]` : '[]'

    // Go to the domain and set the storage
    await basePage.goTo(BASE_URL)
    await page.evaluate(
        ([sessionUserName, productSessionStorage]) => {
            document.cookie=`session-username=${sessionUserName}`;
            localStorage.setItem('cart-contents', productSessionStorage)
        },
        [username, productStorage],
    )
    await basePage.goTo(`${BASE_URL}${path}`)
}

module.exports = {
    setTestContext,
}
