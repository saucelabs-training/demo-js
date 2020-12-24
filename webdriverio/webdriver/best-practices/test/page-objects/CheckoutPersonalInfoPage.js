import BasePage from './BasePage';
import {DEFAULT_TIMEOUT} from '../configs/e2eConstants';

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
  submitPersonalInfo(personalInfo) {
    const {firstName, lastName, zip} = personalInfo;

    this.waitForIsShown();
    if (firstName) {
      this.#firstName.addValue(firstName);
    }
    if (lastName) {
      this.#lastName.addValue(lastName);
    }
    if (zip) {
      this.#postalCode.addValue(zip);
    }
    this.#continueCheckoutButton.click();
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
   * Cancel checkout
   */
  cancelCheckout() {
    this.#cancelButton.click();
  }
}

export default new CheckoutPersonalInfoPage();
