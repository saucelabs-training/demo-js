class CheckoutSummaryPage {
    get screen() {
        return cy.get('#checkout_summary_container');
    }

    title(needle) {
        return this.swag(needle).find('.inventory_item_name');
    }

    description(needle) {
        return this.swag(needle).find('.inventory_item_desc');
    }

    price(needle) {
        return this.swag(needle).find('.inventory_item_price');
    }

    get cancelButton() {
        return cy.get('.cart_cancel_link');
    }

    get finishButton() {
        return cy.get('.cart_button');
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
     * Cancel checkout
     */
    cancelCheckout() {
        this.cancelButton.click();
    }

    /**
     * Finish checkout
     */
    finishCheckout() {
        this.finishButton.click();
    }
}

export default new CheckoutSummaryPage();
