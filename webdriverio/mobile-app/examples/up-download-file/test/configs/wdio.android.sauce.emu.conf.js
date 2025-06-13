const {config} = require('./wdio.shared.sauce.conf');
const buildName = `Up/download image on/from Sauce Labs emulators: ${new Date().getTime()}`;

// ==================
// Specify Test Files
// ==================
config.specs = [
  './test/specs/emu-sim/upload.image.android.emulator.spec.js',
  './test/specs/emu-sim/download.image.android.emulator.spec.js'
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
config.capabilities = ['10.0', '9.0', '8.1'].map((platformVersion) => (
  {
    // The defaults you need to have in your config
    deviceName: 'Android GoogleAPI Emulator',
    browserName: 'chrome',
    platformName: 'Android',
    platformVersion: platformVersion,
    orientation: 'PORTRAIT',
    // Appium `1.20.2` gives an issue with the Android selectors that er being used in these tests on older versions of
    // Android, that's why we set it to `1.20.1`
    appiumVersion: '1.20.1',
    autoLaunch: false,
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    noReset: true,
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    // Group builds by build name
    build: buildName,
  }
))
exports.config = config;
