describe('Sauce Labs Start Stop Front-End Performance', () => {
  beforeEach(() => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    browser.execute('sauce:context=########## Start beforeEach ##########');
    //
    // First disable measuring the performance
    browser.execute('sauce:performanceDisable');
    //
    // Now load the url and wait for it to be displayed
    browser.url('');

    //
    // Adding extra logs to the Sauce Commands Dashboard
    browser.execute('sauce:context=########## End beforeEach ##########');
  });

  afterEach(() => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    browser.execute('sauce:context=########## Enf of test ##########');
  });

  it('(sauce:performanceEnable) should enable measuring the performance on inventory the page', () => {
    //
    // Performance shouldn't have been measured for the home page, but we want it
    // to start measuring after the first click
    // Login, but don't submit
    $('[data-test="username"]').setValue('standard_user');
    $('[data-test="password"]').setValue('secret_sauce');

    //
    // Now enable performance so it will measure the new page
    browser.execute('sauce:performanceEnable');
    //
    // and click on submit
    $('#login-button').click();
    $('#inventory_container').waitForDisplayed({timeout: 15000});

    //
    // Get the performance logs
    const performance = browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that all logs have been captured
    expect(performance.speedIndex < 1000, `${performance.speedIndex} is equal or bigger than 100`);
  });
});
