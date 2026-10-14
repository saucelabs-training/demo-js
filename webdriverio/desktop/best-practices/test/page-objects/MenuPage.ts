class MenuPage {
    get menu() {
        return $('.bm-burger-button');
    }

    get inventoryListButton() {
        return $('#inventory_sidebar_link');
    }

    get aboutButton() {
        return $('#about_sidebar_link');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    get resetButton() {
        return $('#reset_sidebar_link');
    }

    /**
     * Open the menu
     */
    async open() {
        await this.menu.click();
        // Wait for the menu opening animation to finish
        await this.inventoryListButton.waitForClickable();
        await this.inventoryListButton.waitForStable();
    }

    /**
     * Open the inventory list page
     */
    async openInventoryList() {
        await this.inventoryListButton.click();
    }

    /**
     * Open the about page
     */
    async openAboutPage() {
        await this.aboutButton.click();
    }

    /**
     * Logout
     */
    async logout() {
        await this.logoutButton.click();
    }

    /**
     * Reset the app state
     */
    async restAppState() {
        await this.resetButton.click();
    }
}

export default new MenuPage();
