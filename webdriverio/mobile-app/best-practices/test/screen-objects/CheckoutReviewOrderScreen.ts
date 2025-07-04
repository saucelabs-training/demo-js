import AppScreen from './AppScreen';
import {getTextOfElement, locatorStrategy} from '../helpers/utils';

class CheckoutReviewOrderScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('checkout review order screen'));
  }

  private get backButton() {
    return $(locatorStrategy('navigation back button'));
  }

  private get items() {
    return $$(locatorStrategy('product row'));
  }

  private get checkoutFooter() {
    return $(locatorStrategy('checkout footer'));
  }

  private get deliveryAddressContainer() {
    return $(locatorStrategy('checkout delivery address'));
  }

  private get paymentInfoContainer() {
    return $(locatorStrategy('checkout payment info'));
  }

  private get billingAddressContainer() {
    return $(locatorStrategy('checkout billing address'));
  }

  private get deliveryDetailsContainer() {
    return $(locatorStrategy('checkout delivery details'));
  }

  private get placeOrderButton() {
    return $(locatorStrategy('Place Order button'));
  }

  async goBack() {
    return driver.isIOS ? this.backButton.click() : driver.back();
  }

  async itemsAmount(): Promise<number> {
    return (await this.items).length;
  }

  async getCheckoutFooterText(): Promise<string> {
    return getTextOfElement(await this.checkoutFooter);
  }

  async getDeliveryAddressText(): Promise<string> {
    return getTextOfElement(await this.deliveryAddressContainer);
  }

  async getPaymentText(): Promise<string> {
    return getTextOfElement(await this.paymentInfoContainer);
  }

  async getBillingText(): Promise<string> {
    return getTextOfElement(await this.billingAddressContainer);
  }

  async getDeliveryDetailsText(): Promise<string> {
    return getTextOfElement(await this.deliveryDetailsContainer);
  }

  async placeOrder() {
    await this.placeOrderButton.click();
  }
}

export default new CheckoutReviewOrderScreen();
