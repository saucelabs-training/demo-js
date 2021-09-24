import BasePage from './BasePage';

type Needle = string | number;

class CheckoutSummaryPage extends BasePage {
  constructor() {
    super('#checkout_summary_container');
  }

  async title(needle: Needle): Promise<WebdriverIO.Element> {
    return (await this.swag(needle)).$('.inventory_item_name');
  }

  async description(needle: Needle): Promise<WebdriverIO.Element> {
    return (await this.swag(needle)).$('.inventory_item_desc');
  }

  async price(needle: Needle): Promise<WebdriverIO.Element> {
    return (await this.swag(needle)).$('.inventory_item_price');
  }

  private get cancelButton() {
    return $('.cart_cancel_link');
  }

  private get finishButton() {
    return $('.cart_button');
  }

  private get items() {
    return $$('.cart_item');
  }

  /**
   * Get the amount of swag items listed on the page
   */
  async getSwagAmount(): Promise<number> {
    return this.items.length;
  }

  /**
   * Get a cart Item based on a search string or a number of the visible items
   */
  async swag(needle: Needle): Promise<WebdriverIO.Element> {
    if (typeof needle === 'string') {
      return this.items.find(
        async (cartItem) =>
          (await cartItem.getText()).includes(needle)
      );
    }

    return this.items[needle];
  }

  /**
   * Get the text of the cart
   *
   * @param {number|string} needle
   *
   * @return {string}
   */
  async getSwagText(needle: Needle) {
    return `${await (await this.title(needle)).getText()} ${await (await this.description(needle)).getText()} ${await (await this.price(needle)).getText()}`;
  }

  /**
   * Cancel checkout
   */
  async cancelCheckout() {
    await this.cancelButton.click();
  }

  /**
   * Finish checkout
   */
  async finishCheckout() {
    await this.finishButton.click();
  }
}

export default new CheckoutSummaryPage();
