import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

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
  async signIn(userDetails) {
    const {password, username} = userDetails;

    await this.waitForIsShown();
    if (username) {
      await this.#username.addValue(username);
    }
    if (password) {
      await this.#password.addValue(password);
    }

    // For some reason Android is not clicking property
    if (browser.isAndroid) {
      return browser.execute('document.querySelector(\'.btn_action\').click()');
    }

    await this.#loginButton.click();
  }

  /**
   * Get the text or the error message container
   *
   * @return {string}
   */
  async getErrorMessage() {
    await this.#errorMessage.waitForDisplayed({timeout: DEFAULT_TIMEOUT});

    return this.#errorMessage.getText();
  }

  /**
   * Check if the error message is displayed
   *
   * @return {Promise <boolean>}
   */
  async isErrorMessageDisplayed() {
    return this.#errorMessage.isDisplayed();
  }
}

export default new LoginPage();
