import {readFileSync} from 'fs';
import {join} from "path";
import GooglePhotos from '../../screen-objects/GooglePhotos';

/**
 * NOTE:
 * This script uses Google Photos to verify the uploaded photo. Hopefully you understand how the upload works
 * and how you can verify this
 */
describe('Appium upload', () => {
    /**
     * This is only needed for Sauce Labs, starting the project with a browser is much faster. The challenge is that
     * we start in the webview context, so we set it to Native and can do all the magic with the native context
     * of the Android emulator
     */
    beforeAll(async ()=> await driver.switchContext('NATIVE_APP'));

    it('should be able to upload a file to Google Photos and delete it', async () => {
        // Open Google Photos
        await GooglePhotos.open();
        const currentPhotos = await GooglePhotos.amountOfPhotos();

        /**
         * The magic happens here
         */
        // The file we want to upload
        const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
        // Push it to the device and wait till it is uploaded
        // Device manufacturers put pictures in different places, you do need to know the path on your device that
        // stores media. For emulators and at least some real devices, the path on the device is `/mnt/sdcard/Pictures`
        await driver.pushFile('/mnt/sdcard/Pictures/sauce-bot-coding.png', codingBot);
        await driver.waitUntil(async () => await GooglePhotos.amountOfPhotos() > currentPhotos);

        // Delete the photo and verify that the amount of photos is equal to when the test started
        await GooglePhotos.deletePhoto('last');
        await expect(await GooglePhotos.amountOfPhotos()).toEqual(currentPhotos);
    });
});
