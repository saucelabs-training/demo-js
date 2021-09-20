import {MobileConfig} from '../configs/wdio.shared.conf';

const locatorStrategy = (selector: string) => {
  return driver.isIOS ? `id=${selector}` : `//*[@content-desc="${selector}"]`;
};
const restartApp = async () => {
  if (!(driver.config as MobileConfig).firstAppStart) {
    await driver.reset();
  }

  // Set the firstAppStart to false to say that the following test can be reset
  (driver.config as MobileConfig).firstAppStart = false;
};


export {
  locatorStrategy,
  restartApp,
};
