const BasePage = require('./BasePage');
const SELECTORS = {
    screen: '#checkout_info_container',
    cancelButton: '.cart_cancel_link',
    continueCheckoutButton: '.cart_button',
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    errorMessage: '[data-test="error"]',
}

class CheckoutPersonalInfoPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Submit personal info
     *
     * @param {object} personalInfo
     * @param {string} personalInfo.firstName
     * @param {string} personalInfo.lastName
     * @param {string} personalInfo.zip
     */
    async submitPersonalInfo(personalInfo) {
        const {firstName, lastName, zip} = personalInfo;

        await page.type(SELECTORS.firstName, firstName);
        await page.type(SELECTORS.lastName, lastName);
        await page.type(SELECTORS.postalCode, zip);
        await page.click(SELECTORS.continueCheckoutButton);
    }

    /**
     * Get the text or the error message container
     *
     * @return {Promise<string>}
     */
    async getErrorMessage() {
        await this.waitForIsDisplayed(SELECTORS.errorMessage)

        return this.getText(SELECTORS.errorMessage);
    }

    /**
     * Cancel checkout
     *
     * @return {Promise<void>}
     */
    async cancelCheckout() {
        return page.click(SELECTORS.cancelButton);
    }
}

module.exports = new CheckoutPersonalInfoPage();
