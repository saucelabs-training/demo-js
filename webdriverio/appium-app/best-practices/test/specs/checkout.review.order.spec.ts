import CatalogScreen from '../screen-objects/CatalogScreen';
import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CheckoutReviewOrderScreen from '../screen-objects/CheckoutReviewOrderScreen';
import Menu from '../screen-objects/Menu';
import CheckoutCompleteScreen from '../screen-objects/CheckoutCompleteScreen';

describe('Checkout Review Order', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should verify that all details are shown properly when 1 item is added', async () => {
    // Add 1 product with defaulted address and payment details to the checkout overview
    await openDeepLinkUrl('checkout-review-order/id=1&amount=1&color=black');
    // It will take some time for the checkout overview page to be updated due to the deep link
    await driver.waitUntil(
      async () => (await CheckoutReviewOrderScreen.itemsAmount()) > 0
    );

    // Verify that the cart icon has one item
    await expect(await Menu.getCartAmount()).toEqual(1);

    // Verify that there is one product in the items and footer
    await expect(await CheckoutReviewOrderScreen.itemsAmount()).toEqual(1);
    const checkoutFooterText =
      await CheckoutReviewOrderScreen.getCheckoutFooterText();
    await expect(checkoutFooterText).toContain('1 item');
    await expect(checkoutFooterText).toContain('35.98');

    // Verify the delivery address
    const deliveryAddressText =
      await CheckoutReviewOrderScreen.getDeliveryAddressText();
    [
      'Rebecca Winter',
      'Mandorley 112',
      'Entrance 1',
      'Truro',
      'Cornwall',
      'United Kingdom',
      '89750',
    ].forEach((textString) =>
      expect(deliveryAddressText).toContain(textString)
    );

    // Verify the payment info
    const paymentInfoText = await CheckoutReviewOrderScreen.getPaymentText();
    await CheckoutReviewOrderScreen.getDeliveryAddressText();
    ['Rebecca Winter', '5555555555554444', '0325'].forEach((textString) =>
      expect(paymentInfoText).toContain(textString)
    );

    // Verify the billing address is not shown
    const billingAddressText = await CheckoutReviewOrderScreen.getBillingText();
    expect(billingAddressText).toContain(
      'Billing address is the same as shipping address'
    );

    // Verify the DHL delivery info
    const deliveryDetailsText =
      await CheckoutReviewOrderScreen.getDeliveryDetailsText();
    ['$5.99', 'Estimated to arrive within 3 weeks.'].forEach((textString) =>
      expect(deliveryDetailsText).toContain(textString)
    );
  });

  it('should verify that the billing address can be different', async () => {
    // Add 1 product with defaulted address and payment details to the checkout overview
    await openDeepLinkUrl(
      'checkout-review-order/id=1&amount=1&color=black/different'
    );
    // It will take some time for the checkout overview page to be updated due to the deep link
    await driver.waitUntil(
      async () => (await CheckoutReviewOrderScreen.itemsAmount()) > 0
    );

    // Verify the billing address is not shown
    const billingAddressText = await CheckoutReviewOrderScreen.getBillingText();
    await CheckoutReviewOrderScreen.getDeliveryDetailsText();
    [
      'Sauce Bot',
      ' Sauce Street 5',
      'Building 2',
      'Sauce Lake City',
      'Sauce Dakota',
      'South Sauceland',
      '499382',
    ].forEach((textString) => expect(billingAddressText).toContain(textString));
  });

  it('should verify multiple items could have been added', async () => {
    // Add 1 product with defaulted address and payment details to the checkout overview
    await openDeepLinkUrl('checkout-review-order/id=1,id=2,id=3&amount=2');
    // It will take some time for the checkout overview page to be updated due to the deep link
    await driver.waitUntil(
      async () => (await CheckoutReviewOrderScreen.itemsAmount()) > 0
    );

    // Verify that the cart icon has 4 items
    await expect(await Menu.getCartAmount()).toEqual(4);

    // Verify that only 3 items are in the overview
    await expect(await CheckoutReviewOrderScreen.itemsAmount()).toEqual(3);

    // Verify that there is are 4 product in the items and footer
    const checkoutFooterText =
      await CheckoutReviewOrderScreen.getCheckoutFooterText();
    await expect(checkoutFooterText).toContain('4 items');
    await expect(checkoutFooterText).toContain('77.95');
  });

  it('should be able to place an order', async () => {
    // Add 1 product with defaulted address and payment details to the checkout overview
    await openDeepLinkUrl('checkout-review-order/id=1');
    // It will take some time for the checkout overview page to be updated due to the deep link
    await driver.waitUntil(
      async () => (await CheckoutReviewOrderScreen.itemsAmount()) > 0
    );

    // Verify that the cart icon has 4 items
    await CheckoutReviewOrderScreen.placeOrder();

    // Wait for the Checkout Complete screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CheckoutCompleteScreen.waitForIsShown();
  });
});
