describe('LoginPage and Sauce extendedDebugging API', () => {
    beforeEach(() => {
        //
        // Adding extra logs to the Sauce Commands Dashboard
        browser.execute('sauce:context=########## Start beforeEach ##########');
        browser.execute('sauce:context=Set defaults');
        //
        // Set CPU to the defaults
        browser.execute('sauce:throttleCPU', {rate: 0});
        //
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#throttlecpu

        //
        // Set Network to the defaults
        browser.execute('sauce:throttleNetwork', {condition: 'Wifi'});
        //
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#throttlenetwork

        //
        // Adding extra logs to the Sauce Commands Dashboard
        browser.execute('sauce:context=Prepare environment');
        //
        // Now load the url and wait for it to be displayed
        browser.url('');
        $('#login_button_container').waitForDisplayed();

        //
        // Adding extra logs to the Sauce Commands Dashboard
        browser.execute('sauce:context=########## End beforeEach ##########');
    });

    afterEach(()=>{
        //
        // Adding extra logs to the Sauce Commands Dashboard
        browser.execute('sauce:context=########## Enf of test ##########');
    });

    it('should be able get the network logs', () => {
        //
        // Store the network data and execute assertions on it
        const networkLogs = browser.execute('sauce:log', {type: 'sauce:network'});
        //
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#getpagelogs

        expect(JSON.stringify(networkLogs)).toContain(
            'https://www.saucedemo.com/css/sample-app-web.css',
            'No network call to the `sample-app-web.css` asset has been executed');

    });

    it('should be able to throttle the network by setting it to offline', () => {
        //
        // 1. Tell Chrome on Sauce Labs to throttle the network to offline
        browser.execute('sauce:throttleNetwork', {condition: 'offline'});
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#throttlenetwork

        try {
            //
            // 2a. Reload the demo page, because it is offline WebdriverIO will let this fail
            // and we will get into the catch
            browser.url('');
            //
            // 2b. If it is shown do an assertion
            expect($('#login_button_container').waitForDisplayed({reverse: true})).toEqual(
                true,
                'LoginPage page was shown',
            );
        } catch ({message}) {
            //
            // 3. Verify that the error message was that we couldn't load the page because it is offline
            expect(message).toContain('unknown error: net::ERR_INTERNET_DISCONNECTED');
        }
    });

    it('should be able to throttle the CPU by making it 4 times slower', () => {
        //
        // This one is harder to verify, so just check the logs in Sauce Labs

        //
        // 1. Tell Chrome on Sauce Labs to set the CPU to 4 times slower
        browser.execute('sauce:throttleCPU', {
            rate: 4,
        });
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#throttlecpu

        //
        // 2. Reload the page
        browser.url('');
        // 3. check that the page is still loaded
        expect($('#login_button_container').waitForDisplayed()).toEqual(
            true,
            'LoginPage page was not shown',
        );

        //
        // 4. Because it is harder to verify this you should check this in Sauce Labs itself
    });

    it('should be able to intercept the image calls and replace them with friends images', () => {
        //
        // 1. Tell Chrome to replace the images
        browser.execute(
            'sauce:intercept', {
                'url': '**/SwagLabs_logo.png',
                'redirect': 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Friends_logo.svg'
            }
        );
        browser.execute(
            'sauce:intercept', {
                'url': '**/Login_Bot_graphic.png',
                'redirect': 'https://media.glamour.com/photos/5de651f455321a0008bced61/16:9/w_2560%2Cc_limit/GettyImages-143479441.jpg'
            }
        );
        //
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#interceptrequest
        // The WDIO service intercept is not working correctly now, so don't use it for now

        //
        // 2. Reload the url
        browser.url('');

        //
        // 3. This pause is for demo purposes
        browser.pause(3000);
    });

    it('should be able to intercept the request and redirect it', () => {
        //
        // 1. Tell Chrome to redirect the url
        browser.execute('sauce:intercept', {
            url: 'https://www.saucedemo.com/',
            redirect: 'https://saucelabs.com',
        });
        //
        // The WebdriverIO Sauce Service equivalent
        // https://webdriver.io/docs/api/saucelabs.html#interceptrequest
        // The WDIO service intercept is not working correctly now, so don't use it for now

        //
        // 2. Reload the url
        browser.url('');

        //
        // 3. Verify that the url is still the same
        expect(browser.getUrl()).toEqual(
            'https://www.saucedemo.com/',
            'Demo url is not loaded',
        );
        //
        // but the assets are different, meaning the original login container is not shown
        expect($('#login_button_container').waitForDisplayed({reverse: true})).toEqual(
            true,
            'LoginPage page was shown',
        );
    });
});
