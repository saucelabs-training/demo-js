import { join } from 'path';
import { readFileSync } from 'fs';
import {
  isBrowserOpened,
  openDeepLinkUrl,
  terminateAndRestartApp,
} from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import QrCodeScreen from '../screen-objects/qrCodeScreen';

describe('Sauce Labs Image Injection', () => {
  beforeEach(async () => {
    // We terminate and restart the app to make sure that the app is clean
    // and we can use image injection for a second time
    await terminateAndRestartApp();
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

    console.log(await driver.getContexts());

    await driver.switchContext('WEBVIEW_chrome');
    console.log(await driver.getUrl());
  });

  it('should be able to scan another QR code and open the browser', async () => {
    // The image needs to be provided as a base64 string
    const slQrCodeImage = readFileSync(
      join(process.cwd(), 'assets/sauce-labs-website.png'),
      'base64'
    );

    // "Flush" the cache with another image
    await driver.execute(`sauce:inject-image=${slQrCodeImage}`);

    // Go to the QR-code screen
    await openDeepLinkUrl('qr-code-scanner');
    // Accept access if asked
    await QrCodeScreen.acceptCameraAccess();

    // Now provide the new image again to the device with this command
    await driver.execute(`sauce:inject-image=${slQrCodeImage}`);

    // Verify that the browser is running
    await expect(await isBrowserOpened()).toEqual(true);

    // For demo purpose so we can see the image injection in the movie
    await driver.pause(5000);
  });
});
