class CartSummaryPage {
    get screen() {
        return cy.get('#cart_contents_container');
    }

    get checkoutButton() {
        return cy.get('.checkout_button');
    }

    get continueShoppingButton() {
        return cy.get('.btn_secondary');
    }

    get items() {
        return cy.get('.cart_item');
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
            return this.items.contains(needle);
        }

        return this.items.eq(needle);
    }

    /**
     * Remove an swag from the cart
     *
     * @param {number|string} needle
     */
    removeSwag(needle) {
        this.swag(needle).find('.btn_secondary.cart_button').click();
    }

    /**
     * Continue shopping
     */
    continueShopping() {
        this.continueShoppingButton.click();
    }

    /**
     * Go to the checkout process
     */
    goToCheckout() {
        this.checkoutButton.click();
    }
}

export default new CartSummaryPage();
