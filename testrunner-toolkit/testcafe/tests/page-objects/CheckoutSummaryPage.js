import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class CheckoutSummaryPage extends BasePage {
    constructor() {
        const screen = $('#checkout_summary_container');

        super(screen);

        this.screen = screen;
        this.cancelButton = $('.cart_cancel_link');
        this.finishButton = $('.cart_button');
        this.items = $('.cart_item');
    }

    /**
     * Get the amount of swag items listed on the page
     *
     * @returns {Promise<number>}
     */
    getSwagAmount() {
        return this.items.count;
    }

    /**
     * Get a swag item based on text or a number
     *
     * @param {number|string} needle
     *
     * @returns {Selector}
     */
    swag(needle) {
        if (typeof needle === 'string') {
            return this.items.withText(needle);
        }

        return this.items.nth(needle);
    }

    /**
     * Cancel checkout
     *
     * @returns {Promise<void>}
     */
    cancelCheckout() {
        return t.click(this.cancelButton);
    }

    /**
     * Finsh checkout
     *
     * @returns {Promise<void>}
     */
    finishCheckout() {
        return t.click(this.finishButton);
    }
}

export default new CheckoutSummaryPage();
