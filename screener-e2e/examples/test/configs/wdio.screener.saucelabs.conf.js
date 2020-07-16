const {config} = require('./wdio.shared.conf');

// =========================
// Sauce RDC specific config
// =========================
config.user = process.env.SAUCE_USERNAME;
config.key = process.env.SAUCE_ACCESS_KEY;
// If you run your tests on Sauce Labs you can specify the region you want to run your tests
// in via the `region` property. Available short handles for regions are `us` (default) and `eu`.
// These regions are used for the Sauce Labs VM cloud and the Sauce Labs Real Device Cloud.
// If you don't provide the region, it defaults to `us`.
config.region = process.env.REGION || 'us';

// ============
// Capabilities
// ============
config.capabilities = [
    /**
     * Desktop browsers
     */
    {
        browserName: 'googlechrome',
        platformName: 'Windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            username: config.user,
            accesskey: config.accessKey
        },
        'sauce:visual': {
            apiKey: process.env.SCREENER_API_KEY,
            projectName: 'demo-js',
            viewportSize: '1280x1024'
        }
    }
];

config.services = config.services.concat('sauce');

exports.config = config;
