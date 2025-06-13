describe('Sauce Labs Start Stop Front-End Performance', () => {
  beforeEach(async () => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## Start beforeEach ##########');
    //
    // First disable measuring the performance
    await browser.execute('sauce:performanceDisable');
    //
    // Now load the url and wait for it to be displayed
    await browser.url('');

    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## End beforeEach ##########');
  });

  afterEach(async () => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## Enf of test ##########');
  });

  it('(sauce:performanceEnable) should enable measuring the performance on inventory the page', async () => {
    //
    // Performance shouldn't have been measured for the home page, but we want it
    // to start measuring after the first click
    // Login, but don't submit
    await $('[data-test="username"]').setValue('standard_user');
    await $('[data-test="password"]').setValue('secret_sauce');

    //
    // Now enable performance so it will measure the new page
    await browser.execute('sauce:performanceEnable');
    //
    // and click on submit
    await $('#login-button').click();
    await $('#inventory_container').waitForDisplayed({timeout: 15000});

    //
    // Get the performance logs
    const performance = await browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that the speed index can be used for a comparison
    expect(performance.speedIndex >= 100).toBeTruthy( `${performance.speedIndex} is equal or bigger than 100`);
  });
});
