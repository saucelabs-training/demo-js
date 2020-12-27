const {config} = require('./wdio.shared.conf');

// =====================
// Sauce specific config
// =====================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ========
// Services
// ========
config.services = config.services.concat([
  'sauce',
  [
    // For the options see
    // http://kb.mozillazine.org/Firefox_:_FAQs_:_About:config_Entries
    'firefox-profile',
    {
      // Check the allowed MIME types here
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
      'browser.helperApps.neverAsk.saveToDisk': 'application/octet-stream',
    },
  ],
]);

exports.config = config;
