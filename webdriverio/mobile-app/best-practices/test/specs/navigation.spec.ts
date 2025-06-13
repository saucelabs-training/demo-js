import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import CartScreen from '../screen-objects/CartScreen';
import LoginScreen from '../screen-objects/LoginScreen';
import CheckoutAddressScreen from '../screen-objects/CheckoutAddressScreen';
import CheckoutPaymentScreen from '../screen-objects/CheckoutPaymentScreen';
import CheckoutReviewOrderScreen from '../screen-objects/CheckoutReviewOrderScreen';
import Menu from '../screen-objects/Menu';
import QrCodeScreen from '../screen-objects/QrCodeScreen';
import BiometricsScreen from '../screen-objects/BiometricsScreen';
import WebviewScreen from '../screen-objects/WebviewScreen';
import GeoLocationScreen from '../screen-objects/GeoLocationScreen';
import DrawingScreen from '../screen-objects/DrawingScreen';
import AboutScreen from '../screen-objects/AboutScreen';

describe('Navigation', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should be able to navigate from the cart to the payment screen and back', async () => {
    /**
     * NOTE:
     * No assertions will be done here, waiting for the screens will be enough.
     * If the screen doesn't appear in time it will fail with a timeout
     */
    // Open the cart with 1 product
    await openDeepLinkUrl('cart/id=1&amount=1&color=black');
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);
    // Go to the Checkout with will bring you to the login
    await CartScreen.proceedToCheckout();

    // Wait for the login screen and submit default data
    await LoginScreen.waitForIsShown();
    await LoginScreen.submitLoginWithAutofill();

    // Wait for the Checkout Address screen and submit default data
    await CheckoutAddressScreen.waitForIsShown();
    await CheckoutAddressScreen.submitForm({
      fullName: 'Foo',
      addressLineOne: 'bar',
      city: 'city',
      zipCode: '1234bb',
      country: 'uk',
    });

    // Wait for the checkout payment screen and submit default data
    await CheckoutPaymentScreen.waitForIsShown();
    await CheckoutPaymentScreen.fillCardData({
      fullName: 'Foo',
      cardNumber: 5555555555554444,
      expirationDate: '0325',
      securityCode: 123,
    });
    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    // Wait for the Review order screen
    await CheckoutReviewOrderScreen.waitForIsShown();

    /**
     * Now go back to all screens
     */
    await CheckoutReviewOrderScreen.goBack();
    await CheckoutPaymentScreen.waitForIsShown();
    await CheckoutPaymentScreen.goBack();
    await CheckoutAddressScreen.waitForIsShown();
    await CheckoutAddressScreen.goBack();
    await CartScreen.waitForIsShown();
  });

  it.only('should be able to navigate to all screens from the menu', async () => {
    await Menu.openMenu();
    await Menu.openWebview();
    await WebviewScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openGeoLocation();
    // Accept the permissions, if it's not there it will proceed after x amount of seconds
    await GeoLocationScreen.acceptPermission();
    await GeoLocationScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openDrawing();
    await DrawingScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openAbout();
    await AboutScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openBiometrics();
    await BiometricsScreen.waitForBiometricsNotEnabledModal();
    await BiometricsScreen.closeAlert();
    await BiometricsScreen.waitForIsShown();
    await Menu.openMenu();
    await Menu.openLogin();
    await LoginScreen.waitForIsShown();
    /**
     * QR Code screen is last, even though it's almost first in the menu.
     * On Android emulators you will get a native popup you can't close
     */
    await Menu.openMenu();
    await Menu.openQrCodeScanner();
    await QrCodeScreen.acceptCameraAccess();
    await QrCodeScreen.waitForIsShown();
  });
});
