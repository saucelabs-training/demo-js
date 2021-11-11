import {readFileSync} from 'fs';
import {join} from "path";
import SamsungGallery from '../../screen-objects/SamsungGallery';

describe('Appium upload', () => {
  /**
   * NOTE:
   * - This test is being executed on a Samsung device, be aware that different devices will have different
   *   `appPackage`s and `appActivity`s, that's the reason why the actions in the Samsung Gallery are put
   *   into a SamsungGallery screen-object so you can focus on how to upload a photo to a real device.
   */
  it('should be able to upload a photo to the Gallery and delete it', async () => {
    await driver.switchContext('NATIVE_APP');
    // Start the Gallery on the device
    await SamsungGallery.open();
    const currentPhotos = await SamsungGallery.amountOfPhotos();

    /**
     * The magic happens here
     */
      // The file we want to upload
    const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
    // Push it to the device and wait till it is uploaded
    // This is the `tricky` part, you need to know the file structure of the device and where you can download
    // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
    await driver.pushFile('/storage/self/primary/sauce-bot-coding.png', codingBot);
    await driver.waitUntil(
      async () => await SamsungGallery.amountOfPhotos() > currentPhotos,
    );

    // Delete the photo and verify that the amount of photos is equal to when the test started
    await SamsungGallery.deletePhoto('last');
    await expect(await SamsungGallery.amountOfPhotos()).toEqual(currentPhotos);
  });
});
