/**
 * This is a sample test to test disabling Wifi on real devices.
 * The app to be tested is a PWA that has cashing which allows
 * us to still interact with the app, even though it has not connection
 */
describe('Offline feature', () => {
    beforeEach(() => {
        // Load the PWA in chrome / safari
        driver.url('https://saucedemo.com');

        // This is an anti pattern, but wait for all content to be loaded and cached, just for demoing purpose
        driver.pause(3000);
    });

    it('should be able to navigate in online mode', () => {
        // These are very simple functions, please don't use them as best practices
        login();
        buyProduct();

        // just for demoing purpose
        driver.pause(3000);
    });

    it('should be able to navigate in offline mode', () => {
        // Disable Wifi
        toggleWiFi();

        // Load the PWA in chrome / safari
        driver.url('https://saucedemo.com');

        // just for demoing purpose
        driver.pause(3000);

        // These are very simple functions, please don't use them as best practices
        login();
        buyProduct();

        // Enable Wifi
        toggleWiFi();

        // just for demoing purpose
        driver.pause(3000);
    });
});


function toggleWiFi() {
    // Do the Android magic
    if (driver.isAndroid) {
        // See http://appium.io/docs/en/commands/device/network/toggle-wifi/
        // This will work for Android Emulators and Real Devices
        driver.toggleWiFi();

        // Just for demoing purpose
        return driver.pause(3000);
    }

    // NOTE: The following will NOT work for iOS Simulators!!! Only for Real Devices!!!
    // Store the current context, this is only if you want to get back to the browser again
    const currentContext = driver.getContext();

    // 1. Put Safari in the background
    driver.background(-1);

    // 2. Go the settings
    driver.execute('mobile: launchApp', {"bundleId": "com.apple.Preferences"});

    // Do some Appium magic here
    driver.switchContext('NATIVE_APP');

    // 3. Go to the WiFi
    const wifiRow = '**/XCUIElementTypeCell[`name CONTAINS "Wi-Fi"`]';
    const wifiSwitch = '**/XCUIElementTypeSwitch[`name CONTAINS "Wi-Fi"`]';
    $(`-ios class chain:${wifiRow}`).waitForExist();
    $(`-ios class chain:${wifiRow}`).click();
    // Wait a bit for the animation to be done
    driver.pause(1000);
    // 4. Disable the WiFi
    $(`-ios class chain:${wifiSwitch}`).waitForDisplayed();
    // We use a touchaction because for some reason the button is not intractable by a default click
    $(`-ios class chain:${wifiSwitch}`).touchAction([
        'press',
        'release'
    ]);

    // Just for demo purposes
    driver.pause(3000);

    // 5. Kill the settings
    driver.execute('mobile: terminateApp', {"bundleId": "com.apple.Preferences"});

    // 6. Launch the browser
    driver.execute('mobile: launchApp', {"bundleId": "com.apple.mobilesafari"});
    // Switch back to the previous context
    driver.switchContext(currentContext);
}

/**
 * This is a very simple function to login
 * DO NOT use this as a best practice!!!
 */
function login(){
    $('#user-name').setValue('standard_user');
    $('#password').setValue('secret_sauce');
    $('#login-button').click();

    // Now verify that the page is loaded
    $('.inventory_container').waitForDisplayed();
}

/**
 * This is a very simple function to buy a product
 * DO NOT use this as a best practice!!!
 */
function buyProduct(){
    // Select the first product
    $$('.btn_inventory')[0].click();
    // Open the cart and checkout
    $('.shopping_cart_link').click();
    $('.cart_contents_container').waitForDisplayed();
    $('#checkout').click();
    // Add personal info
    $('.checkout_info_container').waitForDisplayed();
    $('#first-name').setValue('Sauce');
    $('#last-name').setValue('Bot');
    $('#postal-code').setValue('1234BB');
    $('#continue').click();
    // Finalize checkout
    $('.checkout_summary_container').waitForDisplayed();
    $('#finish').click();
    // Wait for checkout complete
    $('.checkout_complete_container').waitForDisplayed();
}
