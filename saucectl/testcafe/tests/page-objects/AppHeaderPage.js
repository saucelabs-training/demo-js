import {Selector as $, t} from 'testcafe';

class AppHeaderPage {
    constructor() {
        this.cart = $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     *
     * @return {Promise<string>}
     */
    async getCartAmount() {
        await t.wait(500);

        return this.cart.innerText;
    }

    /**
     * Open the cart
     *
     * @returns {Promise<void>}
     */
    openCart() {
        return t.click(this.cart);
    }
}

export default new AppHeaderPage();
