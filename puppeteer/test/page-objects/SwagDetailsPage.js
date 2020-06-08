const BasePage = require('./BasePage');
const {PAGES} = require('../e2eConstants');
const SELECTORS = {
    screen: '.inventory_details',
    title: '.inventory_details_name',
    description: '.inventory_details_name',
    price: '.inventory_details_price',
    addButton: '.btn_primary.btn_inventory',
    removeButton: '.btn_secondary.btn_inventory',
    goBackButton: '.inventory_details_back_button',
}

class SwagOverviewPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Open the Login page
     *
     * @param {string} product
     *
     * @returns {Promise<void>}
     */
    async open(product) {
        return this.goTo(`${PAGES.BASE_URL}${PAGES.SWAG_DETAILS}?id=${product}`);
    }

    /**
     * Get the text of the swag
     *
     * @return {Promise<string>}
     */
    async getSwagDetailsText() {
        return `${await this.getText(SELECTORS.title)} ${await this.getText(SELECTORS.description)} ${await this.getText(SELECTORS.price)}`;
    }

    /**
     * Add a swag items to the cart
     *
     * @return {Promise<void>}
     */
    async addToCart() {
        return page.click(SELECTORS.addButton);
    }

    /**
     * Remove a swag items from the cart
     *
     * @return {Promise<void>}
     */
    async removeFromCart() {
        return page.click(SELECTORS.removeButton);
    }

    /**
     * Go back to the inventory list
     *
     * @return {Promise<void>}
     */
    async goBack() {
        return page.click(SELECTORS.goBackButton);
    }

}

module.exports = new SwagOverviewPage();
