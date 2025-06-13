import CatalogScreen from '../screen-objects/CatalogScreen';
import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CheckoutCompleteScreen from '../screen-objects/CheckoutCompleteScreen';

describe('Checkout Complete', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should be able to continue shopping', async () => {
    // Go to the Checkout Complete screen
    await openDeepLinkUrl('checkout-complete');
    await CheckoutCompleteScreen.waitForIsShown();

    // Continue shopping
    await CheckoutCompleteScreen.continueShopping();

    // Wait for the Catalog screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await CatalogScreen.waitForIsShown();
  });
});
