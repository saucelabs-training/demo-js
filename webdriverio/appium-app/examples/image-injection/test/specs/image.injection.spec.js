import {isBrowserOpened, openDeepLinkUrl, restartApp} from '../helpers/utils';
import {join} from 'path';
import {readFileSync} from 'fs';
import LoginScreen from '../screen-objects/Login';
import QrCodeScreen from '../screen-objects/qrCodeScreen';

describe('Sauce Labs Image Injection', () => {
    beforeEach(() => {
        restartApp();
        LoginScreen.waitForIsShown();
    });

    it('should be able to scan the QR code and open the browser', () => {
        // The image needs to be provided as a base64 string
        const qrCodeImage = readFileSync(join(process.cwd(), 'assets/qr-code.png'), 'base64');

        // Go to the QR-code screen
        openDeepLinkUrl('qr-code');
        // Accept access if asked
        QrCodeScreen.acceptCameraAccess();

        // Now provide the transformed image to the device with this command
        driver.execute(`sauce:inject-image=${qrCodeImage}`);

        // Verify that the browser is running
        expect(isBrowserOpened()).toEqual(true);
    });
});
