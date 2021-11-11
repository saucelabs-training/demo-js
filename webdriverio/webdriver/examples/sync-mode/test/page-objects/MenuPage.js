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
    open() {
        this.menu.click();
        browser.pause(500);
    }

    /**
     * Open the inventory list page
     */
    openInventoryList() {
        this.inventoryListButton.click();
    }

    /**
     * Open the about page
     */
    openAboutPage() {
        this.aboutButton.click();
    }

    /**
     * Logout
     */
    logout() {
        this.logoutButton.click();
    }

    /**
     * Reset the app state
     */
    restAppState() {
        this.resetButton.click();
    }
}

export default new MenuPage();
