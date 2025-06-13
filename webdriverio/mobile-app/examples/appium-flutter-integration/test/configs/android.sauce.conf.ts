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
            platformName: 'Android',
            'appium:deviceName': process.env.DEVICE_NAME || 'Google Pixel.*',
            'appium:automationName': 'FlutterIntegration',
            'appium:app': 'storage:filename=sl_my_demo_flutter_app.apk',
            'appium:newCommandTimeout': 240,
            'sauce:options': {
                name: "1st AppiumFlutterIntegrationDriver test using appium latest",
                appiumVersion: "appium2-20240701"
            },
        }
    ],
};

