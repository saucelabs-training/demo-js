import AppScreen from './AppScreen';
import {getTextOfElement, locatorStrategy} from '../helpers/utils';
import {findElementBySwipe} from '../helpers/gestures';

class CartScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('cart screen'));
  }
  private async item({
    needle,
  }: {
    needle: string;
  }): Promise<WebdriverIO.Element | undefined> {
    const itemSelector = 'product row';
    const iosSelector = `-ios class chain:**/XCUIElementTypeOther[\`name == "${itemSelector}" AND label CONTAINS "${needle}"\`]`;
    const androidSelector = `//android.widget.TextView[contains(@text,'${needle}')]//ancestor::*[@content-desc='${itemSelector}']`;
    const elem = await $(driver.isIOS ? iosSelector : androidSelector);

    return findElementBySwipe({
      element: elem,
      scrollableElement: await $(locatorStrategy('cart screen')),
    });
  }

  private get items() {
    return $$(locatorStrategy('product row'));
  }

  private get CartButton() {
    return $(
      locatorStrategy(driver.isIOS ? 'tab bar option cart' : 'cart badge'),
    );
  }

  private get GoShoppingButton() {
    return $(locatorStrategy('Go Shopping button'));
  }

  private get ProceedToCheckoutButton() {
    return $(locatorStrategy('Proceed To Checkout button'));
  }

  private get CheckoutFooter() {
    return $(locatorStrategy('checkout footer'));
  }

  async openCart() {
    await this.CartButton.click();
  }

  async goShopping() {
    await this.GoShoppingButton.click();
  }

  async proceedToCheckout() {
    await this.ProceedToCheckoutButton.click();
  }

  async proceedToCheckoutShown(): Promise<boolean> {
    return this.ProceedToCheckoutButton.isDisplayed();
  }

  async getCheckoutFooterText(): Promise<string> {
    return getTextOfElement(await this.CheckoutFooter);
  }

  async itemsAmount(): Promise<number> {
    return (await this.items).length;
  }

  /**
   * NOTE: This will pick the first occurrence if more items with the same name are found
   */
  async removeItem(needle: string) {
    const item = await this.item({needle});
    await item?.$(locatorStrategy('remove item')).click();

    // Add a hard pause here for the state to be updated
    await driver.pause(1000);
  }
}

export default new CartScreen();
