const {config: sharedConfig} = require('./wdio.shared.conf');

sharedConfig.region = process.env.REGION || 'us';

sharedConfig.capabilities = ['1280x1024',
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
            viewportSize: `${viewportSize}`
        }
    }
));


exports.config = sharedConfig;
