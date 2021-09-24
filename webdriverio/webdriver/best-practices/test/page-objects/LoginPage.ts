import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

class LoginPage extends BasePage {
  constructor() {
    super('#login_button_container');
  }

  get username() {
    return $('#user-name');
  }

  get password() {
    return $('#password');
  }

  get loginButton() {
    return $('.btn_action');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  /**
   * Sign in.
   */
  async signIn(userDetails: {username: string, password: string}) {
    const {password, username} = userDetails;

    await this.waitForIsShown();
    if (username) {
      await this.username.setValue(username);
    }
    if (password) {
      await this.password.setValue(password);
    }

    await this.loginButton.click();
  }

  /**
   * Get the text or the error message container
   */
  async getErrorMessage():Promise<string> {
    await this.errorMessage.waitForDisplayed({timeout: DEFAULT_TIMEOUT});

    return this.errorMessage.getText();
  }

  /**
   * Check if the error message is displayed
   */
  async isErrorMessageDisplayed():Promise<boolean> {
    return this.errorMessage.isDisplayed();
  }
}

export default new LoginPage();
