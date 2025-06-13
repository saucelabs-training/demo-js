class AppHeaderPage {
    private get cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     */
    async getCartAmount(): Promise<string> {
        // Make sure the animation is done
        await browser.pause(500);

        return this.cart.getText();
    }

    /**
     * Open the cart
     */
    async openCart() {
        await this.cart.click();
    }
}

export default new AppHeaderPage();
