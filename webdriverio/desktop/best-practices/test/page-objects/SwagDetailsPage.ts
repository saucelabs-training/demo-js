import BasePage from './BasePage';

class SwagDetailsPage extends BasePage {
  constructor() {
    super('.inventory_details');
  }

  private get title() {
    return $('.inventory_details_name');
  }

  private get description() {
    return $('.inventory_details_desc');
  }

  private get price() {
    return $('.inventory_details_price');
  }

  private get addButton() {
    return $('.btn_primary.btn_inventory');
  }

  private get removeButton() {
    return $('.btn_secondary.btn_inventory');
  }

  private get goBackButton() {
    return $('.inventory_details_back_button');
  }

  /**
   * Get the text of the swag swag
   *
   * @return {string}
   */
  async getText() {
    return `${await this.title.getText()} ${await this.description.getText()} ${await this.price.getText()}`;
  }

  /**
   * Add a swag items to the cart
   */
  async addToCart() {
    await this.addButton.click();
  }

  /**
   * Remove a swag items from the cart
   */
  async removeFromCart() {
    await this.removeButton.click();
  }

  /**
   * Go back to the inventory list
   */
  async goBack() {
    await this.goBackButton.click();
  }
}

export default new SwagDetailsPage();
