import BasePage from './BasePage';

const SCREEN_SELECTOR = '.inventory_details';

class SwagDetailsPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #title() {
        return $('.inventory_details_name');
    }

    get #description() {
        return $('.inventory_details_desc');
    }

    get #price() {
        return $('.inventory_details_price');
    }

    /**
     * Get the text of the swag
     *
     * @return {Promise<string>}
     */
    async getText() {
        return `${await this.#title.getText()} ${await this.#description.getText()} ${await this.#price.getText()}`;
    }
}

export default new SwagDetailsPage();
