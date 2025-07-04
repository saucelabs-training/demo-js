export default class AppScreen {
  private readonly selector: string;

  constructor(selector: string) {
    this.selector = selector;
  }

  /**
   * Wait for the login screen to be visible
   *
   * @param {boolean} isShown
   */
  async waitForIsShown(isShown = true): Promise<boolean | void> {
    try {
      return $(this.selector).waitForDisplayed({
        reverse: !isShown,
      });
    } catch (ign) {
      return !isShown;
    }
  }

  async isShown(element?: WebdriverIO.Element) {
    const el = element || (await $(this.selector));

    return el.isDisplayed();
  }
}
