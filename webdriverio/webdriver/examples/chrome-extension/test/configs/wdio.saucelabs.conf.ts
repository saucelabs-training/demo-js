import {join} from 'path';
import {readFileSync} from 'fs';
import config from './wdio.saucelabs.shared.conf';

const buildName = `Chrome Extensions: ${new Date().getTime()}`;
// All vendor specific, in this case Sauce specific capabilities, should be
// put in vendor prefixed options, see
// https://www.w3.org/TR/webdriver1/#dfn-extension-capability
const sauceOptions = {
  'sauce:options': {
    build: buildName,
    screenResolution: '1440x900'
  },
};
// The extension (Adblock Plus in our example) needs to be provided in the Chrome options as a base64 string
// It will then automatically be installed when the browser starts.
//
// NOTE 1:  Keep in the back of your mind that some extensions open a new tab which
//          will NOT have focus for Selenium/WebDriver, but will have visual focus
//          in the recorded movie on Sauce Labs / Local execution
// NOTE 2:  You need to download a Chrome extension to your local machine / add it
//          into your (local) project because it needs to be uploaded as a base64
//          string.
//          You can download extensions with a crx-extractor like this
//          https://chrome.google.com/webstore/detail/crx-extractordownloader/ajkhmmldknmfjnmeedkbkkojgobmljda
const chromeOptions = {
  'goog:chromeOptions': {
    extensions: [
      // `readFileSync` will read the extension in a synchronous way
      readFileSync(
        // `join` will combine:
        //  - the `current working directory` (the path from which the npm script is being executed)
        //  - the name of the extension
        // and create a valid path of it like this
        // `/Users/{username}/demo-js/webdriverio/webdriver/examples/chrome-extension/adblock-plus-free-ad-blocker-3.11.2.crx`
        join(process.cwd(), 'adblock-plus-free-ad-blocker-3.11.2.crx'),
        // The encoding will provide the read extension as a base64 string to ChromeDriver
        // which will automatically install the extension
        {
          encoding: 'base64',
        }),
    ],
  },
};

// ===================================================================================
// Capabilities
// You can find more about constructing the capabilities for real device testing here
// https://saucelabs.com/platform/platform-configurator#/
// ===================================================================================
config.capabilities = [
  {
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'chrome',
    platformName: 'Windows 10',
    browserVersion: 'latest',
    // This is the spread operator, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
    // which "merges" the sauce- and chromeOptions into the capabilities.
    // This prevents double code
    ...sauceOptions,
    ...chromeOptions,
  },
  {
    // For the W3C capabilities, please check
    // https://www.w3.org/TR/webdriver1/#capabilities
    browserName: 'chrome',
    platformName: 'macOS 11.00',
    browserVersion: 'latest',
    // This is the spread operator, see
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals
    // which "merges" the sauce- and chromeOptions into the capabilities.
    // This prevents double code
    ...sauceOptions,
    ...chromeOptions,
  },
];

exports.config = config;
