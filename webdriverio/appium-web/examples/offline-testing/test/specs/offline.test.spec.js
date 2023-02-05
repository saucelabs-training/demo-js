/**
 * This is a sample test to test disabling Wifi on real devices.
 * The app to be tested is a PWA that has cashing which allows
 * us to still interact with the app, even though it has not connection
 */
describe('Offline feature', () => {
  beforeEach(async () => {
    // Load the PWA in chrome / safari
    await driver.url('https://saucedemo.com');

    // This is an anti pattern, but wait for all content to be loaded and cached, just for demoing purpose
    await driver.pause(3000);
  });

  it('should be able to navigate in online mode', async () => {
    // These are very simple functions, please don't use them as best practices
    await login();
    await buyProduct();

    // just for demoing purpose
    await driver.pause(3000);
  });

  it('should be able to navigate in offline mode', async () => {
    // Disable Wifi
    await toggleWiFi();

    // Load the PWA in chrome / safari
    await driver.url('https://saucedemo.com');

    // just for demoing purpose
    await driver.pause(3000);

    // These are very simple functions, please don't use them as best practices
    await login();
    await buyProduct();

    // Enable Wifi
    await toggleWiFi();

    // just for demoing purpose
    await driver.pause(3000);
  });
});

async function toggleWiFi() {
  // Do the Android magic
  if (driver.isAndroid) {
    // See http://appium.io/docs/en/commands/device/network/toggle-wifi/
    // This will work for Android Emulators and Real Devices
    await driver.toggleWiFi();

    // Just for demoing purpose
    return driver.pause(3000);
  }

  // NOTE: The following will NOT work for iOS Simulators!!! Only for Real Devices!!!
  // Store the current context, this is only if you want to get back to the browser again
  const currentContext = await driver.getContext();

  // 1. Put Safari in the background
  await driver.background(-1);

  // 2. Go the settings
  await driver.execute('mobile: launchApp', {
    bundleId: 'com.apple.Preferences',
  });

  // Do some Appium magic here
  await driver.switchContext('NATIVE_APP');

  // 3. Go to the WiFi
  const wifiRow = '**/XCUIElementTypeCell[`name CONTAINS "Wi-Fi"`]';
  const wifiSwitch = '**/XCUIElementTypeSwitch[`name CONTAINS "Wi-Fi"`]';
  await $(`-ios class chain:${wifiRow}`).waitForExist();
  await $(`-ios class chain:${wifiRow}`).click();
  // Wait a bit for the animation to be done
  await driver.pause(1000);
  // 4. Disable the WiFi
  await $(`-ios class chain:${wifiSwitch}`).waitForDisplayed();
  // We use a touchaction because for some reason the button is not intractable by a default click
  await $(`-ios class chain:${wifiSwitch}`).touchAction(['press', 'release']);

  // Just for demo purposes
  await driver.pause(3000);

  // 5. Kill the settings
  await driver.execute('mobile: terminateApp', {
    bundleId: 'com.apple.Preferences',
  });

  // 6. Launch the browser
  await driver.execute('mobile: launchApp', {
    bundleId: 'com.apple.mobilesafari',
  });
  // Switch back to the previous context
  await driver.switchContext(currentContext);
}

/**
 * This is a very simple function to login
 * DO NOT use this as a best practice!!!
 */
async function login() {
  await $('#user-name').setValue('standard_user');
  await $('#password').setValue('secret_sauce');
  await $('#login-button').click();

  // Now verify that the page is loaded
  await $('.inventory_container').waitForDisplayed();
}

/**
 * This is a very simple function to buy a product
 * DO NOT use this as a best practice!!!
 */
async function buyProduct() {
  // Select the first product
  await $$('.btn_inventory')[0].click();
  // Open the cart and checkout
  await $('.shopping_cart_link').click();
  await $('.cart_contents_container').waitForDisplayed();
  await $('#checkout').click();
  // Add personal info
  await $('.checkout_info_container').waitForDisplayed();
  await $('#first-name').setValue('Sauce');
  await $('#last-name').setValue('Bot');
  await $('#postal-code').setValue('1234BB');
  await $('#continue').click();
  // Finalize checkout
  await $('.checkout_summary_container').waitForDisplayed();
  await $('#finish').click();
  // Wait for checkout complete
  await $('.checkout_complete_container').waitForDisplayed();
}
