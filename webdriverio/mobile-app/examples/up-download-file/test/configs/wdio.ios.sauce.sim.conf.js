const {config} = require('./wdio.shared.sauce.conf');
const buildName = `Upload image to Sauce Labs simulators: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
config.specs = [
  './test/specs/emu-sim/upload.image.ios.simulator.spec.js',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
// The caps are the same for 10/9/8.1, only the platform version differs, that's why we use a map
// function to construct a capability object for each platform version.
config.capabilities = ['14.5', '15.0'].map((platformVersion) => (
  {
    // The defaults you need to have in your config
    platformName: 'iOS',
    browserName: 'safari',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': 'iPhone Simulator',
    'appium:platformVersion': platformVersion,
    'appium:orientation': 'PORTRAIT',
    'appium:newCommandTimeout': 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    'appium:language': 'en',
    'appium:locale': 'en',
    // For WDIO not to run more than 1 instance
    maxInstances: 1,
    // Group builds by build name
    'sauce:options': {
      build: buildName,
    }
  }
))
exports.config = config;
