const BasePage = require('./BasePage')
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
  constructor(page) {
    super(page, SELECTORS.screen)
    this.page = page
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
    const {firstName, lastName, zip} = personalInfo

    await this.page.type(SELECTORS.firstName, firstName)
    await this.page.type(SELECTORS.lastName, lastName)
    await this.page.type(SELECTORS.postalCode, zip)
    await this.page.click(SELECTORS.continueCheckoutButton)
  }

  /**
   * Get the text or the error message container
   *
   * @return {Promise<string>}
   */
  async getErrorMessage() {
    const elementHandle = await this.page.$(SELECTORS.errorMessage)

    return elementHandle.textContent()
  }

  /**
   * Cancel checkout
   *
   * @return {Promise<void>}
   */
  async cancelCheckout() {
    return this.page.click(SELECTORS.cancelButton)
  }
}

module.exports = {CheckoutPersonalInfoPage}
