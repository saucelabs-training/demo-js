import BasePage from './BasePage';

const SCREEN_SELECTOR = '#checkout_summary_container';

class CheckoutSummaryPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    // eslint-disable-next-line
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    title(needle) {
        return this.swag(needle).$('.inventory_item_name');
    }

    description(needle) {
        return this.swag(needle).$('.inventory_item_desc');
    }

    price(needle) {
        return this.swag(needle).$('.inventory_item_price');
    }

    // eslint-disable-next-line
    get #cancelButton() {
        return $('.cart_cancel_link');
    }

    // eslint-disable-next-line
    get #finishButton() {
        return $('.cart_button');
    }

    // eslint-disable-next-line
    get #swagItems() {
        return $$('.cart_item');
    }

    /**
     * Get the amount of swag items listed on the page
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
     * Get the text of the cart
     *
     * @param {number|string} needle
     *
     * @return {Promise<string>}
     */
    async getSwagText(needle) {
        return `${await (this.title(needle).getText())} ${await (this.description(needle).getText())} ${await (this.price(needle).getText())}`;
    }

    /**
     * Cancel checkout
     *
     * @return {Promise<void>}
     */
    async cancelCheckout() {
        await this.#cancelButton.click();
    }

    /**
     * Finish checkout
     *
     * @return {Promise<void>}
     */
    async finishCheckout() {
        await this.#finishButton.click();
    }
}

export default new CheckoutSummaryPage();
