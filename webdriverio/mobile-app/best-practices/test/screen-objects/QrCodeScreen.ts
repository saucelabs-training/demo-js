import AppScreen from './AppScreen';
import {locatorStrategy} from '../helpers/utils';

class QrCodeScreen extends AppScreen {
  constructor() {
    super(locatorStrategy('qr code screen'));
  }

  get acceptCameraButton() {
    const iosSelector =
      '-ios class chain:**/XCUIElementTypeButton[`name == "OK"`]';
    const androidSelector =
      '//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button" or @resource-id="com.android.packageinstaller:id/permission_allow_button" or contains(@text,"Only") or contains(@text,"ONLY")]';

    return $(driver.isAndroid ? androidSelector : iosSelector);
  }

  async acceptCameraAccess() {
    // If for Android/iOS the permissions are allowed by default then this will timeout
    // because it can't find the button, but the `try/catch` will make sure it will not fail
    try {
      await this.acceptCameraButton.waitForDisplayed({timeout: 6000});
      await this.acceptCameraButton.click();
    } catch (e) {
      // Do nothing, the alert was not shown
      console.log('error = ', e);
    }
  }
}

export default new QrCodeScreen();
