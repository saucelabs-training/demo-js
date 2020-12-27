import BasePage from './BasePage';

const SCREEN_SELECTOR = '.inventory_list';

class SwagOverviewPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    // eslint-disable-next-line
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    // eslint-disable-next-line
    get #swagItems() {
        return $$('.inventory_item');
    }

    /**
     * Get the amount of swag items listed on the page
     *
     * @returns {Promise<number>}
     */
    getAmount() {
        return this.#swagItems.count();
    }

    /**
     * Get a swag Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return {Promise<ElementFinder>} the selected swag
     */
    async swag(needle) {
        if (typeof needle === 'string') {
            return this.#swagItems.filter(async (elm) => (await elm.getText()).includes(needle)).first();
        }

        return this.#swagItems.get(needle);
    }

    /**
     * Get the text of the swag swag text
     *
     * @param {number|string} needle
     *
     * @return {Promise<string>}
     */
    async getSwagText(needle) {
        return this.swag(needle).getText();
    }

    /**
     * Add a swag items to the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    async addSwagToCart(needle) {
        await (await this.swag(needle)).$('.btn_primary.btn_inventory').click();
    }

    /**
     * Remove swag items from the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    async removeSwagFromCart(needle) {
        await (await this.swag(needle)).$('.btn_secondary.btn_inventory').click();
    }

    /**
     * Open the details of a swag swag
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    async openSwagDetails(needle) {
        await (await this.swag(needle)).$('.inventory_item_name').click();
    }
}

export default new SwagOverviewPage();
