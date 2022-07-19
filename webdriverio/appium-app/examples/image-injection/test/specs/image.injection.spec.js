import { join } from 'path';
import { readFileSync } from 'fs';
import { isBrowserOpened, openDeepLinkUrl, restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import QrCodeScreen from '../screen-objects/qrCodeScreen';

describe('Sauce Labs Image Injection', () => {
  beforeEach(async () => {
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should be able to scan the QR code and open the browser', async () => {
    // The image needs to be provided as a base64 string
    const sauceDemoQrCodeImage = readFileSync(
      join(process.cwd(), 'assets/sauce-demo-qr-code.png'),
      'base64'
    );

    // Go to the QR-code screen
    await openDeepLinkUrl('qr-code-scanner');
    // Accept access if asked
    await QrCodeScreen.acceptCameraAccess();

    // Now provide the transformed image to the device with this command
    await driver.execute(`sauce:inject-image=${sauceDemoQrCodeImage}`);

    // Verify that the browser is running
    await expect(await isBrowserOpened()).toEqual(true);

    // For demo purpose so we can see the image injection in the movie
    await driver.pause(5000);
  });
});
