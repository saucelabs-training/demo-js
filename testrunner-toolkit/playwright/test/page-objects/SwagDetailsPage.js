const BasePage = require('./BasePage')
const {PAGES} = require('../e2eConstants')
const SELECTORS = {
  screen: '.inventory_details',
  title: '.inventory_details_name',
  description: '.inventory_details_name',
  price: '.inventory_details_price',
  addButton: '.btn_primary.btn_inventory',
  removeButton: '.btn_secondary.btn_inventory',
  goBackButton: '.inventory_details_back_button',
}

class SwagDetailsPage extends BasePage {
  constructor(page) {
    super(page, SELECTORS.screen)
    this.page = page
  }

  /**
   * Open the Login page
   *
   * @param {string} product
   *
   * @returns {Promise<void>}
   */
  async open(product) {
    return this.goTo(`${PAGES.BASE_URL}${PAGES.SWAG_DETAILS}?id=${product}`)
  }

  /**
   * Get the text of the swag
   *
   * @return {Promise<string>}
   */
  async getSwagDetailsText() {
    const titleHandle = await this.page.$(SELECTORS.title)
    const descriptionHandle = await this.page.$(SELECTORS.description)
    const priceHandle = await this.page.$(SELECTORS.price)

    return `${await titleHandle.textContent()} ${await descriptionHandle.textContent()} ${await priceHandle.textContent()}`
  }

  /**
   * Add a swag items to the cart
   *
   * @return {Promise<void>}
   */
  async addToCart() {
    return this.page.click(SELECTORS.addButton)
  }

  /**
   * Remove a swag items from the cart
   *
   * @return {Promise<void>}
   */
  async removeFromCart() {
    return this.page.click(SELECTORS.removeButton)
  }

  /**
   * Go back to the inventory list
   *
   * @return {Promise<void>}
   */
  async goBack() {
    return this.page.click(SELECTORS.goBackButton)
  }
}

module.exports = {SwagDetailsPage}
