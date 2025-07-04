export default class Base {
  constructor(selector) {
    this.selector = selector;
  }

  /**
   * Wait for the element to be shown
   *
   * @param {Element} element
   *
   * @return {Promise <boolean>}
   */
  async waitForIsShown(element = null) {
    return driver.waitUntil(
      async () => this.isShown(element),
    );
  }

  /**
   * Wait for the element NOT to be displayed
   *
   * @param {Element} element
   *
   * @return {Promise <boolean>}
   */
  async waitForIsNotShown(element = null) {
    return driver.waitUntil(
      async () => !(await this.isShown(element)),
    );
  }

  /**
   * Give back if the element is displayed
   *
   * @param {Element} element
   *
   * @return {Promise <boolean>}
   */
  async isShown(element) {
    // For android an element that is not visible is also not in the UI tree,
    // so a different approach should be used
    try {
      const el = await (element || $(this.selector));

      return el.isDisplayed();
    } catch (error) {
      // There looks to be an issue with WebdriverIO and handling the not existence off elements
      // I already created an issue for that. For now we catch the error and return false to not break the test
      return false;

      // throw new Error(error);
    }
  }
}
