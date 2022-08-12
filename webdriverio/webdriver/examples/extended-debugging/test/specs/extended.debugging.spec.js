describe('LoginPage and Sauce extendedDebugging API', () => {
  beforeEach(async () => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute(
      'sauce:context=########## Start beforeEach ##########'
    );
    await browser.execute('sauce:context=Set defaults');
    //
    // Set CPU to the defaults
    await browser.execute('sauce:throttleCPU', { rate: 0 });
    //
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#throttlecpu

    //
    // Set Network to the defaults
    await browser.execute('sauce:throttleNetwork', { condition: 'Wifi' });
    //
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#throttlenetwork

    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=Prepare environment');
    //
    // Now load the url and wait for it to be displayed
    await browser.url('');
    await $('#login_button_container').waitForDisplayed();

    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## End beforeEach ##########');
  });

  afterEach(async () => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## Enf of test ##########');
  });

  it('should be able get the network logs', async () => {
    //
    // Store the network data and execute assertions on it
    const networkLogs = await browser.execute('sauce:log', {
      type: 'sauce:network',
    });
    //
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#getpagelogs

    await expect(JSON.stringify(networkLogs)).toContain(
      'https://www.saucedemo.com/v1/favicon.ico',
      'No call to the `favicon.ico` asset has been executed'
    );
  });

  it('should be able to throttle the network by setting it to offline', async () => {
    //
    // 1. Tell Chrome on Sauce Labs to throttle the network to offline
    await browser.execute('sauce:throttleNetwork', { condition: 'offline' });
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#throttlenetwork

    try {
      //
      // 2a. Reload the demo page, because it is offline WebdriverIO will let this fail
      // and we will get into the catch
      await browser.url('');
      //
      // 2b. If it is shown do an assertion
      await expect(
        await $('#login_button_container').waitForDisplayed({ reverse: true })
      ).toEqual(true, 'LoginPage page was shown');
    } catch ({ message }) {
      //
      // 3. Verify that the error message was that we couldn't load the page because it is offline
      await expect(message).toContain(
        'unknown error: net::ERR_INTERNET_DISCONNECTED'
      );
    }
  });

  it('should be able to throttle the CPU by making it 4 times slower', async () => {
    //
    // This one is harder to verify, so just check the logs in Sauce Labs

    //
    // 1. Tell Chrome on Sauce Labs to set the CPU to 4 times slower
    await browser.execute('sauce:throttleCPU', {
      rate: 4,
    });
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#throttlecpu

    //
    // 2. Reload the page
    await browser.url('');
    // 3. check that the page is still loaded
    await expect(await $('#login_button_container').waitForDisplayed()).toEqual(
      true,
      'LoginPage page was not shown'
    );

    //
    // 4. Because it is harder to verify this you should check this in Sauce Labs itself
  });

  it('should be able to intercept the image calls and replace them with friends images', async () => {
    //
    // 1. Tell Chrome to replace the images
    await browser.execute('sauce:intercept', {
      url: '**/SwagLabs_logo.png',
      redirect:
        'https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg',
    });
    await browser.execute('sauce:intercept', {
      url: '**/Login_Bot_graphic.png',
      redirect:
        'https://media.glamour.com/photos/5de651f455321a0008bced61/16:9/w_2560%2Cc_limit/GettyImages-143479441.jpg',
    });
    //
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#interceptrequest
    // The WDIO service intercept is not working correctly now, so don't use it for now

    //
    // 2. Reload the url
    await browser.url('');

    //
    // 3. This pause is for demo purposes
    await browser.pause(3000);
  });

  it('should be able to intercept the request and redirect it', async () => {
    //
    // 1. Tell Chrome to redirect the url
    await browser.execute('sauce:intercept', {
      url: 'https://www.saucedemo.com/v1/index.html',
      redirect: 'https://saucelabs.com',
    });
    //
    // The WebdriverIO Sauce Service equivalent
    // https://webdriver.io/docs/api/saucelabs.html#interceptrequest
    // The WDIO service intercept is not working correctly now, so don't use it for now

    //
    // 2. Reload the url
    await browser.url('');

    //
    // 3. Verify that the url is still the same
    await expect(await browser.getUrl()).toEqual(
      'https://www.saucedemo.com/v1/index.html',
      'Demo url is not loaded'
    );
    //
    // but the assets are different, meaning the original login container is not shown
    await expect(
      await $('#login_button_container').waitForDisplayed({ reverse: true })
    ).toEqual(true, 'LoginPage page was shown');
  });
});
