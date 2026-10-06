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

    get menuWrap() {
        return $('.bm-menu-wrap');
    }

    /**
     * Open the menu
     */
    async open() {
        await this.menu.click();
        // Wait for the menu opening animation to finish, a fixed pause is not enough on slower VMs
        let previousX: number | undefined;
        await browser.waitUntil(async () => {
            if (await this.menuWrap.getAttribute('aria-hidden') !== 'false') {
                return false;
            }
            const { x } = await this.menuWrap.getLocation();
            const isStable = x === previousX;
            previousX = x;
            return isStable;
        }, { interval: 200, timeoutMsg: 'The menu did not finish opening' });
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
