import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class CartSummaryPage extends BasePage {
    constructor() {
        const screen = $('#cart_contents_container');

        super(screen);

        this.screen = screen;
        this.checkoutButton = $('.checkout_button');
        this.continueShoppingButton = $('.btn_secondary');
        this.cartItems = $('.cart_item');
    }

    /**
     * Get a cart item
     *
     * @param {number|string} needle
     *
     * @returns {Selector}
     */
    getCartItem(needle) {
        if (typeof needle === 'string') {
            return this.cartItems.withText(needle);
        }

        return this.cartItems.nth(needle);
    }

    /**
     * Get the amount of swag items on the page
     *
     * @returns {Promise<number>}
     */
    getAmount() {
        return this.cartItems.count;
    }

    /**
     * Get the swag remove button based on text or a number
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagRemoveButton(needle){
        return this.getCartItem(needle).find('.btn_secondary.cart_button');
    }

    /**
     * Remove swag from the cart based on text or a number
     *
     * @param {number|string} needle
     *
     * @return {Promise<void>}
     */
    removeSwag(needle) {
        return t.click(this.getSwagRemoveButton(needle));
    }

    /**
     * Continue shopping
     *
     * @return {Promise<void>}
     */
    continueShopping() {
        return t.click(this.continueShoppingButton);
    }

    /**
     * Go to the checkout process
     *
     * @return {Promise<void>}
     */
    goToCheckout() {
        return t.click(this.checkoutButton);
    }

}

export default new CartSummaryPage();
