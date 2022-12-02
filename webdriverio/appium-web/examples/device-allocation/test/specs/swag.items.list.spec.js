const { setTestContext } = require('../helpers');
const testName =
  'name' in driver.capabilities['sauce:options']
    ? `${driver.capabilities['sauce:options'].name}-`
    : '';

describe(`${testName}Swag items list`, () => {
  it('should validate that the page loaded', async () => {
    // Bypass the login and wait for the product page to be loaded
    await setTestContext({
      user: { username: 'standard_user' },
      path: '/inventory.html',
    });
    await $('.inventory_list').waitForDisplayed();

    // It should re-use the same session due to the cacheId
    const usedCachedDevice = driver.capabilities.usedCachedDevice;

    if (!usedCachedDevice) {
      console.error('\n\nERROR: The session was not re-used!!!\n\n');
    }
  });
});
