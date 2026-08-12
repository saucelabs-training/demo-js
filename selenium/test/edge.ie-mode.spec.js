const webdriver = require('selenium-webdriver');
const assert = require('assert');

describe('Sauce Demo Test', function() {
  let driver;

  it('should verify title of Sauce Demo site in Edge IE Mode', async function() {
    const username = process.env.SAUCE_USERNAME;
    const accessKey = process.env.SAUCE_ACCESS_KEY;

    if (!username || !accessKey) {
      throw new Error('SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables must be set');
    }

    const capabilities = {
      browserName: 'microsoftedge',
      platformName: 'Windows 10',
      'se:ieOptions': {
        'ie.edgechromium': true,
      },
      'sauce:options': {
        username: username,
        accessKey: accessKey,
        build: 'sample edge-ie-mode-build',
        name: 'sample edge-ie-mode-test',
      }
    }

    driver = await new webdriver.Builder()
      .withCapabilities(capabilities)
      .usingServer('https://ondemand.us-west-1.saucelabs.com:443/wd/hub')
      .build();

    // run commands and assertions
    await driver.get('https://www.saucedemo.com');
    const title = await driver.getTitle();
    const titleIsCorrect = title.includes('Swag Labs');

    // Assert the title contains "Swag Labs"
    assert(titleIsCorrect, 'Title should contain "Swag Labs"');

    // end the session
    await driver.executeScript('sauce:job-result=' + (titleIsCorrect ? 'passed' : 'failed'));
  });

  afterEach(async function() {
    if (driver) {
      await driver.quit();
    }
  });
});
