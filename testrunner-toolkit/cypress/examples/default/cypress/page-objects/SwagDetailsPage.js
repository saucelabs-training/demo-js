class SwagDetailsPage {
    get screen() {
        return cy.get('.inventory_details');
    }

    get title() {
        return cy.get('.inventory_details_name');
    }

    get description() {
        return cy.get('.inventory_details_desc');
    }

    get price() {
        return cy.get('.inventory_details_price');
    }

    get addButton() {
        return cy.get('.btn_primary.btn_inventory');
    }

    get removeButton() {
        return cy.get('.btn_secondary.btn_inventory');
    }

    get goBackButton() {
        return cy.get('.inventory_details_back_button');
    }

    /**
     * Add a swag items to the cart
     */
    addToCart() {
        this.addButton.click();
    }

    /**
     * Remove a swag items from the cart
     */
    removeFromCart() {
        this.removeButton.click();
    }

    /**
     * Go back to the inventory list
     */
    goBack() {
        this.goBackButton.click({force: true});
    }
}

export default new SwagDetailsPage();
