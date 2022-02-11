import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import CheckoutPaymentScreen from '../screen-objects/CheckoutPaymentScreen';
import CheckoutReviewOrderScreen from '../screen-objects/CheckoutReviewOrderScreen';

describe('Checkout Payment Page', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
    // Now open the checkout address screen
    await openDeepLinkUrl('checkout-payment');
    await CheckoutPaymentScreen.waitForIsShown();
  });

  it('should show all card data errors when an empty card data form is submitted', async () => {
    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    await expect(await CheckoutPaymentScreen.getFullNameErrorMessage()).toEqual(
      'Value looks invalid.'
    );
    await expect(
      await CheckoutPaymentScreen.getCardNumberErrorMessage()
    ).toEqual('Value looks invalid.');
    await expect(
      await CheckoutPaymentScreen.getExpirationDateErrorMessage()
    ).toEqual('Value looks invalid.');
    await expect(
      await CheckoutPaymentScreen.getSecurityCodeErrorMessage()
    ).toEqual('Value looks invalid.');
  });

  it('should show card data errors after entering incorrect data', async () => {
    await CheckoutPaymentScreen.fillCardData({
      fullName: '1234',
    });
    await expect(await CheckoutPaymentScreen.getFullNameErrorMessage()).toEqual(
      'Value looks invalid.'
    );

    await CheckoutPaymentScreen.fillCardData({
      cardNumber: 5555555555555555,
    });
    await expect(
      await CheckoutPaymentScreen.getCardNumberErrorMessage()
    ).toEqual('Value looks invalid.');

    await CheckoutPaymentScreen.fillCardData({
      expirationDate: '0102',
    });
    await expect(
      await CheckoutPaymentScreen.getExpirationDateErrorMessage()
    ).toEqual('Value looks invalid.');

    await CheckoutPaymentScreen.fillCardData({
      securityCode: 12345,
    });
    await expect(
      await CheckoutPaymentScreen.getSecurityCodeErrorMessage()
    ).toEqual('Value looks invalid.');
  });

  it('should show all billing address errors when an empty billing address form is submitted', async () => {
    await CheckoutPaymentScreen.tapOnBillingAddressCheckbox();
    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    await expect(
      await CheckoutPaymentScreen.getFullNameErrorMessage(1)
    ).toEqual('Please provide your full name.');
    await expect(
      await CheckoutPaymentScreen.getAddressLineOneErrorMessage()
    ).toEqual('Please provide your address.');
    await expect(await CheckoutPaymentScreen.getCityErrorMessage()).toEqual(
      'Please provide your city.'
    );
    await expect(await CheckoutPaymentScreen.getZipCodeErrorMessage()).toEqual(
      'Please provide your zip code.'
    );
    await expect(await CheckoutPaymentScreen.getCountryErrorMessage()).toEqual(
      'Please provide your country.'
    );
  });

  it('should be able to submit card data', async () => {
    await CheckoutPaymentScreen.fillCardData({
      fullName: 'Sauce Bot',
      cardNumber: 5555555555554444,
      expirationDate: '0325',
      securityCode: 123,
    });

    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    // Wait for the review order screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutReviewOrderScreen.waitForIsShown();
  });

  it('should be able to submit card and minimal billing address data', async () => {
    await CheckoutPaymentScreen.fillCardData({
      fullName: 'Sauce Bot',
      cardNumber: 5555555555554444,
      expirationDate: '0325',
      securityCode: 123,
    });
    await CheckoutPaymentScreen.tapOnBillingAddressCheckbox();
    await CheckoutPaymentScreen.fillBillingData({
      fullName: 'Sauce Bot',
      addressLineOne: 'Bot Street 2',
      city: 'Sauce City',
      zipCode: '1243BB',
      country: 'UK',
    });
    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    // Wait for the review order screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutReviewOrderScreen.waitForIsShown();
  });

  it('should be able to submit card and all billing address data', async () => {
    await CheckoutPaymentScreen.fillCardData({
      fullName: 'Sauce Bot',
      cardNumber: 5555555555554444,
      expirationDate: '0325',
      securityCode: 123,
    });
    await CheckoutPaymentScreen.tapOnBillingAddressCheckbox();
    await CheckoutPaymentScreen.fillBillingData({
      fullName: 'Sauce Bot',
      addressLineOne: 'Bot Street 2',
      addressLineTwo: 'Apartment 2',
      city: 'Sauce City',
      stateRegion: 'Somewhere',
      zipCode: '1243BB',
      country: 'UK',
    });
    await CheckoutPaymentScreen.tapOnReviewOrderButton();

    // Wait for the review order screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutReviewOrderScreen.waitForIsShown();
  });
});
