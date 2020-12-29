const {config} = require('./wdio.shared.sauce.mobile.conf');
const build = `Best Practices: Android Chrome Appium '${config.appiumVersion}' build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = ['7.1', '8.1', '9.0', '10.0', '11.0'].map(androidVersion => (
  {
    build: build,
    browserName: 'Chrome',
    platformName: 'Android',
    platformVersion: androidVersion,
    deviceName: 'Android GoogleAPI Emulator',
    // Older versions of Appium give issues with sending keys, see
    // https://github.com/appium/appium/issues/12059
    appiumVersion: '1.18.1'
  }
));

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
  config.capabilities.forEach(capability => {
    capability.appiumVersion = config.appiumVersion;
  });
}

exports.config = config;
