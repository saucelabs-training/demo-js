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
