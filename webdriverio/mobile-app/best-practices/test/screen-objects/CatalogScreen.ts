import AppScreen from './AppScreen';
import {getTextOfElement, locatorStrategy} from '../helpers/utils';
import {findElementBySwipe} from '../helpers/gestures';

class CatalogScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('products screen'));
  }

  private async item({needle}: {needle: string}) {
    const itemSelector = 'store item';
    const iosSelector = `-ios class chain:**/XCUIElementTypeOther[\`name == "${itemSelector}" AND label CONTAINS "${needle}"\`]`;
    const androidSelector = `//android.widget.TextView[contains(@text,'${needle}')]//ancestor::*[@content-desc='${itemSelector}']`;
    const elem = await $(driver.isIOS ? iosSelector : androidSelector);

    return findElementBySwipe({
      element: elem,
      scrollableElement: await $(locatorStrategy('products screen')),
    });
  }

  private get items() {
    return $$(locatorStrategy('store item'));
  }

  private get sortButton() {
    return $(locatorStrategy('sort button'));
  }

  async openSortModal() {
    await this.sortButton.click();

    // Wait a bit for the modal to finish the animation
    return driver.pause(750);
  }

  async openSwagItem(needle: string) {
    const item = await this.item({needle});

    await item?.click();
  }

  async itemsAmount(): Promise<number> {
    return (await this.items).length;
  }

  async getFirstItemText(): Promise<string> {
    return getTextOfElement((await this.items)[0]);
  }
}

export default new CatalogScreen();
