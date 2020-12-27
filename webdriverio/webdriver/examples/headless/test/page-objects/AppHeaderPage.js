class AppHeaderPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     *
     * @return {string}
     */
    getCartAmount() {
        browser.pause(500)

        return this.#cart.getText();
    }

    /**
     * Open the cart
     */
    openCart() {
        this.#cart.click();
    }
}

export default new AppHeaderPage();
