class CheckoutPersonalInfoPage  {
  get screen() {
    return cy.get('#checkout_info_container');
  }

  get cancelButton() {
    return cy.get('.cart_cancel_link');
  }

  get continueCheckoutButton() {
    return cy.get('.cart_button');
  }

  get firstName() {
    return cy.get('[data-test="firstName"]');
  }

  get lastName() {
    return cy.get('[data-test="lastName"]');
  }

  get postalCode() {
    return cy.get('[data-test="postalCode"]');
  }

  get errorMessage() {
    return cy.get('[data-test="error"]');
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

    if (firstName) {
      this.firstName.type(firstName);
    }
    if (lastName) {
      this.lastName.type(lastName);
    }
    if (zip) {
      this.postalCode.type(zip);
    }
    this.continueCheckoutButton.click();
  }

  /**
   * Cancel checkout
   */
  cancelCheckout() {
    this.cancelButton.click();
  }
}

export default new CheckoutPersonalInfoPage();
