import { sharedConfig } from './wdio.shared.conf';

const sauceOptions = {
    username: process.env.SAUCE_USERNAME,
    accesskey: process.env.SAUCE_ACCESS_KEY
};
const visualOptions = {
    apiKey: process.env.SCREENER_API_KEY,
    projectName: 'Sauce Demo',
    scrollAndStitchScreenshots: true
};

sharedConfig.specs =  [
    './test/specs/**/visual*.ts'
],
sharedConfig.hostname = 'hub.screener.io',
//Screener Configuration
sharedConfig.port = 443,
sharedConfig.protocol = 'https',
sharedConfig.path = '/wd/hub',

sharedConfig.capabilities = [
    {
        //Desktop A 28%: https://www.w3schools.com/browsers/browsers_display.asp
        browserName: 'chrome',
        platformName: 'windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '1280x1024'
        }
    },
    {
        //Desktop B 20%: https://www.w3schools.com/browsers/browsers_display.asp
        browserName: 'chrome',
        platformName: 'windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '1920x1080'
        }
    },
    {
        //iphone X
        browserName: 'safari',
        platformName: 'macOS 11.00',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '375x812'
        }
    },
    {
        //iphone 6-8
        browserName: 'safari',
        platformName: 'macOS 11.00',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '414x736'
        }
    },
    {
        //Galaxy S8+
        browserName: 'chrome',
        platformName: 'windows 10',
        browserVersion: 'latest',
        'sauce:options': {
            ...sauceOptions,
        },
        'sauce:visual': {
            ...visualOptions,
            viewportSize: '360x740'
        }
    }
]

exports.config = sharedConfig;