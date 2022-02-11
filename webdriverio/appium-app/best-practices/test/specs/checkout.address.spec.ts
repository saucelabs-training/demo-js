import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import CheckoutAddressScreen from '../screen-objects/CheckoutAddressScreen';
import CheckoutPaymentScreen from '../screen-objects/CheckoutPaymentScreen';

describe('Checkout Address Page', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
    // Now open the checkout address screen
    await openDeepLinkUrl('checkout-address');
    await CheckoutAddressScreen.waitForIsShown();
  });

  it('should show all errors when an empty form is submitted', async () => {
    await CheckoutAddressScreen.submitForm();

    await expect(await CheckoutAddressScreen.getFullNameErrorMessage()).toEqual(
      'Please provide your full name.'
    );
    await expect(
      await CheckoutAddressScreen.getAddressLineOneErrorMessage()
    ).toEqual('Please provide your address.');
    await expect(await CheckoutAddressScreen.getCityErrorMessage()).toEqual(
      'Please provide your city.'
    );
    await expect(await CheckoutAddressScreen.getZipCodeErrorMessage()).toEqual(
      'Please provide your zip code.'
    );
    await expect(await CheckoutAddressScreen.getCountryErrorMessage()).toEqual(
      'Please provide your country.'
    );
  });

  it('should be able to submit minimal data', async () => {
    await CheckoutAddressScreen.submitForm({
      fullName: 'Sauce Bot',
      addressLineOne: 'Bot Street 2',
      city: 'Sauce City',
      zipCode: '1243BB',
      country: 'UK',
    });

    // Wait for the payment screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutPaymentScreen.waitForIsShown();
  });

  it('should be able to submit with all data', async () => {
    await CheckoutAddressScreen.submitForm({
      fullName: 'Sauce Bot',
      addressLineOne: 'Bot Street 2',
      addressLineTwo: 'Apartment 1',
      city: 'Sauce City',
      stateRegion: 'Somewhere',
      zipCode: '1243BB',
      country: 'UK',
    });

    // Wait for the payment screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutPaymentScreen.waitForIsShown();
  });
});
