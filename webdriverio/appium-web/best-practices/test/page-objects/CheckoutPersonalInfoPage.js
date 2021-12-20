import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';
import {triggerOnChange} from "../helpers";

const SCREEN_SELECTOR = '#checkout_info_container';

class CheckoutPersonalInfoPage extends BasePage {
  constructor() {
    super(SCREEN_SELECTOR);
  }

  // Make it private so people can't mess with it
  // Source: https://github.com/tc39/proposal-class-fields#private-fields
  get #screen() {
    return $(SCREEN_SELECTOR);
  }

  get #cancelButton() {
    return $('.cart_cancel_link');
  }

  get #continueCheckoutButton() {
    return $('.cart_button');
  }

  get #firstName() {
    return $('[data-test="firstName"]');
  }

  get #lastName() {
    return $('[data-test="lastName"]');
  }

  get #postalCode() {
    return $('[data-test="postalCode"]');
  }

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
   */
  async submitPersonalInfo(personalInfo) {
    const {firstName, lastName, zip} = personalInfo;

    await this.waitForIsShown();
    if (firstName) {
      await this.#firstName.addValue(firstName);
    }
    if (lastName) {
      await this.#lastName.addValue(lastName);
    }
    if (zip) {
      await this.#postalCode.addValue(zip);
    }
    await this.#continueCheckoutButton.click();
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
   * Cancel checkout
   */
  async cancelCheckout() {
    await this.#cancelButton.click();
  }
}

export default new CheckoutPersonalInfoPage();
