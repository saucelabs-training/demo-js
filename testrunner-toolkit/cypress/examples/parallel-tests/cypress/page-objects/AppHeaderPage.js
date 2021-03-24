class AppHeaderPage {
    get cart() {
        return cy.get('.shopping_cart_link');
    }

    /**
     * Open the cart
     */
    openCart() {
        this.cart.click();
    }
}

export default new AppHeaderPage();
