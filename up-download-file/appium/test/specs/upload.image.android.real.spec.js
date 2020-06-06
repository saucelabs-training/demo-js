import {readFileSync} from 'fs';
import {join} from "path";

describe('Sauce Labs Android real device file management', () => {
    it('should be able to upload a file to the device with Appium and delete it', () => {
        /**
         * NOTE:
         * - This test is being executed on a Samsung device, be aware that different devices will have different
         *   `appPackage`s and `appActivity`s
         * - This script is made to show you how you can upload and delete a file on a device, it is not using
         *   best practices with page objects and so on
         */
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
    });
});
