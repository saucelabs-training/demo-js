import {BUNDLE_IDS} from "../configs/constants";

/**
 * The app is opened by Appium by default, when we start a new test
 * the app needs to be reset
 */
export function restartApp() {
    if (!driver.firstAppStart) {
        driver.reset();
    }
    // See the wdio.shared.conf.js file in the `before` hook for what this property does
    // Set the firstAppstart to false to say that the following test can be reset
    driver.firstAppStart = false;
}

/**
 * Create a cross platform solution for opening a deep link
 *
 * @param {string} url
 */
export function openDeepLinkUrl(url) {
    const prefix = 'swaglabs://';

    if (driver.isIOS) {
        // Launch Safari to open the deep link
        driver.execute('mobile: launchApp', {bundleId: 'com.apple.mobilesafari'});

        // Add the deep link url in Safari in the `URL`-field
        // This can be 2 different elements, or the button, or the text field
        // Use the predicate string because  the accessibility label will return 2 different types
        // of elements making it flaky to use. With predicate string we can be more precise
        const urlButtonSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'URL\'';
        const urlFieldSelector = 'type == \'XCUIElementTypeTextField\' && name CONTAINS \'URL\'';
        const urlButton = $(`-ios predicate string:${urlButtonSelector}`);
        const urlField = $(`-ios predicate string:${urlFieldSelector}`);

        // Wait for the url button to appear and click on it so the text field will appear
        // iOS 13 now has the keyboard open by default because the URL field has focus when opening the Safari browser
        if (!driver.isKeyboardShown()) {
            urlButton.waitForDisplayed();
            urlButton.click();
        }

        // Submit the url and add a break
        urlField.setValue(`${prefix}${url}\uE007`);

        // Wait for the notification and accept it
        const openSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'Open\'';
        const openButton = $(`-ios predicate string:${openSelector}`);
        openButton.waitForDisplayed();

        return openButton.click();
    }

    // Life is so much easier
    return driver.execute('mobile:deepLink', {
        url: `${prefix}${url}`,
        package: BUNDLE_IDS.ANDROID,
    });
}

/**
 * Get the app state for iOS, see
 * http://appium.io/docs/en/writing-running-appium/ios/ios-xctest-mobile-apps-management/
 *  0: 'The current application state cannot be determined/is unknown',
 *  1: 'The application is not running',
 *  2: 'The application is running in the background and is suspended',
 *  3: 'The application is running in the background and is not suspended',
 *  4: 'The application is running in the foreground',
 *
 * @param {string} bundleId
 *
 * @return {number}
 */
function getIosAppState(bundleId) {
    return driver.execute('mobile: queryAppState', {bundleId: bundleId});
}

/**
 * Check if the application is running in the foreground
 *
 * @param {string} bundleId
 *
 * @returns {boolean}
 */
function isIosApplicationRunning(bundleId) {
    try {
        driver.waitUntil(() => getIosAppState(bundleId) === 4);
        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Verify that the apps main activity is not open anymore, this means that the browser, or the choose browser
 * helper is opened
 *
 * @returns {boolean}
 */
function androidBrowserOpened() {
    try {
        driver.waitUntil(() => !driver.getCurrentActivity().includes('.MainActivity') && !driver.getCurrentActivity().includes('.GrantPermissionsActivity'));

        return true;
    } catch (e) {
        return false;
    }
}

/**
 * Verify that the browser is opened.
 * - iOS:     For iOS we can check if Safari is running in the foreground
 * - Android: For Android we can check the current activity. If it holds a browser reference we know
 *            for sure that the app is put on the background and that for example chrome is opened.
 *
 * @returns {boolean}
 */
export function isBrowserOpened() {
    if (driver.isIOS) {
        return isIosApplicationRunning('com.apple.mobilesafari');
    }

    return androidBrowserOpened();
}
