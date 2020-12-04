const {config} = require('./wdio.shared.conf');

// ========
// Services
// ========
config.services = config.services.concat([['sauce']]);

// =================
// Service Providers
// =================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
config.region = process.env.REGION || 'us';

// ===================
// Shared Capabilities
// ===================
// Visit https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
// and https://wiki.saucelabs.com/display/DOCS/Desired+Capabilities+Required+for+Selenium+and+Appium+Tests
// for a full list of platforms and capabilities
config.appiumVersion = process.env.npm_config_appium_version || 'default';

exports.config = config;
