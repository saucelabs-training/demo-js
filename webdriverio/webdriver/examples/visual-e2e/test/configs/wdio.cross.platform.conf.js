const { config: sharedConfig } = require('./wdio.shared.conf');
const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};
const visualOptions = {
    //https://screener.io/v2/docs/visual-e2e/visual-options
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'Sauce Demo JS',
    failOnNewStates: false
};
sharedConfig.specs = [
    './test/specs/visual.crossplatform.spec.js'
],
sharedConfig.capabilities = [
    //Desktop A 24%: https://www.w3schools.com/browsers/browsers_display.asp
    {
        browserName: 'chrome',
        platformName: 'windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '1366x768'
        }
    },
    {
        browserName: 'safari',
        platformName: 'macOS 10.15',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '375x812'
        }
    }
]

exports.config = sharedConfig;