import BasePage from './BasePage';
import {waitForElementVisible} from '../helpers';

const SCREEN_SELECTOR = '#checkout_info_container';

class CheckoutPersonalInfoPage extends BasePage {
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
    get #cancelButton() {
        return $('.cart_cancel_link');
    }

    // eslint-disable-next-line
    get #continueCheckoutButton() {
        return $('.cart_button');
    }

    // eslint-disable-next-line
    get #firstName() {
        return $('[data-test="firstName"]');
    }

    // eslint-disable-next-line
    get #lastName() {
        return $('[data-test="lastName"]');
    }

    // eslint-disable-next-line
    get #postalCode() {
        return $('[data-test="postalCode"]');
    }

    // eslint-disable-next-line
    get #errorMessage() {
        return $('[data-test="error"]');
    }

    /**
     * Submit personal info
     *
     * @param {object} personalInfo
     * @param {string} personalInfo.firstName
     * @param {string} personalInfo.lastName
     * @param {string} personalInfo.zip
     *
     * @returns {Promise<void>}
     */
    async submitPersonalInfo(personalInfo) {
        const {firstName, lastName, zip} = personalInfo;

        await this.#firstName.sendKeys(firstName);
        await this.#lastName.sendKeys(lastName);
        await this.#postalCode.sendKeys(zip);
        await this.#continueCheckoutButton.click();
    }

    /**
     * Get the text or the error message container
     *
     * @return {Promise<string>}
     */
    async getErrorMessage() {
        await waitForElementVisible(this.#errorMessage);

        return this.#errorMessage.getText();
    }

    /**
     * Cancel checkout
     *
     * @returns {Promise<void>}
     */
    async cancelCheckout() {
        await this.#cancelButton.click();
    }
}

export default new CheckoutPersonalInfoPage();
