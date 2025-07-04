import CatalogScreen from '../screen-objects/CatalogScreen';
import {openDeepLinkUrl, restartApp} from '../helpers/utils';
import CartScreen from '../screen-objects/CartScreen';
import ItemDetailsScreen from '../screen-objects/ItemDetailsScreen';
import Menu from '../screen-objects/Menu';
import LoginScreen from '../screen-objects/LoginScreen';
import CheckoutAddressScreen from '../screen-objects/CheckoutAddressScreen';

describe('Cart', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
  });

  it('should not show any bought products and allow you to go back to the catalog', async () => {
    await CartScreen.openCart();
    await CartScreen.waitForIsShown();

    // Verify that the Catalog is not shown
    await expect(await CatalogScreen.isShown()).toBeFalsy();

    // Navigate back to the Catalog
    await CartScreen.goShopping();
    await CatalogScreen.waitForIsShown();

    // Verify that the cart is not shown anymore
    await expect(await CartScreen.isShown()).toBeFalsy();
  });

  it('should verify that the screen will be updated when one item will be removed with the counter', async () => {
    // Add one item to the cart
    await openDeepLinkUrl('cart/id=1&amount=1&color=black');
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);

    // Verify that the cart icon has one item
    await expect(await Menu.getCartAmount()).toEqual(1);

    // Verify that there is one product in the items and footer
    await expect(await CartScreen.itemsAmount()).toEqual(1);
    await expect(await CartScreen.getCheckoutFooterText()).toContain('1 item');

    // Remove the item with the counter
    await expect(await ItemDetailsScreen.getCounterAmount()).toEqual(1);
    await ItemDetailsScreen.counterLowerOne();

    // Verify that there is one product in the items and footer
    await expect(await CartScreen.itemsAmount()).toEqual(0);
    await expect(await CartScreen.proceedToCheckoutShown()).toBeFalsy();
  });

  it('should verify that the screen will be updated when one item will be added with the counter', async () => {
    // Add one item to the cart
    await openDeepLinkUrl('cart/id=1&amount=1&color=black');
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);

    // Verify that there is one product in the items and footer
    await expect(await CartScreen.itemsAmount()).toEqual(1);
    let checkoutText = await CartScreen.getCheckoutFooterText();
    expect(checkoutText).toContain('1 item');
    expect(checkoutText).toContain('29.99');

    // Add one item with the counter
    await expect(await ItemDetailsScreen.getCounterAmount()).toEqual(1);
    await ItemDetailsScreen.counterAddOne();

    // Verify that there is:
    // - 2 items in the counter
    await expect(await ItemDetailsScreen.getCounterAmount()).toEqual(2);
    // - one product in the item list
    await expect(await CartScreen.itemsAmount()).toEqual(1);
    // - 2 items and an updated amount is in the counter
    checkoutText = await CartScreen.getCheckoutFooterText();
    expect(checkoutText).toContain('2 items');
    expect(checkoutText).toContain('59.98');
  });

  it('should be able to remove a single item with multiple orders from the cart with the remove item button', async () => {
    // Add one item to the cart
    await openDeepLinkUrl('cart/id=1&amount=2&color=black');
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);

    // Verify that the cart icon has one item
    await expect(await Menu.getCartAmount()).toEqual(2);

    // Verify that there is one product in the items and 2 in the footer
    await expect(await CartScreen.itemsAmount()).toEqual(1);
    await expect(await CartScreen.getCheckoutFooterText()).toContain('2 items');

    // Remove the item with the counter
    await CartScreen.removeItem('Backpack');

    // Verify that there is one product in the items and footer
    await expect(await CartScreen.itemsAmount()).toEqual(0);
    await expect(await CartScreen.proceedToCheckoutShown()).toBeFalsy();
  });

  it('should be able to remove a second item with the remove item button', async () => {
    // Add four different items to the cart
    await openDeepLinkUrl(
      'cart/id=1&amount=1&color=black,id=1&amount=1&color=blue,id=1&amount=1&color=gray,id=1&amount=1&color=red',
    );
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);
    await driver.pause(5000);

    // Verify that the cart icon has one item
    await expect(await Menu.getCartAmount()).toEqual(4);

    // Verify that there is more than one product in the items, due to different screen sizes,
    // and 4 in the footer
    await expect(await CartScreen.itemsAmount()).toBeGreaterThan(1);
    await expect(await CartScreen.getCheckoutFooterText()).toContain('4 items');

    // Remove the item with the counter
    await CartScreen.removeItem('Backpack');

    // Verify that there is more than one product in the items, due to different screen sizes,
    // and 3 in the footer
    await expect(await CartScreen.itemsAmount()).toBeGreaterThan(1);
    await expect(await CartScreen.getCheckoutFooterText()).toContain('3 items');
    await expect(await CartScreen.proceedToCheckoutShown()).toBeTruthy();
  });

  it('should navigate to the login screen when a user wants to proceed to checkout but was never logged in', async () => {
    // Add one item to the cart
    await openDeepLinkUrl('cart/id=2&amount=1&color=black');
    // It will take some time for the cart to be updated due to the deep link
    await driver.waitUntil(async () => (await CartScreen.itemsAmount()) > 0);

    // Proceed the checkout and expect the login screen
    await CartScreen.proceedToCheckout();
    await LoginScreen.waitForIsShown();
  });

  it('should navigate to the checkout screen when a user was already logged in', async () => {
    // First Login
    await Menu.openMenu();
    await Menu.openLogin();
    await LoginScreen.waitForIsShown();
    await LoginScreen.submitLogin({
      username: 'bob@example.com',
      password: '10203040',
    });

    // Add one item to the cart
    await CatalogScreen.waitForIsShown();
    await CatalogScreen.openSwagItem('Backpack');
    await ItemDetailsScreen.waitForIsShown();
    await ItemDetailsScreen.addItemToCart();

    // Open the cart
    await CartScreen.openCart();
    await CartScreen.waitForIsShown();

    // Proceed the checkout and expect the login screen
    await CartScreen.proceedToCheckout();
    await CheckoutAddressScreen.waitForIsShown();
  });
});
