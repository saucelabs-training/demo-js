//@ts-nocheck
import { config as baseConfig } from './wdio.sauce.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../specs/**/*.ts',
    ],

    // ============
    // Capabilities
    // ============
    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': process.env.DEVICE_NAME || 'iPhone.*',
            'appium:automationName': 'FlutterIntegration',
            'appium:app': 'storage:filename=sl_my_demo_flutter_app.ipa',
            'appium:newCommandTimeout': 240,
            'appium:platformVersion': '^1(4.[3-9]|[5-9]).*',
            'sauce:options': {
                name: "1st AppiumFlutterIntegrationDriver test using appium latest",
                resigningEnabled: true,
                appiumVersion: "appium2-20240701",
            },
        }
    ],
};
