import {ensureDirSync, readFileSync, removeSync, writeFileSync} from 'fs-extra';
import {join} from "path";
import fileExists from "../../helpers";

const downloadFolder = '.tmp/';

describe('Sauce Labs Android real device file management', () => {
    /**
     * NOTE:
     * - This test is being executed on a Samsung device, be aware that different devices will have different
     *   `appPackage`s and `appActivity`s
     * - This script is made to show you how you can upload and delete a file on a device, it is not using
     *   best practices with page objects and so on
     */
    beforeEach(() => {
        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
        // Create the directory
        ensureDirSync(downloadFolder);

        // Start the Gallery on the device
        driver.startActivity(
            'com.sec.android.gallery3d',
            'com.samsung.android.gallery.app.activity.GalleryActivity',
        );

        // Wait for the Gallery to be there
        $('android=new UiSelector().textContains("No pictures")').waitForDisplayed();

        // Verify that there is no image
        expect(
            $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")').length
        ).toEqual(0);

        // The file we want to upload
        const codingBot = readFileSync(join(process.cwd(), 'assets/sauce-bot-coding.png'), 'base64');

        // Push it to the device and wait till it is uploaded
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        driver.pushFile('/storage/self/primary/sauce-bot-coding.png', codingBot);
        driver.waitUntil(
            () => $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")').length === 1,
        );
    });

    afterEach(() => {
        // Open the image
        $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")')[0].click();

        // Open delete dialog
        $('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/btn_delete")').waitForDisplayed();
        $('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/btn_delete")').click();

        // Move to bin
        $('android=new UiSelector().textContains("Move to Recycle bin")').waitForDisplayed();
        $('android=new UiSelector().textContains("Move to Recycle bin")').click();

        // Wait until the image is removed and verify that the image is removed
        driver.waitUntil(
            () => $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")').length === 0
        );
        expect(
            $$('android=new UiSelector().resourceId("com.sec.android.gallery3d:id/recycler_view_item")').length
        ).toEqual(0);

        // Make sure the download dir we are going to use is empty
        removeSync(downloadFolder);
    });

    it('should be able to from the device Appium', () => {
        const file = join(process.cwd(), downloadFolder, 'downloaded-sauce-bot-coding.png');

        // First verify that the file does not exist in our repo
        expect(fileExists(file)).toEqual(false);

        // Pull the file from the device, it was uploaded in the before step
        // This is the `tricky` part, you need to know the file structure of the device and where you can download
        // the file from. I've checked this structure with the VUSB offering of Sauce Labs for private devices.
        const downloadedBase64Image = driver.pullFile('/storage/self/primary/sauce-bot-coding.png');
        // Write the file to the file the correct folder
        writeFileSync(file, downloadedBase64Image, 'base64');

        // Now verify that the file does exist in our repo
        expect(fileExists(file)).toEqual(true);
    });
});
