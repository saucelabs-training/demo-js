import BasePage from './BasePage';
import {waitForElementVisible} from '../helpers';

const SCREEN_SELECTOR = '#login_button_container';

class LoginPage extends BasePage {
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
    get #username() {
        return $('#user-name');
    }

    // eslint-disable-next-line
    get #password() {
        return $('#password');
    }

    // eslint-disable-next-line
    get #loginButton() {
        return $('.btn_action');
    }

    // eslint-disable-next-line
    get #errorMessage() {
        return $('[data-test="error"]');
    }

    /**
     * Sign in
     *
     * @param {object} userDetails
     * @param {string} userDetails.username
     * @param {string} userDetails.password
     *
     * @returns {Promise<void>}
     */
    async signIn(userDetails) {
        const {password, username} = userDetails;

        await this.#username.sendKeys(username);
        await this.#password.sendKeys(password);
        await this.#loginButton.click();
    }

    /**
     * Get the text or the error message container
     *
     * @return {string}
     */
    async getErrorMessage() {
        await waitForElementVisible(this.#errorMessage);

        return this.#errorMessage.getText();
    }

    /**
     * Check if the error message is displayed
     *
     * @return {boolean}
     */
    isErrorMessageDisplayed() {
        return this.#errorMessage.isPresent();
    }
}

export default new LoginPage();
