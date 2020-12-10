const {config} = require('./wdio.shared.conf');

config.region = process.env.REGION || 'us';

    config.capabilities = ['1280x1024',
    '1920x1080',
    '375x812',
    '414x736',
    '360x740'].map(viewportSize => (
    {
        browserName: 'chrome',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            username: process.env.SAUCE_USERNAME,
            accesskey: process.env.SAUCE_ACCESS_KEY
        },
        'sauce:visual': {
            apiKey: process.env.SCREENER_API_KEY,
            projectName: 'demo-js',
            viewportSize: {viewportSize}
        }
    }
    ));


exports.config = config;
