const BasePage = require('./BasePage')
const SELECTORS = {
    screen: '#checkout_summary_container',
    cancelButton: '.cart_cancel_link',
    finishButton: '.cart_button',
    items: '.cart_item',
}

class CheckoutSummaryPage extends BasePage {
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
     * Cancel checkout
     */
    async cancelCheckout() {
        await page.click(SELECTORS.cancelButton)
    }

    /**
     * Finish checkout
     */
    async finishCheckout() {
        await page.click(SELECTORS.finishButton)
    }
}

module.exports = new CheckoutSummaryPage()
