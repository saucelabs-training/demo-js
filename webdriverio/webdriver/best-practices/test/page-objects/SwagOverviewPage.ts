import BasePage from './BasePage';

type Needle = string | number;

class SwagOverviewPage extends BasePage {
  constructor() {
    super('.inventory_list');
  }

  private get swagItems() {
    return $$('.inventory_item');
  }

  /**
   * Get the amount of swag items listed on the page
   */
  async getAmount(): Promise<number> {
    return this.swagItems.length;
  }

  /**
   * Get a swag Item based on a search string or a number of the visible items
   */
  async swag(needle: Needle): Promise<WebdriverIO.Element> {
    if (typeof needle === 'string') {
      for (const swagItem of await this.swagItems) {
        if ((await swagItem.getText()).includes(needle)){
          return swagItem;
        }
      }

      return undefined;
    }

    return this.swagItems[needle];
  }

  /**
   * Get the text of the swag swag text
   */
  async getSwagText(needle: Needle): Promise<string> {
    return (await this.swag(needle)).getText();
  }

  /**
   * Add a swag items to the cart
   */
  async addSwagToCart(needle: Needle) {
    await (await this.swag(needle)).$('.btn_primary.btn_inventory').click();
  }

  /**
   * Remove swag items from the cart
   */
  async removeSwagFromCart(needle: Needle) {
    await (await this.swag(needle)).$('.btn_secondary.btn_inventory').click();
  }

  /**
   * Open the details of a swag swag
   */
  async openSwagDetails(needle: Needle) {
    await (await this.swag(needle)).$('.inventory_item_name').click();
  }
}

export default new SwagOverviewPage();
