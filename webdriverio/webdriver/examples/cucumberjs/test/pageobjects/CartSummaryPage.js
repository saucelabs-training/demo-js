import BasePage from './BasePage';

class CartSummaryPage extends BasePage {
  constructor() {
    super('#cart_contents_container');
  }

  // Make it private so people can't mess with it
  // Source: https://github.com/tc39/proposal-class-fields#private-fields
  get #checkoutButton() {
    return $('.checkout_button');
  }

  get #continueShoppingButton() {
    return $('.btn_secondary');
  }

  get #items() {
    return $$('.cart_item');
  }

  /**
   * Get the amount of swag items in the cart
   *
   * @returns {Promise<number>}
   */
  async getSwagAmount() {
    return this.#items.length;
  }

  /**
   * Get a cart Item based on a search string or a number of the visible items
   *
   * @param {number|string} needle
   *
   * @returns {Promise<undefined|WebdriverIO.Element|*>}
   */
  async swag(needle) {
    if (typeof needle === 'string') {
      for (const item of await this.#items) {
        if ((await item.getText()).includes(needle)) {
          return item;
        }
      }

      return undefined;
    }

    return this.#items[needle];
  }

  /**
   * Get the text of the cart swag text
   *
   * @param {number|string} needle
   *
   * @return {Promise<string>}
   */
  async getSwagText(needle) {
    return (await this.swag(needle)).getText();
  }

  /**
   * Remove an swag from the cart
   *
   * @param {Promise<number|string>} needle
   */
  async removeSwag(needle) {
    await (await this.swag(needle)).$('.btn_secondary.cart_button').click();
  }

  /**
   * Continue shopping
   */
  async continueShopping() {
    await this.#continueShoppingButton.click();
  }

  /**
   * Go to the checkout process
   */
  async goToCheckout() {
    await this.#checkoutButton.click();
  }
}

export default new CartSummaryPage();
