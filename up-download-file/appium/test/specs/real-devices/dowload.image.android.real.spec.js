import {ensureDirSync, readFileSync, removeSync, writeFileSync} from 'fs-extra';
import {join} from 'path';
import fileExists from '../../../helpers';
import SamsungGallery from '../../screen-objects/SamsungGallery';

/**
 * NOTE:
 * - This test is being executed on a Samsung device, be aware that different devices will have different
 *   `appPackage`s and `appActivity`s, that's the reason why the actions in the Samsung Gallery are put
 *   into a SamsungGallery screen-object so you can focus on how to download a photo from a real device.
 */
describe('Appium', () => {
    let currentPhotos = 0;
    const deviceFilePath = '/storage/self/primary/sauce-bot-coding.png';
    const downloadFolder = `.tmp/${driver.capabilities.deviceName || 'samsung_real_device'}/`;

    /**
     * A before hook that will prepare the device for the actual test
     */
    beforeEach(() => {
        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
        // Create the directory
        ensureDirSync(downloadFolder);

        // Start the Gallery on the device
        SamsungGallery.open();
        currentPhotos = SamsungGallery.amountOfPhotos;
        // The file we want to upload
        const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');
        // Push it to the device and wait till it is uploaded
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        driver.pushFile(deviceFilePath, codingBot);
        driver.waitUntil(
            () => SamsungGallery.amountOfPhotos > currentPhotos,
        );
    });

    /**
     * An after hook that will do all the magic to clean the device
     */
    afterEach(() => {
        // Delete the photo and verify that the amount of photos is equal to when the test started
        SamsungGallery.deletePhoto('last');
        expect(SamsungGallery.amountOfPhotos).toEqual(currentPhotos);

        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
    });

    it('should be able to download a file from a real device', () => {
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
