import AppScreen from './AppScreen';
import {
  getTextOfElement,
  hideKeyboard,
  locatorStrategy,
} from '../helpers/utils';
import {findElementBySwipe} from '../helpers/gestures';

class CheckoutAddressScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('checkout address screen'));
  }

  private get checkoutAddressScrollContainer() {
    return $(locatorStrategy('checkout address screen'));
  }

  private get backButton() {
    return $(locatorStrategy('navigation back button'));
  }

  private get paymentButton() {
    return $(locatorStrategy('To Payment button'));
  }

  private get fullNameField() {
    return $(locatorStrategy('Full Name* input field'));
  }

  private get fullNameErrorMessage() {
    return $(locatorStrategy('Full Name*-error-message'));
  }

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

  async goBack() {
    return driver.isIOS ? this.backButton.click() : driver.back();
  }

  private async getElementText(
    searchElement: WebdriverIO.Element,
    textElement: WebdriverIO.Element,
  ) {
    await findElementBySwipe({
      element: await searchElement,
      scrollableElement: await this.checkoutAddressScrollContainer,
    });

    return getTextOfElement(await textElement);
  }

  private async addValueToField(element: WebdriverIO.Element, value: string) {
    await (
      await findElementBySwipe({
        element: await element,
        scrollableElement: await this.checkoutAddressScrollContainer,
      })
    )?.addValue(value);
    await hideKeyboard();
  }

  async tapOnPaymentButton() {
    await this.paymentButton.click();
  }

  async getFullNameErrorMessage(): Promise<string> {
    return this.getElementText(
      await this.fullNameField,
      await this.fullNameErrorMessage,
    );
  }

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

  async submitForm(
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
      await this.addValueToField(await this.fullNameField, fullName);
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

    await this.tapOnPaymentButton();
  }
}

export default new CheckoutAddressScreen();
