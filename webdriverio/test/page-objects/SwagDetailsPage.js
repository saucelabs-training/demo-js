import BasePage from './BasePage';

const SCREEN_SELECTOR = '.inventory_details';

class SwagDetailsPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    get #title() {
        return $('.inventory_details_name');
    }

    get #description() {
        return $('.inventory_details_desc');
    }

    get #price() {
        return $('.inventory_details_price');
    }

    get #addButton() {
        return $('.btn_primary.btn_inventory');
    }

    get #removeButton() {
        return $('.btn_secondary.btn_inventory');
    }

    get #goBackButton() {
        return $('.inventory_details_back_button');
    }

    /**
     * Get the text of the swag swag
     *
     * @return {string}
     */
    getText() {
        return `${this.#title.getText()} ${this.#description.getText()} ${this.#price.getText()}`;
    }

    /**
     * Add a swag items to the cart
     */
    addToCart() {
        this.#addButton.click();
    }

    /**
     * Remove a swag items from the cart
     */
    removeFromCart() {
        this.#removeButton.click();
    }

    /**
     * Go back to the inventory list
     */
    goBack() {
        this.#goBackButton.click();
    }
}

export default new SwagDetailsPage();
