import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class Menu extends AppScreen {
  constructor() {
    super(locatorStrategy('menu item catalog'));
  }

  private get openMenuButton() {
    return $(
      locatorStrategy(driver.isIOS ? 'tab bar option menu' : 'open menu'),
    );
  }

  private get biometricsButton() {
    return $(locatorStrategy('menu item biometrics'));
  }

  private get loginButton() {
    return $(locatorStrategy('menu item log in'));
  }

  async openBiometrics() {
    await this.biometricsButton.click();
  }

  async openLogin() {
    await this.loginButton.click();
  }

  async openMenu() {
    await this.openMenuButton.click();
  }
}

export default new Menu();
