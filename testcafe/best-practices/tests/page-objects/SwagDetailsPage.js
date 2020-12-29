import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class SwagDetailsPage extends BasePage {
    constructor() {
        const screen = $('.inventory_details');

        super(screen);

        this.screen = screen;
        this.swagTitle = $('.inventory_details_name');
        this.addButton = $('.btn_primary.btn_inventory');
        this.removeButton = $('.btn_secondary.btn_inventory');
        this.goBackButton = $('.inventory_details_back_button');
    }

    /**
     * Get the swag title
     *
     * @returns {Promise<string>}
     */
    getSwagTitle(){
        return this.swagTitle.innerText;
    }

    /**
     * Click on the go back button
     *
     * @returns {Promise<void>}
     */
    goBack(){
        return t.click(this.goBackButton);
    }

    /**
     * Add the item to the cart
     *
     * @returns {Promise<void>}
     */
    addToCart(){
        return t.click(this.addButton);
    }

    /**
     * Remove the item from the cart
     *
     * @returns {Promise<void>}
     */
    removeFromCart(){
        return t.click(this.removeButton);
    }

}

export default new SwagDetailsPage();
