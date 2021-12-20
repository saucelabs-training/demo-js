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

    async title(needle) {
        return (await this.swag(needle)).$('.inventory_item_name');
    }

    async description(needle) {
        return (await this.swag(needle)).$('.inventory_item_desc');
    }

    async price(needle) {
        return (await this.swag(needle)).$('.inventory_item_price');
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
     * @returns {Promise <number>}
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
     * Get the text of the cart
     *
     * @param {number|string} needle
     *
     * @return {Promise <string>}
     */
    async getSwagText(needle) {
        return `${await this.title(needle).getText()} ${await this.description(needle).getText()} ${await this.price(needle).getText()}`;
    }

    /**
     * Cancel checkout
     */
    async cancelCheckout() {
        await this.#cancelButton.click();
    }

    /**
     * Finish checkout
     */
    async finishCheckout() {
        await this.#finishButton.click();
    }
}

export default new CheckoutSummaryPage();
