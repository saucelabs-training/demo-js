class MenuPage {
    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    // eslint-disable-next-line
    get #menu() {
        return $('.bm-burger-button');
    }

    // eslint-disable-next-line
    get #inventoryListButton() {
        return $('#inventory_sidebar_link');
    }

    // eslint-disable-next-line
    get #aboutButton() {
        return $('#about_sidebar_link');
    }

    // eslint-disable-next-line
    get #logoutButton() {
        return $('#logout_sidebar_link');
    }

    // eslint-disable-next-line
    get #resetButton() {
        return $('#reset_sidebar_link');
    }

    /**
     * Open the menu
     *
     * @returns {Promise<void>}
     */
    async open() {
        await this.#menu.click();

        await browser.sleep(500);
    }

    /**
     * Open the inventory list page
     *
     * @returns {Promise<void>}
     */
    async openInventoryList() {
        await this.#inventoryListButton.click();
    }

    /**
     * Open the about page
     *
     * @returns {Promise<void>}
     */
    async openAboutPage() {
        await this.#aboutButton.click();
    }

    /**
     * Logout
     *
     * @returns {Promise<void>}
     */
    async logout() {
        await this.#logoutButton.click();
    }

    /**
     * Reset the app state
     *
     * @returns {Promise<void>}
     */
    async restAppState() {
        await this.#resetButton.click();
    }
}

export default new MenuPage();
