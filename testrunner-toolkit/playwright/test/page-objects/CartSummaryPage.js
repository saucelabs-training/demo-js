const BasePage = require('./BasePage')
const SELECTORS = {
    screen: '#cart_contents_container',
    checkoutButton: '.checkout_button',
    continueShoppingButton: '.btn_secondary',
    items: '.cart_item',
    removeSwagItemButton: '.btn_secondary.cart_button',
}

class CartSummaryPage extends BasePage {
    constructor() {
        super(SELECTORS.screen)
    }

    /**
     * Get the amount of swag items in the cart
     *
     * @returns {Promise<number>}
     */
    async getSwagAmount() {
        return (await page.$$(SELECTORS.items)).length
    }

    /**
     * Get a swag Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return {Promise<ElementHandle>} the selected swag
     */
    async swag(needle) {
        if (typeof needle === 'string') {
            return page.evaluateHandle(
                ([items, string]) =>
                    [...document.querySelectorAll(items)].find((item) =>
                        item.textContent.includes(string),
                    ),
                [SELECTORS.items, needle],
            )
        }

        return (await page.$$(SELECTORS.items))[needle]
    }

    /**
     * Find the JSHandle of an element within a swag
     *
     * @param {string} needle
     * @param {string} elementSelector
     *
     * @returns {Promise<JSHandle>}
     */
    async findJsHandleWithinSwag(needle, elementSelector) {
        return page.evaluateHandle(
            ([item, selector]) => item.querySelector(selector),
            [await this.swag(needle), elementSelector],
        )
    }

    /**
     * Remove swag items from the cart
     *
     * @param {number|string} needle
     *
     * @return {Promise<void>}
     */
    async removeSwag(needle) {
        const link = await this.findJsHandleWithinSwag(
            needle,
            SELECTORS.removeSwagItemButton,
        )

        await link.click()
    }

    /**
     * Continue shopping
     *
     * @return {Promise<void>}
     */
    async continueShopping() {
        return page.click(SELECTORS.continueShoppingButton)
    }

    /**
     * Go to the checkout process
     *
     * @return {Promise<void>}
     */
    async goToCheckout() {
        return page.click(SELECTORS.checkoutButton)
    }
}

module.exports = new CartSummaryPage()
