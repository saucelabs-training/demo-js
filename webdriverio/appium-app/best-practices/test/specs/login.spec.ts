import { openDeepLinkUrl, restartApp } from '../helpers/utils';
import CatalogScreen from '../screen-objects/CatalogScreen';
import Menu from '../screen-objects/Menu';
import LoginScreen from '../screen-objects/LoginScreen';
import { LOGIN_USERS } from '../helpers/e2eConstants';
import CheckoutAddressScreen from '../screen-objects/CheckoutAddressScreen';

describe('Login', () => {
  beforeEach(async () => {
    // Restart the app before each session, only not for the first session
    await restartApp();
    await CatalogScreen.waitForIsShown();
    // Now open the login screen
    await openDeepLinkUrl('login');
    await LoginScreen.waitForIsShown();
  });

  it('should be able to login with valid credentials', async () => {
    await LoginScreen.submitLogin(LOGIN_USERS.STANDARD);
    await CheckoutAddressScreen.waitForIsShown();

    await expect(await LoginScreen.isShown()).toBeFalsy();
    await expect(await CheckoutAddressScreen.isShown()).toBeTruthy();
  });

  it('should be able to login through the autofill', async () => {
    await LoginScreen.submitLoginWithAutofill(true);
    await CheckoutAddressScreen.waitForIsShown();

    await expect(await LoginScreen.isShown()).toBeFalsy();
    await expect(await CheckoutAddressScreen.isShown()).toBeTruthy();
  });

  it('should be able to logout', async () => {
    await LoginScreen.submitLoginWithAutofill(true);
    await CheckoutAddressScreen.waitForIsShown();

    // now open login again, the checkout address screen should be shown
    await Menu.openMenu();
    await Menu.openLogin();
    await CheckoutAddressScreen.waitForIsShown();

    // Now logout
    await Menu.openMenu();
    await Menu.logout();

    // Wait for the login screen to be shown again, an assertion is not needed
    // because if it is not shown it will fail
    await LoginScreen.waitForIsShown();
  });

  /**
   * Not all following errors should not be tested through the UI, they should be tested
   * through UTs and only a subset should be shown here
   */
  it('should validate that an error message is shown when no username is provided', async () => {
    await LoginScreen.submitLogin(LOGIN_USERS.NO_USER_DETAILS);

    await expect(await LoginScreen.getUsernameErrorMessage()).toEqual(
      'Username is required'
    );
    await expect(await LoginScreen.getPasswordErrorMessage()).toEqual('');
    await expect(await LoginScreen.getGenericErrorMessage()).toEqual('');
  });

  it('should validate that an error message is shown when no password is provided', async () => {
    await LoginScreen.submitLogin(LOGIN_USERS.NO_PASSWORD);

    await expect(await LoginScreen.getUsernameErrorMessage()).toEqual('');
    await expect(await LoginScreen.getPasswordErrorMessage()).toEqual(
      'Password is required'
    );
    await expect(await LoginScreen.getGenericErrorMessage()).toEqual('');
  });

  it('should validate that an error message is shown when invalid credentials are provided', async () => {
    await LoginScreen.submitLogin(LOGIN_USERS.NO_MATCH);

    await expect(await LoginScreen.getUsernameErrorMessage()).toEqual('');
    await expect(await LoginScreen.getPasswordErrorMessage()).toEqual('');
    await expect(await LoginScreen.getGenericErrorMessage()).toEqual(
      'Provided credentials do not match any user in this service.'
    );
  });

  it('should validate that an error message is shown when credentials of a locked out user are provided', async () => {
    await LoginScreen.submitLogin(LOGIN_USERS.LOCKED);

    await expect(await LoginScreen.getUsernameErrorMessage()).toEqual('');
    await expect(await LoginScreen.getPasswordErrorMessage()).toEqual('');
    await expect(await LoginScreen.getGenericErrorMessage()).toEqual(
      'Sorry, this user has been locked out.'
    );
  });

  it('should validate that an error message is shown when credentials of a locked out user are provided through the autofill', async () => {
    await LoginScreen.submitLoginWithAutofill(false);

    await expect(await LoginScreen.getUsernameErrorMessage()).toEqual('');
    await expect(await LoginScreen.getPasswordErrorMessage()).toEqual('');
    await expect(await LoginScreen.getGenericErrorMessage()).toEqual(
      'Sorry, this user has been locked out.'
    );
  });
});
