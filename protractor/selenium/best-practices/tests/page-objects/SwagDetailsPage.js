import BasePage from './BasePage';

const SCREEN_SELECTOR = '.inventory_details';

class SwagDetailsPage extends BasePage {
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
    get #title() {
        return $('.inventory_details_name');
    }

    // eslint-disable-next-line
    get #description() {
        return $('.inventory_details_desc');
    }

    // eslint-disable-next-line
    get #price() {
        return $('.inventory_details_price');
    }

    // eslint-disable-next-line
    get #addButton() {
        return $('.btn_primary.btn_inventory');
    }

    // eslint-disable-next-line
    get #removeButton() {
        return $('.btn_secondary.btn_inventory');
    }

    // eslint-disable-next-line
    get #goBackButton() {
        return $('.inventory_details_back_button');
    }

    /**
     * Get the text of the swag swag
     *
     * @return {Promise<string>}
     */
    async getText() {
        return `${await (this.#title.getText())} ${await (this.#description.getText())} ${await (this.#price.getText())}`;
    }

    /**
     * Add a swag items to the cart
     *
     * @returns {Promise<void>}
     */
    async addToCart() {
        await this.#addButton.click();
    }

    /**
     * Remove a swag items from the cart
     *
     * @returns {Promise<void>}
     */
    async removeFromCart() {
        await this.#removeButton.click();
    }

    /**
     * Go back to the inventory list
     *
     * @returns {Promise<void>}
     */
    async goBack() {
        await this.#goBackButton.click();
    }
}

export default new SwagDetailsPage();
