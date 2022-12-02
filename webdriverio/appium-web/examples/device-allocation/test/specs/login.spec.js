const testName =
  'name' in driver.capabilities['sauce:options']
    ? `${driver.capabilities['sauce:options'].name}-`
    : '';

describe(`${testName}LoginPage`, () => {
  it('should validate that the page loaded', async () => {
    await browser.url('');
    await $('#login_button_container').waitForDisplayed();
  });
});
