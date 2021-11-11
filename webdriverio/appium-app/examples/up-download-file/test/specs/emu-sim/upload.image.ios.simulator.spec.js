import {readFileSync} from 'fs';
import {join} from "path";
import IosPhotos from '../../screen-objects/IosPhotos';

describe('Appium upload', () => {
  beforeAll(async () => {
    // We started the device in browser, thus webview, mode. We need to switch to the NATIVE_APP mode
    await driver.switchContext('NATIVE_APP');
    // This will start the Photos app
    await driver.activateApp('com.apple.mobileslideshow');

    // A clean fresh sim will start with opening photos
    // and show a "What's new in photo's screen"
    try {
      await IosPhotos.continueButton.waitForDisplayed({timeout: 10000})
      await IosPhotos.continueButton.click()
    } catch (ign) {
      // do nothing if it's not shown, it should not be blocking
    }
    await IosPhotos.allPhotosScreen.waitForDisplayed();
  });

  it('should be able to upload a file to Photos', async () => {
    // Appium can't read file names from the Photo's app, only the date that it has been uploaded
    // For example `Photo, November 01, 7:05 AM`
    // To validate that a photo was uploaded we start on a fresh device, count the amount of current photos
    // and in the end validate if one photo was added extra

    // First get the current amount of photos
    const currentPhotos = await IosPhotos.amountOfPhotos();
    // The file we want to upload
    const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
    // Push it to the device and wait till it is uploaded
    await driver.pushFile('sauce-bot-coding.png', codingBot);

    // Now wait until the amount of photos will be more than the current amount of photos
    // No assertion is done here because if this fails we know that the photo has not been uploaded
    await driver.waitUntil(async () => await IosPhotos.amountOfPhotos() > currentPhotos);
  });
});
