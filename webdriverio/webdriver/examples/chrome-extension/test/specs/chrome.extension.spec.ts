describe('Chrome extension Add Blocker', () => {
  before(async () => {
    // With `sauce:context={string}` we will add extra logs in Sauce Labs to see what is happening
    await browser.execute('sauce:context=############## Start Before-hook ##############');
    await browser.execute('sauce:context=-- Wait for the extension to be installed');
    // The extension will be installed only once during the test execution
    // in the test session of this file. It will automatically open a new
    // tab with more information about the adblocker. We need to wait for
    // the tab to be opened and close it because it will disturb the video logs.
    //
    // Sauce Labs starts clean Virtual Machines with clean browsers which
    // means that the test that starts the browser by default will only open
    // one tab which, by default, has the focus. We then need to wait for the
    // new tab, from the adblocker, to be opened and close it.
    await browser.waitUntil(
      async () => {
        // Get all window handles
        const windowHandles = await browser.getWindowHandles();

        // Check if there is more than one tab open
        if (windowHandles.length > 1) {
          // Check for each tab the title. We can't assume that the second
          // tab will be the add block tab because the window handles can
          // be added in random order.
          for (let windowHandle of windowHandles) {
            // Switch to the tab
            await browser.execute('sauce:context=-- Switch to the tab');
            await browser.switchToWindow(windowHandle);
            // Get the tab title
            const tabTitle = await browser.getTitle();

            // Check if the current tab is the Adblock Plus one
            if (tabTitle.toLowerCase().includes('adblock')) {
              // Returning true will close the
              return true;
            }
          }
        }

        return false;
      }
    )
    // The adblock tabs still has focus. Wait for the Ad blocker to have been
    // installed and shown on the screen
    await browser.execute('sauce:context=-- Wait for the Addblock Plus to be loaded');
    await $('.donate').waitForDisplayed();
    // Close the tab
    await browser.execute('sauce:context=-- Close the tab');
    await browser.closeWindow();
    // There will only be one tab open, switch to it so our main tab will get focus
    await browser.execute('sauce:context=-- Switch to the only open tab');
    await browser.switchToWindow((await browser.getWindowHandles())[0]);
    await browser.execute('sauce:context=############## End Before-hook ##############');
  });

  beforeEach(async () => {
    await browser.execute('sauce:context=############## Start BeforeEach-hook ##############');
    await browser.url('');
    await $('.login_wrapper').waitForDisplayed();
    await browser.execute('sauce:context=############## End BeforeEach-hook ##############');
  });

  it('should be able determine that verify that the login page has been opened', async () => {
    await expect(await $('.login_wrapper').isExisting()).toBeTruthy();
  });
});
