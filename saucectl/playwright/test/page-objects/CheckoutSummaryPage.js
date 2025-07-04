const BasePage = require('./BasePage')
const SELECTORS = {
    screen: '#checkout_summary_container',
    cancelButton: '.cart_cancel_link',
    finishButton: '.cart_button',
    items: '.cart_item',
}

class CheckoutSummaryPage extends BasePage {
    constructor(page) {
        super(page, SELECTORS.screen)
        this.page = page
    }

    /**
     * Get the amount of swag items in the cart
     *
     * @returns {Promise<number>}
     */
    async getSwagAmount() {
        return (await this.page.$$(SELECTORS.items)).length
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
            return this.page.evaluateHandle(
                ([items, string]) =>
                    [...document.querySelectorAll(items)].find((item) =>
                        item.textContent.includes(string),
                    ),
                [SELECTORS.items, needle],
            )
        }

        return (await this.page.$$(SELECTORS.items))[needle]
    }

    /**
     * Cancel checkout
     */
    async cancelCheckout() {
        await this.page.click(SELECTORS.cancelButton)
    }

    /**
     * Finish checkout
     */
    async finishCheckout() {
        await this.page.click(SELECTORS.finishButton)
    }
}

module.exports = {CheckoutSummaryPage}
