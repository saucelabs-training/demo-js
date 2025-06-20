const BasePage = require('./BasePage')
const SELECTORS = {
  cart: '.shopping_cart_link',
}

class AppHeaderPage extends BasePage {
  constructor(page) {
    super(page)
    this.page = page
  }

  /**
   * Get the cart amount
   *
   * @return {string}
   */
  async getCartAmount() {
    const elementHandle = await this.page.$(SELECTORS.cart)

    return elementHandle.textContent()
  }

  /**
   * Open the cart
   */
  async openCart() {
    await this.page.click(SELECTORS.cart)
  }
}

module.exports = {AppHeaderPage}
