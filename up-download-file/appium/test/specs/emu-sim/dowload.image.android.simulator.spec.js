import {ensureDirSync, readFileSync, removeSync, writeFileSync} from 'fs-extra';
import {join} from 'path';
import fileExists from '../../../helpers';
import GooglePhotos from '../../screen-objects/GooglePhotos';

/**
 * NOTE:
 * This script uses Google Photos to upload and download the photo. Hopefully you understand how the download works
 * and how you can verify this
 */
describe('Appium', () => {
    let currentPhotos = 0;
    const deviceFilePath = '/mnt/sdcard/Pictures/sauce-bot-coding.png';
    const downloadFolder = `.tmp/${driver.capabilities.deviceName}/${driver.capabilities.platformVersion}/`;

    /**
     * This is only needed for Sauce Labs, starting the project with a browser is much faster. The challenge is that
     * we start in the webview context, so we set it to Native and can do all the magic with the native context
     * of the Android emulator
     */
    beforeAll(()=> driver.switchContext('NATIVE_APP'));

    /**
     * A before hook that will prepare the device for the actual test
     */
    beforeEach(() => {
        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
        // Create the directory
        ensureDirSync(downloadFolder);

        // Start the Gallery on the device
        GooglePhotos.open();
        currentPhotos = GooglePhotos.amountOfPhotos;
        // The file we want to upload
        const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
        // Push it to the device and wait till it is uploaded
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        driver.pushFile(deviceFilePath, codingBot);
        driver.waitUntil(
            () => GooglePhotos.amountOfPhotos > currentPhotos,
        );
    });

    /**
     * An after hook that will do all the magic to clean the device
     */
    afterEach(() => {
        // Delete the photo and verify that the amount of photos is equal to when the test started
        GooglePhotos.deletePhoto('last');
        expect(GooglePhotos.amountOfPhotos).toEqual(currentPhotos);

        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
    });

    it('should be able to download a file from an Android emulator', () => {
        const filePath = join(process.cwd(), downloadFolder, 'downloaded-sauce-bot-coding.png');

        // First verify that the file does not exist in our repo
        expect(fileExists(filePath)).toEqual(false);

        // Pull the file from the device, it was uploaded in the before step
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        const downloadedBase64Image = driver.pullFile(deviceFilePath);
        // Write the file to the file the correct folder
        writeFileSync(filePath, downloadedBase64Image, 'base64');

        // Now verify that the file does exist in our repo
        expect(fileExists(filePath)).toEqual(true);
    });
});
