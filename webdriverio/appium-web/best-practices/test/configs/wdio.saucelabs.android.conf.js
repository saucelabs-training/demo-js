const { config } = require('./wdio.shared.sauce.mobile.conf');
const build = `Best Practices: Android Chrome Appium '${
  config.appiumVersion
}' build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = ['8.1', '9.0', '10.0', '11.0', '12.0'].map(
  (androidVersion) => ({
    browserName: 'Chrome',
    deviceName: 'Android GoogleAPI Emulator',
    platformName: 'Android',
    platformVersion: androidVersion,
    build: build,
    // Older versions of Appium give issues with sending keys, see
    // https://github.com/appium/appium/issues/12059
    appiumVersion: '1.20.2',
  })
);

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
  config.capabilities.forEach((capability) => {
    capability.appiumVersion = config.appiumVersion;
  });
}

exports.config = config;
