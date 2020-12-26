const {config} = require('./wdio.shared.sauce.mobile.conf');
const build = `Best Practices: iOS Safari Appium '${config.appiumVersion}' build-${new Date().getTime()}`;

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring a Simulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = ['10.3','11.3','12.4', '13.4', '14.0'].map(iOSVersion =>(
  {
      build: build,
      browserName: 'safari',
      platformName: 'iOS',
      platformVersion: iOSVersion,
      deviceName: 'iPhone Simulator',
  }
));

if (config.appiumVersion !== undefined && config.appiumVersion !== 'default') {
    config.capabilities.forEach(capability => {
        capability.appiumVersion = config.appiumVersion;
    });
}

exports.config = config;
