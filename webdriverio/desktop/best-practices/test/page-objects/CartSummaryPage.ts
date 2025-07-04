import BasePage from './BasePage';

type Needle = string|number;

class CartSummaryPage extends BasePage {
  constructor() {
    super('#cart_contents_container');
  }

  private get checkoutButton() {
    return $('.checkout_button');
  }

  private get continueShoppingButton() {
    return $('.btn_secondary');
  }

  private get items() {
    return $$('.cart_item');
  }

  /**
   * Get the amount of swag items in the cart
   */
  async getSwagAmount(): Promise<number> {
    return this.items.length;
  }

  /**
   * Get a cart Item based on a search string or a number of the visible items
   */
  async swag(needle: Needle): Promise<WebdriverIO.Element> {
    if (typeof needle === 'string') {
      for (const item of await this.items) {
        if ((await item.getText()).includes(needle)){
          return item;
        }
      }

      return undefined;
    }

    return this.items[needle];
  }

  /**
   * Get the text of the cart swag text
   */
  async getSwagText(needle: Needle) {
    return (await this.swag(needle)).getText();
  }

  /**
   * Remove an swag from the cart
   */
  async removeSwag(needle: Needle) {
    await (await this.swag(needle)).$('.btn_secondary.cart_button').click();
  }

  /**
   * Continue shopping
   */
  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  /**
   * Go to the checkout process
   */
  async goToCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CartSummaryPage();
