import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

class LoginPage extends BasePage {
  constructor() {
    super('#login_button_container');
  }

  // Make it private so people can't mess with it
  // Source: https://github.com/tc39/proposal-class-fields#private-fields
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
  async signIn(userDetails) {
    const {password, username} = userDetails;

    await this.waitForIsShown();
    if (username) {
      await this.#username.setValue(username);
    }
    if (password) {
      await this.#password.setValue(password);
    }

    await this.#loginButton.click();
  }

  /**
   * Get the text or the error message container
   *
   * @return {Promise<string>}
   */
  async getErrorMessage() {
    await this.#errorMessage.waitForDisplayed({timeout: DEFAULT_TIMEOUT});

    return this.#errorMessage.getText();
  }

  /**
   * Check if the error message is displayed
   *
   * @return {Promise<boolean>}
   */
  async isErrorMessageDisplayed() {
    return this.#errorMessage.isDisplayed();
  }
}

export default new LoginPage();
