class AppHeaderPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     *
     * @return {number}
     */
    getCartAmount() {
        browser.pause(500)

        const amount = this.#cart.getText();

        return parseInt(amount || 0);
    }

    /**
     * Open the cart
     */
    openCart() {
        this.#cart.click();
    }
}

export default new AppHeaderPage();
