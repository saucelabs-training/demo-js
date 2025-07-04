import CatalogScreen from '../screen-objects/CatalogScreen';
import Menu from '../screen-objects/Menu';
import BiometricsScreen from '../screen-objects/BiometricsScreen';
import LoginScreen from '../screen-objects/LoginScreen';
import {restartApp} from '../helpers/utils';
import AndroidSettings from '../screen-objects/AndroidSettings';

describe('Biometrics for Emulators and Simulators', () => {
  /**
   * A generic function that will check if biometrics has been enabled on the emulator/simulator
   * if not, it will enable it
   */
  async function prepareBiometrics(): Promise<void> {
    let biometricsDisabled = true;

    // Restart the app before each session, only not for the first session
    await restartApp();

    // Prepare the biometrics
    await CatalogScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openBiometrics();

    // It could be that biometrics is not enabled and an alert will be shown.
    // The screen will then not be in the foreground
    try {
      await BiometricsScreen.waitForIsShown();
      biometricsDisabled = false;
    } catch (ign) {
      // the screen is not there so the alert must be there
    }

    // Biometrics is disabled, so enable it
    if (biometricsDisabled) {
      if (driver.isIOS) {
        // iOS can easily be enabled, see also this Appium Command
        // https://appium.io/docs/en/commands/device/simulator/toggle-touch-id-enrollment/
        // When it has been enabled, restart the app and see if we can now enable biometrics in the app
        await driver.toggleEnrollTouchId(true);
        return prepareBiometrics();
      }
      // Android is more verbose, we need to enabled it when we are on an emulator
      // This is a verbose and complex procedure. Please check this method to see what happens
      await AndroidSettings.enableBiometricLogin();
      return prepareBiometrics();
    }

    // Now enable biometrics in the app
    return BiometricsScreen.enableBiometrics();
  }

  it('should be able to login with biometrics', async () => {
    // Prepare enabling biometrics on the devices
    await prepareBiometrics();
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
    // It could be that on iOS we need to allow that biometrics is being used
    await LoginScreen.allowBiometrics();
    // Biometrics login will automatically be triggered.
    await LoginScreen.waitForBiometricsModal();
    // Open the biometrics option
    await LoginScreen.submitBiometrics(true);
    // The Catalog should be shown
    await CatalogScreen.waitForIsShown();
    /**
     * End of biometrics test
     */
  });

  it('should not be able to login with a incorrect biometric signal', async () => {
    // Prepare enabling biometrics on the devices
    await prepareBiometrics();
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
    // It could be that on iOS we need to allow that biometrics is being used
    await LoginScreen.allowBiometrics();
    // Biometrics login will automatically be triggered.
    await LoginScreen.waitForBiometricsModal();
    // Provide an incorrect biometrics signal
    await LoginScreen.submitBiometrics(false);
    // Just wait
    await driver.pause(2000);
    // No assertion will be done here because if the element is not shown it would fail
    await LoginScreen.waitForBiometricsFailureModal();
    /**
     * End of biometrics test
     */
  });

  it('should be able to cancel biometrics and open the modal again', async () => {
    // Prepare enabling biometrics on the devices
    await prepareBiometrics();
    // Go to the login
    await Menu.openMenu();
    await Menu.openLogin();

    /**
     * The biometrics test starts here
     */
    // It could be that on iOS we need to allow that biometrics is being used
    await LoginScreen.allowBiometrics();
    // Biometrics login will automatically be triggered.
    await LoginScreen.waitForBiometricsModal();
    // Cancel biometrics option
    await LoginScreen.cancelBiometrics();
    // The Login screen should be shown
    await LoginScreen.waitForIsShown();
    // Now open Login through biometrics again
    await LoginScreen.openBiometricsModal();
    // Biometrics login will automatically be triggered.
    // No assertion will be done here because if the element is not shown it would fail
    await LoginScreen.waitForBiometricsModal();
    /**
     * End of biometrics test
     */
  });
});
