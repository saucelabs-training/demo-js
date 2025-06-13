describe('Sauce Labs Front-End Performance', () => {
  beforeEach(async () => {
    //
    // Adding extra logs to the Sauce Commands Dashboard
    await browser.execute('sauce:context=########## Start beforeEach ##########');
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

  it('logs (sauce:performance) should check if all metrics were captured', async () => {
    //
    // The expected metrics
    const metrics = [
      'load',
      'speedIndex',
      'firstInteractive',
      'firstVisualChange',
      'lastVisualChange',
      'firstMeaningfulPaint',
      'firstPaint',
      'firstContentfulPaint',
      'totalBlockingTime',
      'score',
      'domContentLoaded',
      'cumulativeLayoutShift',
      'serverResponseTime',
      'largestContentfulPaint',
      // 'estimatedInputLatency', // For some reason this one is not available
    ];
    //
    // Get the performance logs
    const performance = await browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that all logs have been captured
    metrics.forEach(metric => expect(metric in performance).toBeTruthy( `${metric} metric is missing`));
  });

  it('(sauce:performance) should validate speedIndex', async () => {
    //
    // Get the performance logs
    const performance = await browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that the speed index can be used for a comparison
    expect(performance.speedIndex < 100).toBeTruthy( `${performance.speedIndex} is equal or bigger than 100`);
  });

  it('(sauce:jankinessCheck) should validate the smoothness of the page', async () => {
    //
    // Login
    await $('[data-test="username"]').setValue('standard_user');
    await $('[data-test="password"]').setValue('secret_sauce');
    await $('#login-button').click();
    await $('#inventory_container').waitForDisplayed({timeout: 15000});
    // Generate some jankiness by scrolling the page
    await $('#inventory_container').scrollIntoView();
    await browser.execute(() => {
      document.querySelector('#inventory_container').scrollTop = 500;
    });
    //
    // Get the jankiness results
    const jankiness = await browser.execute('sauce:jankinessCheck');

    console.log(jankiness)
    // Verify that all logs have been captured
    expect(jankiness.score > 0.7).toBeTruthy( `${jankiness.score} is equal or lower than 0.7`);
  });
});
