import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class CheckoutPersonalInfoPage extends BasePage {
    constructor() {
        const screen = $('#checkout_info_container');

        super(screen);

        this.screen = screen;
        this.cancelButton = $('.cart_cancel_link');
        this.continueCheckoutButton = $('.cart_button');
        this.firstName = $('[data-test="firstName"]');
        this.lastName = $('[data-test="lastName"]');
        this.postalCode = $('[data-test="postalCode"]');
        this.errorMessage = $('[data-test="error"]');
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

        if (firstName !== '') {
            await t.typeText(this.firstName, firstName);
        }
        if (lastName !== '') {
            await t.typeText(this.lastName, lastName);
        }
        if (zip !== '') {
            await t.typeText(this.postalCode, zip);
        }

        await t.click(this.continueCheckoutButton);
    }

    /**
     * Return the error message text
     *
     * @returns {Promise<string>}
     */
    getErrorMessage() {
        return this.errorMessage.innerText;
    }

    /**
     * Cancel checkout
     *
     * @returns {Promise<void>}
     */
    cancelCheckout() {
        return t.click(this.cancelButton);
    }
}

export default new CheckoutPersonalInfoPage();
