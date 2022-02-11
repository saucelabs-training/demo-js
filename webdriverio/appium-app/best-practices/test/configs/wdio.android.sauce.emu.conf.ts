import config from './wdio.shared.sauce.conf';

const buildName = `Android My React Native Demo app: ${new Date().getTime()}`;

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = ['9.0', '10.0', '11'].map((osVersion: string) => ({
  // The defaults you need to have in your config
  platformName: 'Android',
  platformVersion: osVersion,
  deviceName: 'Android GoogleAPI Emulator',
  automationName: 'UIAutomator2',
  // The name of the App in the Sauce Labs storage, for more info see
  // https://docs.saucelabs.com/mobile-apps/app-storage/
  app: 'storage:filename=Android.MyDemoAppRN.apk',
  appWaitActivity: 'com.saucelabs.mydemoapp.rn.MainActivity',
  build: buildName,
  newCommandTimeout: 240,
  appiumVersion: '1.20.2',
  // // This doesn't seem to work with Appium 1.20.2 on the SL cloud =(
  // // This will adjust the Appium server in such a way that it will return all
  // // non visible elements so we can assert against it.
  // // @ts-ignore
  // allowInvisibleElements: true,
}));

/**
 * Workaround for the `allowInvisibleElements: true,` cap.
 * The setting can also be set during execution
 */
config.before = async () => {
  await driver.updateSettings({allowInvisibleElements: true});
};

exports.config = config;
