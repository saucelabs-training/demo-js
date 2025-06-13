import AppScreen from './AppScreen';
import {
  getTextOfElement,
  hideKeyboard,
  hideNumericKeyboard,
  locatorStrategy,
} from '../helpers/utils';
import {findElementBySwipe} from '../helpers/gestures';

class CheckoutPaymentScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('checkout payment screen'));
  }

  private get checkoutPaymentScrollContainer() {
    return $(locatorStrategy('checkout payment screen'));
  }

  private get backButton() {
    return $(locatorStrategy('navigation back button'));
  }

  private get reviewOrderButton() {
    return $(locatorStrategy('Review Order button'));
  }

  private async fullNameField(fieldNumber: number = 0) {
    return (await $$(locatorStrategy('Full Name* input field')))[fieldNumber];
  }

  private async fullNameErrorMessage(fieldNumber: number = 0) {
    return (await $$(locatorStrategy('Full Name*-error-message')))[fieldNumber];
  }

  private get cardNumberField() {
    return $(locatorStrategy('Card Number* input field'));
  }

  private get cardNumberErrorMessage() {
    return $(locatorStrategy('Card Number*-error-message'));
  }

  private get expirationDateField() {
    return $(locatorStrategy('Expiration Date* input field'));
  }

  private get expirationDateErrorMessage() {
    return $(locatorStrategy('Expiration Date*-error-message'));
  }

  private get securityCodeField() {
    return $(locatorStrategy('Security Code* input field'));
  }

  private get securityCodeErrorMessage() {
    return $(locatorStrategy('Security Code*-error-message'));
  }

  private get billingAddressCheckbox() {
    return $(
      locatorStrategy(
        'checkbox for My billing address is the same as my shipping address.',
      ),
    );
  }

  /**
   * Shipping Address Methods
   */
  private get addressLineOneField() {
    return $(locatorStrategy('Address Line 1* input field'));
  }

  private get addressLineOneErrorMessage() {
    return $(locatorStrategy('Address Line 1*-error-message'));
  }

  private get addressLineTwoField() {
    return $(locatorStrategy('Address Line 2 input field'));
  }

  private get cityField() {
    return $(locatorStrategy('City* input field'));
  }

  private get cityErrorMessage() {
    return $(locatorStrategy('City*-error-message'));
  }

  private get stateRegionField() {
    return $(locatorStrategy('State/Region input field'));
  }

  private get zipCodeField() {
    return $(locatorStrategy('Zip Code* input field'));
  }

  private get zipCodeErrorMessage() {
    return $(locatorStrategy('Zip Code*-error-message'));
  }

  private get countryField() {
    return $(locatorStrategy('Country* input field'));
  }

  private get countryErrorMessage() {
    return $(locatorStrategy('Country*-error-message'));
  }

  /**
   * Generic methods
   */
  private async getElementText(
    searchElement: WebdriverIO.Element,
    textElement: WebdriverIO.Element,
  ) {
    await findElementBySwipe({
      element: await searchElement,
      scrollableElement: await this.checkoutPaymentScrollContainer,
    });

    return getTextOfElement(await textElement);
  }

  async goBack() {
    return driver.isIOS ? this.backButton.click() : driver.back();
  }

  private async addValueToField(
    element: WebdriverIO.Element,
    value: string | number,
  ) {
    await (
      await findElementBySwipe({
        element: await element,
        scrollableElement: await this.checkoutPaymentScrollContainer,
      })
    )?.addValue(value);

    if (typeof value === 'number') {
      await hideNumericKeyboard();
    } else {
      await hideKeyboard();
    }
  }

  /**
   * Payment method methods
   */
  async getFullNameErrorMessage(fieldNumber: number = 0): Promise<string> {
    return this.getElementText(
      await this.fullNameField(fieldNumber),
      await this.fullNameErrorMessage(fieldNumber),
    );
  }

  async getCardNumberErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.cardNumberField,
      await this.cardNumberErrorMessage,
    );
  }

  async getExpirationDateErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.expirationDateField,
      await this.expirationDateErrorMessage,
    );
  }

  async getSecurityCodeErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.securityCodeField,
      await this.securityCodeErrorMessage,
    );
  }

  async tapOnBillingAddressCheckbox() {
    await (
      await findElementBySwipe({
        element: await this.billingAddressCheckbox,
        scrollableElement: await this.checkoutPaymentScrollContainer,
      })
    )?.click();
    // Add a small pause here to be sure the elements are there
    await driver.pause(750);
  }

  async tapOnReviewOrderButton() {
    await this.reviewOrderButton.click();
  }

  async fillCardData(
    formData: {
      fullName?: string;
      cardNumber?: number;
      expirationDate?: string;
      securityCode?: number;
    } = {},
  ) {
    const {fullName, cardNumber, expirationDate, securityCode} = formData;

    if (fullName) {
      await this.addValueToField(await this.fullNameField(), fullName);
    }
    if (cardNumber) {
      await this.addValueToField(await this.cardNumberField, cardNumber);
    }
    if (expirationDate) {
      await this.addValueToField(
        await this.expirationDateField,
        expirationDate,
      );
    }
    if (securityCode) {
      await this.addValueToField(await this.securityCodeField, securityCode);
    }
  }

  /**
   * Billing Address methods
   */
  async getAddressLineOneErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.addressLineOneField,
      await this.addressLineOneErrorMessage,
    );
  }

  async getCityErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.cityField,
      await this.cityErrorMessage,
    );
  }

  async getZipCodeErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.zipCodeField,
      await this.zipCodeErrorMessage,
    );
  }

  async getCountryErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.countryField,
      await this.countryErrorMessage,
    );
  }

  async fillBillingData(
    formData: {
      fullName?: string;
      addressLineOne?: string;
      addressLineTwo?: string;
      city?: string;
      stateRegion?: string;
      zipCode?: string;
      country?: string;
    } = {},
  ) {
    const {
      fullName,
      addressLineOne,
      addressLineTwo,
      city,
      stateRegion,
      zipCode,
      country,
    } = formData;

    if (fullName) {
      await this.addValueToField(await this.fullNameField(1), fullName);
    }
    if (addressLineOne) {
      await this.addValueToField(
        await this.addressLineOneField,
        addressLineOne,
      );
    }
    if (addressLineTwo) {
      await this.addValueToField(
        await this.addressLineTwoField,
        addressLineTwo,
      );
    }
    if (city) {
      await this.addValueToField(await this.cityField, city);
    }
    if (stateRegion) {
      await this.addValueToField(await this.stateRegionField, stateRegion);
    }
    if (zipCode) {
      await this.addValueToField(await this.zipCodeField, zipCode);
    }
    if (country) {
      await this.addValueToField(await this.countryField, country);
    }
  }
}

export default new CheckoutPaymentScreen();
