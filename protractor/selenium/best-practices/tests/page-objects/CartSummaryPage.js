import BasePage from './BasePage';

const SCREEN_SELECTOR = '#cart_contents_container';

class CartSummaryPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    // eslint-disable-next-line
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    // eslint-disable-next-line
    get #checkoutButton() {
        return $('.checkout_button');
    }

    // eslint-disable-next-line
    get #continueShoppingButton() {
        return $('.btn_secondary');
    }

    // eslint-disable-next-line
    get #swagItems() {
        return $$('.cart_item');
    }

    /**
     * Get the amount of swag items in the cart
     *
     * @returns {Promise<number>}
     */
    async getSwagAmount() {
        return this.#swagItems.count();
    }

    /**
     * Get a cart Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return {Promise<ElementFinder>} the selected swag
     */
    async swag(needle) {
        if (typeof needle === 'string') {
            return this.#swagItems.filter(async (elm) => (await elm.getText()).includes(needle)).first();
        }

        return this.#swagItems.get(needle);
    }

    /**
     * Get the text of the cart swag text
     *
     * @param {number|string} needle
     *
     * @returns {Promise<string>}
     */
    async getSwagText(needle) {
        return this.swag(needle).getText();
    }

    /**
     * Remove an swag from the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    async removeSwag(needle) {
        return (await this.swag(needle)).$('.btn_secondary.cart_button').click();
    }

    /**
     * Continue shopping
     *
     * @returns {Promise<void>}
     */
    async continueShopping() {
        this.#continueShoppingButton.click();
    }

    /**
     * Go to the checkout process
     *
     * @returns {Promise<void>}
     */
    async goToCheckout() {
        this.#checkoutButton.click();
    }
}

export default new CartSummaryPage();
