import AppScreen from './AppScreen';
import {getTextOfElement, locatorStrategy} from '../helpers/utils';
import {findElementBySwipe} from '../helpers/gestures';

const drawerContainerSelector = 'menu item catalog';

class Menu extends AppScreen {
  constructor() {
    super(locatorStrategy(drawerContainerSelector));
  }

  private get drawerContainer() {
    return $(locatorStrategy(drawerContainerSelector));
  }

  private get openMenuButton() {
    return $(
      locatorStrategy(driver.isIOS ? 'tab bar option menu' : 'open menu'),
    );
  }

  private get closeMenuButton() {
    return $(locatorStrategy('close menu'));
  }

  private get catalogButton() {
    return $(locatorStrategy('menu item catalog'));
  }

  private get webviewButton() {
    return $(locatorStrategy('menu item webview'));
  }

  private get qrCodeScannerButton() {
    return $(locatorStrategy('menu item qr code scanner'));
  }

  private get geoLocationButton() {
    return $(locatorStrategy('menu item geo location'));
  }

  private get drawingButton() {
    return $(locatorStrategy('menu item drawing'));
  }

  private get reportABugButton() {
    return $(locatorStrategy('menu item report a bug'));
  }

  private get aboutButton() {
    return $(locatorStrategy('menu item about'));
  }

  private get resetAppButton() {
    return $(locatorStrategy('menu item reset app'));
  }

  private get biometricsButton() {
    return $(locatorStrategy('menu item biometrics'));
  }

  private get loginButton() {
    return $(locatorStrategy('menu item log in'));
  }

  private get logOutButton() {
    return $(locatorStrategy('menu item log out'));
  }

  private get cartBadge() {
    return $(
      locatorStrategy(driver.isIOS ? 'tab bar option cart' : 'cart badge'),
    );
  }

  async openCatalog() {
    await this.catalogButton.click();
  }

  async openWebview() {
    await this.webviewButton.click();
  }

  async openQrCodeScanner() {
    await this.qrCodeScannerButton.click();
  }

  async openGeoLocation() {
    await this.geoLocationButton.click();
  }

  async openDrawing() {
    await this.drawingButton.click();
  }

  async openReportABug() {
    await this.reportABugButton.click();
  }

  async openAbout() {
    await this.aboutButton.click();
  }

  async openResetApp() {
    await (
      await findElementBySwipe({
        element: await this.resetAppButton,
        scrollableElement: await this.drawerContainer,
      })
    )?.click();
  }

  async openBiometrics() {
    await (
      await findElementBySwipe({
        element: await this.biometricsButton,
        scrollableElement: await this.drawerContainer,
      })
    )?.click();
  }

  async openLogin() {
    await (
      await findElementBySwipe({
        element: await this.loginButton,
        scrollableElement: await this.drawerContainer,
      })
    )?.click();
  }

  async logout() {
    await (
      await findElementBySwipe({
        element: await this.logOutButton,
        scrollableElement: await this.drawerContainer,
      })
    )?.click();
    const iosSelector = (text: string) =>
      `-ios class chain:**/XCUIElementTypeButton[\`label == "${text}"\`]`;
    const androidSelector = (text: string) =>
      `//android.widget.Button[contains(@text,'${text}')]`;

    await $(
      driver.isIOS ? iosSelector('Log Out') : androidSelector('LOG OUT'),
    ).waitForDisplayed();
    await $(
      driver.isIOS ? iosSelector('Log Out') : androidSelector('LOG OUT'),
    ).click();
    await $(
      driver.isIOS ? iosSelector('OK') : androidSelector('OK'),
    ).waitForDisplayed();
    await $(driver.isIOS ? iosSelector('OK') : androidSelector('OK')).click();

    // Wait for animation to be done
    await driver.pause(750);
  }

  async openMenu() {
    await this.openMenuButton.click();

    // Wait for animation to be done
    await driver.pause(750);
  }

  async closeMenu() {
    await this.closeMenuButton.click();

    // Wait for animation to be done
    await driver.pause(750);
  }

  async getCartAmount(): Promise<number> {
    // For some reason iOS doesn't have a value attribute, which is used by getText(), when the amount is 1
    // but it does have it when it is more than 1. That's why we get the label attribute for iOS
    const amount = driver.isAndroid
      ? await getTextOfElement(await this.cartBadge)
      : await this.cartBadge.getAttribute('label');

    return amount === '' ? 0 : parseInt(amount, 10);
  }
}

export default new Menu();
