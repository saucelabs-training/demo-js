const BasePage = require('./BasePage')
const SELECTORS = {
    cart: '.shopping_cart_link',
}

class AppHeaderPage extends BasePage {
    /**
     * Get the cart amount
     *
     * @return {string}
     */
    async getCartAmount() {
        const elementHandle = await page.$(SELECTORS.cart)

        return elementHandle.textContent()
    }

    /**
     * Open the cart
     */
    async openCart() {
        await page.click(SELECTORS.cart)
    }
}

module.exports = new AppHeaderPage()
