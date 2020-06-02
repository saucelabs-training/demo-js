const BasePage = require('./BasePage');
const SELECTORS = {
    errorMessage: '[data-test="error"]',
    screen: '#login_button_container',
    username: '#user-name',
    password: '#password',
    loginButton: '.btn_action',
};
const {PAGES} = require('../e2eConstants');

class LoginPage extends BasePage {
    constructor() {
        super(SELECTORS.screen);
    }

    /**
     * Open the Login page
     *
     * @returns {Promise<void>}
     */
    async open(){
        return this.goTo(PAGES.BASE_URL);
    }

    /**
     * Sign in
     *
     * @param {object} userDetails
     * @param {string} userDetails.username
     * @param {string} userDetails.password
     */
    async signIn(userDetails) {
        const {password, username} = userDetails;

        await page.type(SELECTORS.username, username);
        await page.type(SELECTORS.password, password);
        await page.click(SELECTORS.loginButton);
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
}

module.exports = new LoginPage();
