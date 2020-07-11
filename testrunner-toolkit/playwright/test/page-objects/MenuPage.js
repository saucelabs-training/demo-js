const SELECTORS = {
    menu: '.bm-burger-button',
    inventoryListButton: '#inventory_sidebar_link',
    aboutButton: '#about_sidebar_link',
    logoutButton: '#logout_sidebar_link',
    resetButton: '#reset_sidebar_link',
}
class MenuPage {
    /**
     * Open the menu
     */
    async open() {
        await page.click(SELECTORS.menu)
        await page.waitForTimeout(500)
    }

    /**
     * Open the inventory list page
     */
    async openInventoryList() {
        await page.click(SELECTORS.inventoryListButton)
    }

    /**
     * Open the about page
     */
    async openAboutPage() {
        await page.click(SELECTORS.aboutButton)
    }

    /**
     * Logout
     */
    async logout() {
        await page.click(SELECTORS.logoutButton)
    }

    /**
     * Reset the app state
     */
    async restAppState() {
        await page.click(SELECTORS.resetButton)
    }
}

module.exports = new MenuPage()
