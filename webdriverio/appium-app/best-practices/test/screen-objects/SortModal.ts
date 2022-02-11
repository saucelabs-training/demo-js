import {locatorStrategy} from '../helpers/utils';

class SortModal {
  private get nameAscRow() {
    return $(locatorStrategy('nameAsc'));
  }

  private get nameDescRow() {
    return $(locatorStrategy('nameDesc'));
  }

  private get priceAscRow() {
    return $(locatorStrategy('priceAsc'));
  }

  private get priceDescRow() {
    return $(locatorStrategy('priceDesc'));
  }

  private get activeRow() {
    return $(locatorStrategy('active option'));
  }

  async getActiveOption(): Promise<string> {
    if (driver.isAndroid) {
      return await $(
        '//android.view.ViewGroup[@content-desc="active option"]/../android.widget.TextView',
      ).getText();
    }

    // The source contains a lot of XML which will take a long time to render / find the element
    // This lookup will take less time and is a bit faster
    const iosActiveSelector = (itemSelector: string) =>
      `-ios class chain:**/XCUIElementTypeOther[\`name == "${itemSelector}"\`]/**/XCUIElementTypeOther[\`name == "active option"\`]`;
    const iosTextSelector = (itemSelector: string) =>
      `-ios class chain:**/XCUIElementTypeOther[\`name == "${itemSelector}"\`]`;
    let text = '';
    for (let selector of ['nameAsc', 'nameDesc', 'priceAsc', 'priceDesc']) {
      const element = await $(iosActiveSelector(selector));
      if (!element.error) {
        text = await $(iosTextSelector(selector)).getText();
        break;
      }
    }

    return text;
  }

  async sortNameAsc() {
    await this.nameAscRow.click();

    // Wait for the modal to be done animating
    return driver.pause(750);
  }

  async sortNameDesc() {
    await this.nameDescRow.click();

    // Wait for the modal to be done animating
    return driver.pause(750);
  }

  async sortPriceAsc() {
    await this.priceAscRow.click();

    // Wait for the modal to be done animating
    return driver.pause(750);
  }

  async sortPriceDesc() {
    await this.priceDescRow.click();

    // Wait for the modal to be done animating
    return driver.pause(750);
  }
}

export default new SortModal();
