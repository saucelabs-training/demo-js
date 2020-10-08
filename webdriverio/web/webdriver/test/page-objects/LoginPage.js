import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';
import {triggerOnChange} from "../helpers";

const SCREEN_SELECTOR = '#login_button_container';

class LoginPage extends BasePage {
    constructor() {
        super(SCREEN_SELECTOR);
    }

    // Make it private so people can't mess with it
    // Source: https://github.com/tc39/proposal-class-fields#private-fields
    get #screen() {
        return $(SCREEN_SELECTOR);
    }

    get #username() {
        return $('#user-name');
    }

    get #password() {
        return $('#password');
    }

    get #loginButton() {
        return $('.btn_action');
    }

    get #errorMessage() {
        return $('[data-test="error"]');
    }

    /**
     * Sign in
     *
     * @param {object} userDetails
     * @param {string} userDetails.username
     * @param {string} userDetails.password
     */
    signIn(userDetails) {
        const {password, username} = userDetails;

        this.waitForIsShown();
        this.#username.setValue(username);
        triggerOnChange('#user-name');
        this.#password.setValue(password);
        triggerOnChange('#password');
        if (browser.isAndroid) {
            return browser.execute('document.querySelector(\'.btn_action\').click()');
        }

        this.#loginButton.click();
    }

    /**
     * Get the text or the error message container
     *
     * @return {string}
     */
    getErrorMessage() {
        this.#errorMessage.waitForDisplayed({timeout: DEFAULT_TIMEOUT});

        return this.#errorMessage.getText();
    }

    /**
     * Check if the error message is displayed
     *
     * @return {boolean}
     */
    isErrorMessageDisplayed() {
        return this.#errorMessage.isDisplayed();
    }
}

export default new LoginPage();
