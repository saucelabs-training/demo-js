import {join} from  'path';
import config from './wdio.shared.local.appium.conf';

config.capabilities = [{
    platformName: 'iOS',
    platformVersion: '15.2',
    deviceName: 'iPhone Simulator',
    automationName: 'XCUITest',
    app: join(process.cwd(),'./test-apps/iOS-Simulator-MyRNDemoApp.zip'),
}];

exports.config = config;