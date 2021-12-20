import BasePage from './BasePage';

const SCREEN_SELECTOR = '#cart_contents_container';

class CartSummaryPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    get #checkoutButton() {
        return $('.checkout_button');
    }

    get #continueShoppingButton() {
        return $('.btn_secondary');
    }

    get #items() {
        return $$('.cart_item');
    }

    /**
     * Get the amount of swag items in the cart
     */
    async getSwagAmount() {
        return this.#items.length;
    }

    /**
     * Get a cart Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @returns {Promise<undefined|WebdriverIO.Element|*>}
     */
    async swag(needle) {
        if (typeof needle === 'string') {
            for (const item of await this.#items) {
                if ((await item.getText()).includes(needle)) {
                    return item;
                }
            }

            return undefined;
        }

        return this.#items[needle];
    }

    /**
     * Get the text of the cart swag text
     *
     * @param {number|string} needle
     *
     * @return {string}
     */
    async getSwagText(needle) {
        return this.swag(needle).getText();
    }

    /**
     * Remove an swag from the cart
     *
     * @param {number|string} needle
     */
    async removeSwag(needle) {
        await (await this.swag(needle)).$('.btn_secondary.cart_button').click();
    }

    /**
     * Continue shopping
     */
    async continueShopping() {
        await this.#continueShoppingButton.click();
    }

    /**
     * Go to the checkout process
     */
    async goToCheckout() {
        await this.#checkoutButton.click();
    }
}

export default new CartSummaryPage();
