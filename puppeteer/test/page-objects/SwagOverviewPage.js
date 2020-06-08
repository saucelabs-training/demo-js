const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '.inventory_list',
    swagItems: '.inventory_item',
    detailsLink: '.inventory_item_name',
    addSwagItemButton: '.btn_primary.btn_inventory',
    removeSwagItemButton: '.btn_secondary.btn_inventory',
}

class SwagOverviewPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Get the amount of swag items listed on the page
     *
     * @returns {Promise<number>}
     */
    async getAmount() {
        return (await page.$$(SELECTORS.swagItems)).length;
    }

    /**
     * Get a swag Item based on a search string or a number of the visible items
     *
     * @param {number|string} needle
     *
     * @return {Promise<ElementHandle>} the selected swag
     */
    async swag(needle) {
        if (typeof needle === 'string') {
            return page.evaluateHandle(
                (items, string) =>
                    [...document.querySelectorAll(items)].find(item => item.textContent.includes(string)),
                SELECTORS.swagItems,
                needle
            );
        }

        return (await page.$$(SELECTORS.swagItems))[needle];
    }

    /**
     * Find the JSHandle of an element within a swag
     *
     * @param {string} needle
     * @param {string} elementSelector
     *
     * @returns {Promise<JSHandle>}
     */
    async findJsHandleWithinSwag(needle, elementSelector){
        return page.evaluateHandle(
            (item, selector) => item.querySelector(selector),
            await this.swag(needle),
            elementSelector,
        );
    }

    /**
     * Add a swag items to the cart
     *
     * @param {number|string} needle
     *
     * @return {Promise<void>}
     */
    async addSwagToCart(needle) {
        const link = await this.findJsHandleWithinSwag(needle, SELECTORS.addSwagItemButton);

        await link.click();
    }

    /**
     * Remove swag items from the cart
     *
     * @param {number|string} needle
     *
     * @return {Promise<void>}
     */
    async removeSwagFromCart(needle) {
        const link = await this.findJsHandleWithinSwag(needle, SELECTORS.removeSwagItemButton);

        await link.click();
    }

    /**
     * Open the details of a swag item
     *
     * @param {number|string} needle
     *
     * @return {Promise<void>}
     */
    async openSwagDetails(needle) {
        const link = await this.findJsHandleWithinSwag(needle, SELECTORS.detailsLink);

        await link.click();
    }
}

module.exports = new SwagOverviewPage();
