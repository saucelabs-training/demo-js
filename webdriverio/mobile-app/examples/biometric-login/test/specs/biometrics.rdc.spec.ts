import CatalogScreen from '../screen-objects/CatalogScreen';
import Menu from '../screen-objects/Menu';
import BiometricsScreen from '../screen-objects/BiometricsScreen';
import {restartApp} from '../helpers/utils';

describe('Biometrics for Sauce Labs Real Devices', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();

    // Prepare the biometrics by enabling it in the menu
    await CatalogScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openBiometrics();
    await BiometricsScreen.waitForIsShown();
    await BiometricsScreen.enableBiometrics();
  });

  it('should be able to login with biometrics', async () => {
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
      // Biometrics login will automatically be triggered, so wait for the modal.
      // The selectors for Android and iOS are the following
      // Both selectors are ready for AND devices that support FingerPrint/TouchID AND FaceID
    const androidBiometricsModalSelector =
        '//android.widget.TextView[contains(@text,"Sign in with FingerPrint") or contains(@text,"Sign in with FaceID")]';
    const iosBiometricsModalSelector =
      '-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS "Touch ID Verification" OR label CONTAINS "Face ID Verification"`]';
    // Wait for the modal to be displayed
    await $(driver.isAndroid ? androidBiometricsModalSelector : iosBiometricsModalSelector).waitForDisplayed();

    // Now submit a successful biometrics
    await driver.execute('sauce:biometrics-authenticate=true');
    /**
     * End of biometrics test
     */

    // The Catalog should be shown, no assertions will be done here because when the element
    // is not shown in time it will automatically fail
    await CatalogScreen.waitForIsShown();
  });

  it('should not be able to login with a incorrect biometric signal', async () => {
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
      // Biometrics login will automatically be triggered, so wait for the modal.
      // The selectors for Android and iOS are the following
      // Both selectors are ready for AND devices that support FingerPrint/TouchID AND FaceID
    const androidBiometricsModalSelector =
        '//android.widget.TextView[contains(@text,"Sign in with FingerPrint") or contains(@text,"Sign in with FaceID")]';
    const iosBiometricsModalSelector =
      '-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS "Touch ID Verification" OR label CONTAINS "Face ID Verification"`]';
    const selector = driver.isAndroid ? androidBiometricsModalSelector : iosBiometricsModalSelector;
    // Wait for the modal to be displayed
    await $(selector).waitForDisplayed();

    // Now submit an unsuccessful biometrics
    await driver.execute('sauce:biometrics-authenticate=false');

    // The biometrics modal will disappear and the login screen will be shown
    // The reverse option means that we wait for the modal NOT to be displayed anymore
    // No assertions will be done here because when the element
    // is not shown in time it will automatically fail
    await $(selector).waitForDisplayed({reverse: true});
    /**
     * End of biometrics test
     */
  });

  it('should be able to cancel biometrics and open the modal again', async () => {
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
      // Biometrics login will automatically be triggered, so wait for the modal.
      // The selectors for Android and iOS are the following.
      // Both selectors are ready for AND devices that support FingerPrint/TouchID AND FaceID
    const androidBiometricsModalSelector =
        '//android.widget.TextView[contains(@text,"Sign in with FingerPrint") or contains(@text,"Sign in with FaceID")]';
    const iosBiometricsModalSelector =
      '-ios class chain:**/XCUIElementTypeStaticText[`label CONTAINS "Touch ID Verification" OR label CONTAINS "Face ID Verification"`]';
    // Wait for the modal to be displayed
    await $(driver.isAndroid ? androidBiometricsModalSelector : iosBiometricsModalSelector).waitForDisplayed();

    // For Android we can use the CANCEL button
    if (driver.isAndroid) {
      // This is the selector that you can use
      const cancelButtonSelector =
        "//android.widget.Button[contains(@text,'Cancel') or contains(@text,'CANCEL')]";
      await $(cancelButtonSelector).click();
    } else {
      // For iOS we need to submit an unsuccessful biometrics to make the biometrics modal disappear
      await driver.execute('sauce:biometrics-authenticate=false');
    }

    // In both cases, Android and iOS, the biometrics modal will disappear and the login screen will be shown
    // The reverse option means that we wait for the modal NOT to be displayed anymore
    await $(driver.isAndroid ? androidBiometricsModalSelector : iosBiometricsModalSelector).waitForDisplayed({reverse: true});
    /**
     * End of biometrics test
     */
  });
});
