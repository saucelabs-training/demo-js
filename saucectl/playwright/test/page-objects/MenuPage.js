const SELECTORS = {
    menu: '.bm-burger-button',
    inventoryListButton: '#inventory_sidebar_link',
    aboutButton: '#about_sidebar_link',
    logoutButton: '#logout_sidebar_link',
    resetButton: '#reset_sidebar_link',
}
class MenuPage {
    constructor(page) {
        this.page = page
    }

    /**
     * Open the menu
     */
    async open() {
        await this.page.click(SELECTORS.menu)
        await this.page.waitForTimeout(500)
    }

    /**
     * Open the inventory list page
     */
    async openInventoryList() {
        await this.page.click(SELECTORS.inventoryListButton)
    }

    /**
     * Open the about page
     */
    async openAboutPage() {
        await this.page.click(SELECTORS.aboutButton)
    }

    /**
     * Logout
     */
    async logout() {
        await this.page.click(SELECTORS.logoutButton)
    }

    /**
     * Reset the app state
     */
    async restAppState() {
        await this.page.click(SELECTORS.resetButton)
    }
}

module.exports = {MenuPage}
