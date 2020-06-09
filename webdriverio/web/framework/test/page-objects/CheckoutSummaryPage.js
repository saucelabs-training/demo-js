import BasePage from './BasePage';

const SCREEN_SELECTOR = '#checkout_summary_container';

class CheckoutSummaryPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
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

    get #cancelButton() {
        return $('.cart_cancel_link');
    }

    get #finishButton() {
        return $('.cart_button');
    }

    get #items() {
        return $$('.cart_item');
    }

    /**
     * Get the amount of swag items listed on the page
     * @returns {number}
     */
    getSwagAmount() {
        return this.#items.length;
    }

    /**
     * Get a cart Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return the selected cart swag
     */
    swag(needle) {
        if (typeof needle === 'string') {
            return this.#items.find(cartItem => cartItem.getText().includes(needle));
        }

        return this.#items[needle];
    }

    /**
     * Get the text of the cart
     *
     * @param {number|string} needle
     *
     * @return {string}
     */
    getSwagText(needle) {
        return `${this.title(needle).getText()} ${this.description(needle).getText()} ${this.price(needle).getText()}`;
    }

    /**
     * Cancel checkout
     */
    cancelCheckout() {
        this.#cancelButton.click();
    }

    /**
     * Finish checkout
     */
    finishCheckout() {
        this.#finishButton.click();
    }
}

export default new CheckoutSummaryPage();
