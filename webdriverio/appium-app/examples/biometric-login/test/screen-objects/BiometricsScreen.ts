import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class BiometricsScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('biometrics screen'));
  }

  private get biometricsSwitch() {
    return $(locatorStrategy('biometrics switch'));
  }

  async enableBiometrics() {
    const switchValue = await this.biometricsSwitch.getText();
    const isDisabled = switchValue === (driver.isIOS ? '0' : 'OFF');

    if (isDisabled) {
      await this.biometricsSwitch.click();
    }
  }
}

export default new BiometricsScreen();
