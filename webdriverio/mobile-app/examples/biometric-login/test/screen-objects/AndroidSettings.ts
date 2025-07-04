import {DEFAULT_PIN} from '../configs/constants';

class AndroidSettings {
  private get platformVersion() {
    return parseInt(
      (('platformVersion' in driver.capabilities &&
        driver.capabilities.platformVersion) as string) || '8',
      10,
    );
  }

  private findAndroidElementByText(string: string) {
    const selector = `android=new UiSelector().textContains("${string}")`;

    return $(selector);
  }

  private async fingerPrintWizardSevenOrLower(pin: number) {
    await this.waitAndClick('NEXT');
    await this.setPinSevenOrLower(pin);
    await this.touchSensorSevenOrLower(pin);
    await this.waitAndClick('DONE');
  }

  private async fingerPrintWizardEightOrHigher(pin: number) {
    // There is a difference in the order the wizard in Android 10 is executed
    if (this.platformVersion > 9) {
      await this.reEnterPin(pin);
      await this.waitAndClick('NEXT');
    } else {
      await this.waitAndClick('NEXT');
      await this.reEnterPin(pin);
    }

    await this.touchSensorEightAndHigher(pin);
    await this.waitAndClick('DONE');
  }

  private async waitAndClick(string: string) {
    await this.findAndroidElementByText(string).waitForDisplayed();
    await this.findAndroidElementByText(string).click();
  }

  private async reEnterPin(pin: number) {
    await this.findAndroidElementByText('Re-enter your PIN').waitForDisplayed();
    await this.executeAdbCommand(`input text ${pin} && input keyevent 66`);
  }

  private async setPinSevenOrLower(pin: number) {
    await this.waitAndClick('Fingerprint + PIN');
    await this.waitAndClick('No thanks');
    await this.findAndroidElementByText('Choose your PIN').waitForDisplayed();
    await this.executeAdbCommand(
      `input text ${pin} && input keyevent 66 && input text ${pin} && input keyevent 66`,
    );
    await this.waitAndClick('DONE');
  }

  private async touchSensorSevenOrLower(touchCode: number) {
    await this.waitAndClick('NEXT');
    await this.findAndroidElementByText('Put your finger').waitForDisplayed();
    await driver.fingerPrint(touchCode);
    await this.findAndroidElementByText('Move your finger').waitForDisplayed();
    await driver.fingerPrint(touchCode);
  }

  private async touchSensorEightAndHigher(touchCode: number) {
    // Touch the sensor for the first time to trigger finger print
    await this.findAndroidElementByText('Touch the sensor').waitForDisplayed();
    await driver.fingerPrint(touchCode);

    // Add finger print
    await this.findAndroidElementByText('Put your finger').waitForDisplayed();
    await driver.fingerPrint(touchCode);

    // Confirm finger print
    await this.findAndroidElementByText('Keep lifting').waitForDisplayed();
    await driver.fingerPrint(touchCode);
  }

  private async executeAdbCommand(adbCommand: string) {
    await driver.execute('mobile: shell', {
      command: adbCommand,
    });
  }

  async enableBiometricLogin() {
    // Android Oreo and higher (Android 8) added `lock settings` to ADB to set the pin. So we need to take
    // a different flow Android on lower than OREO
    if (this.platformVersion < 8) {
      // Open the settings screen
      await this.executeAdbCommand(
        'am start -a android.settings.SECURITY_SETTINGS',
      );
      await this.waitAndClick('Fingerprint');
      await this.fingerPrintWizardSevenOrLower(DEFAULT_PIN);
    } else {
      // Open the settings screen and set screen lock to pin
      await this.executeAdbCommand(
        `am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin ${DEFAULT_PIN}`,
      );
      await this.waitAndClick('Fingerprint');
      await this.fingerPrintWizardEightOrHigher(DEFAULT_PIN);
    }
  }

  async disableBiometricLogin() {
    // Open the settings screen
    await this.executeAdbCommand(
      'am start -a android.settings.SECURITY_SETTINGS',
    );
    // Open the settings screen and set screen lock to pin
    // await this.executeAdbCommand(
    //   `am start -a android.settings.SECURITY_SETTINGS && locksettings set-pin ${DEFAULT_PIN}`,
    // );
    await this.waitAndClick('Fingerprint');
    await this.executeAdbCommand(
      // `input text ${DEFAULT_PIN} && input keyevent 66`,
      `input text ${DEFAULT_PIN}`,
    );
    // Remove the fingerprint
    const selector = '//android.widget.ImageView[@content-desc="Delete"]';
    await $(selector).waitForDisplayed();
    await $(selector).click();
    await this.waitAndClick('Yes, remove');
  }
}

export default new AndroidSettings();
