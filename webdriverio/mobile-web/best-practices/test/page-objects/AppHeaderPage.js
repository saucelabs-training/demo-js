class AppHeaderPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     *
     * @return {Promise<string>}
     */
    async getCartAmount() {
        await browser.pause(500)

        return this.#cart.getText();
    }

    /**
     * Open the cart
     */
    async openCart() {
        await this.#cart.click();
    }
}

export default new AppHeaderPage();
