import AppScreen from './AppScreen';
import {
  locatorStrategy,
} from '../helpers/utils';
import {DEFAULT_PIN, INCORRECT_PIN} from '../configs/constants';

class LoginScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('login screen'));
  }

  private get biometricsModal() {
    const iosSelector =
      '-ios class chain:**/XCUIElementTypeOther/**/XCUIElementTypeStaticText[`label CONTAINS "Face ID" or label CONTAINS "Touch ID"`]';
    const androidSelector =
      '//android.widget.TextView[contains(@text,"Sign in with")]';

    return $(driver.isIOS ? iosSelector : androidSelector);
  }

  private get androidBiometricModal() {
    const selector = "//android.widget.TextView[contains(@text,'Sign in')]";

    return $(selector);
  }

  private get tryAgainBiometricsModal() {
    const selector =
      '-ios class chain:**/XCUIElementTypeOther/**/XCUIElementTypeButton[`(label CONTAINS "Try" AND label CONTAINS "Again") OR label CONTAINS "Enter Password"`]';

    return $(selector);
  }

  private get biometricsCancelButton() {
    const iosSelector =
      '-ios class chain:**/XCUIElementTypeOther/**/XCUIElementTypeButton[`label == "Cancel"`]';
    // On RDC the text is uppercase for the cancel button
    const androidSelector =
      "//android.widget.Button[contains(@text,'Cancel') or contains(@text,'CANCEL')]";

    return $(driver.isIOS ? iosSelector : androidSelector);
  }

  private get biometricButton() {
    return $(locatorStrategy('biometrics-button'));
  }

  private get allowBiometricsModal() {
    const iosSelector =
      '-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS "Do you want to allow"`]';

    return $(iosSelector);
  }

  private get allowBiometricsButton() {
    // The selector is an accessibility selector, we can select on the `OK`-text
    return $('~OK');
  }

  async allowBiometrics() {
    // Android does not have this permission modal
    if (driver.isIOS) {
      try {
        // Only wait 3 seconds for it, then it will not slow down if it's not there
        await this.allowBiometricsModal.waitForDisplayed({timeout: 3000});
        await this.allowBiometricsButton.click();
      } catch (ign) {
        // Do nothing
      }
    }

    return;
  }

  async waitForBiometricsModal(isShown = true) {
    if (driver.isIOS) {

    }

    await this.biometricsModal.waitForDisplayed({reverse: !isShown});
  }

  async submitBiometrics(match: boolean) {
    // Android emulators use the `fingerPrint`-methods, see
    // https://appium.io/docs/en/commands/device/authentication/finger-print/
    if (driver.isAndroid) {
      await this.androidBiometricModal.waitForDisplayed();
      return driver.fingerPrint(match ? DEFAULT_PIN : INCORRECT_PIN);
    }

    // And this is for iOS simulators
    return driver.touchId(match);
  }

  async waitForBiometricsFailureModal() {
    // Android DOES NOT have a new failure screen, iOS has
    if (driver.isIOS) {
      return this.tryAgainBiometricsModal.waitForDisplayed();
    }

    return this.biometricsModal.waitForDisplayed();
  }

  async cancelBiometrics() {
    // iOS does not have cancel button, this should be done by sending a negative
    // face/touchId
    if (driver.isIOS) {
      await this.submitBiometrics(false);
      await this.waitForBiometricsFailureModal();
    }

    await this.biometricsCancelButton.click();
  }

  async openBiometricsModal() {
    await this.biometricButton.click();
  }
}

export default new LoginScreen();
