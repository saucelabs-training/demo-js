class MenuPage {
    get menu() {
        return cy.get('.bm-burger-button');
    }

    get inventoryListButton() {
        return cy.get('#inventory_sidebar_link');
    }

    get aboutButton() {
        return cy.get('#about_sidebar_link');
    }

    get logoutButton() {
        return cy.get('#logout_sidebar_link');
    }

    get resetButton() {
        return cy.get('#reset_sidebar_link');
    }

    /**
     * Open the menu
     */
    open() {
        this.menu.click();
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
