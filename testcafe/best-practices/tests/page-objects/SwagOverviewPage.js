import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class SwagOverviewPage extends BasePage {
    constructor() {
        const screen = $('.inventory_list');

        super(screen);

        this.screen = screen;
        this.swagItems = $('.inventory_item');
    }

    /**
     * Get a swag item
     *
     * @param {number|string} needle
     *
     * @returns {Selector}
     */
    getSwagItem(needle){
        if (typeof needle === 'string') {
            return this.swagItems.withText(needle);
        }

        return this.swagItems.nth(needle);
    }

    /**
     * Get the swag item header based on text or a number
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemHeader(needle){
        return this.getSwagItem(needle).find('.inventory_item_name');
    }

    /**
     * Get the swag item add button based on text or a number
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemAddButton(needle){
        return this.getSwagItem(needle).find('.btn_primary.btn_inventory');
    }

    /**
     * Get the swag item remove button based on text or a number
     *
     * @param {string|number} needle
     *
     * @returns {Selector}
     */
    getSwagItemRemoveButton(needle){
        return this.getSwagItem(needle).find('.btn_secondary.btn_inventory');
    }

    /**
     * Open the details of a swag item based on text or a number
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    openSwagDetails(needle) {
        return t.click(this.getSwagItemHeader(needle));
    }

    /**
     * Get the amount of swag items on the page
     *
     * @returns {Promise<number>}
     */
    getAmount() {
        return this.swagItems.count;
    }

    /**
     * Add a swag item to the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    addSwagToCart(needle) {
        return t.click(this.getSwagItemAddButton(needle));
    }

    /**
     * Remove a swag item from the cart
     *
     * @param {number|string} needle
     *
     * @returns {Promise<void>}
     */
    removeSwagFromCart(needle) {
        return t.click(this.getSwagItemRemoveButton(needle));
    }
}

export default new SwagOverviewPage();
