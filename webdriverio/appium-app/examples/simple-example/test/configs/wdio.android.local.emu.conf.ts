import {join} from 'path';
import config from './wdio.shared.local.appium.conf';

config.capabilities = [
    {
        platformName: 'Android',
        platformVersion: '12.0',
        deviceName: 'Android Emulator',
        automationName: 'UIAutomator2',
        app: join(process.cwd(), './test-apps/Android-MyDemoAppRN.apk'),
        appWaitActivity: 'com.saucelabs.mydemoapp.rn.MainActivity',
    }
];

exports.config = config;