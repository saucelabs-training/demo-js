import {Selector as $, t} from 'testcafe';

class MenuPage {
    constructor() {
        this.menu = $('.bm-burger-button');
        this.inventoryListButton = $('#inventory_sidebar_link');
        this.aboutButton = $('#about_sidebar_link');
        this.logoutButton = $('#logout_sidebar_link');
        this.resetButton = $('#reset_sidebar_link');
    }

    /**
     * Open the menu
     *
     * @returns {Promise<void>}
     */
    async open() {
        await t.click(this.menu);

        return t.wait(500);
    }

    /**
     * Open the inventory list page
     *
     * @returns {Promise<void>}
     */
    async openInventoryList() {
        return t.click(this.inventoryListButton);
    }

    /**
     * Open the about page
     *
     * @returns {Promise<void>}
     */
    async openAboutPage() {
        return t.click(this.aboutButton);
    }

    /**
     * Logout
     *
     * @returns {Promise<void>}
     */
   async  logout() {
        return t.click(this.logoutButton);
    }

    /**
     * Reset the app state
     *
     * @returns {Promise<void>}
     */
    async restAppState() {
        return t.click(this.resetButton);
    }
}

export default new MenuPage();
