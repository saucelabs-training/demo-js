import {Selector as $, t} from 'testcafe';
import BasePage from './BasePage';

class Login extends BasePage {
    constructor() {
        const screen = $('#login_button_container');

        super(screen);

        this.screen = screen;
        this.username = $('#user-name');
        this.password = $('#password');
        this.loginButton = $('.btn_action');
        this.errorMessage = $('[data-test="error"]');
    }

    /**
     * Sign in
     *
     * @param {object} userDetails
     * @param {string} userDetails.username
     * @param {string} userDetails.password
     *
     * @return {Promise<void>}
     */
    async signIn(userDetails) {
        const {password, username} = userDetails;

        if (username !== '') {
            await t.typeText(this.username, username);
        }
        if (password !== '') {
            await t.typeText(this.password, password);
        }

        await t.click(this.loginButton);
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
     * Check if the error message is displayed
     *
     * @returns {Promise<boolean>}
     */
    isErrorMessageDisplayed() {
        return this.errorMessage.visible;
    }
}

export default new Login();
