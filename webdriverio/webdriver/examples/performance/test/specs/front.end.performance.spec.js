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
      'firstCPUIdle',
      'timeToFirstByte',
      'firstPaint',
      'estimatedInputLatency',
      'firstContentfulPaint',
      'totalBlockingTime',
      'score',
      'domContentLoaded',
      'cumulativeLayoutShift',
      'serverResponseTime',
      'largestContentfulPaint',
    ];
    //
    // Get the performance logs
    const performance = await browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that all logs have been captured
    metrics.forEach(metric => expect(metric in performance, `${metric} metric is missing`));
  });

  it('(sauce:performance) should validate speedIndex', async () => {
    //
    // Get the performance logs
    const performance = await browser.execute('sauce:log', {type: 'sauce:performance'});

    //
    // Verify that all logs have been captured
    expect(performance.speedIndex < 1000, `${performance.speedIndex} is equal or bigger than 100`);
  });

  it('(sauce:jankinessCheck) should validate the smoothness of the page', async () => {
    //
    // Login
    await $('[data-test="username"]').setValue('standard_user');
    await $('[data-test="password"]').setValue('secret_sauce');
    await $('#login-button').click();
    await $('#inventory_container').waitForDisplayed({timeout: 15000});

    //
    // Get the jankiness results
    const jankiness = await browser.execute('sauce:jankinessCheck');

    // Verify that all logs have been captured
    expect(jankiness.score > 0.7, `${jankiness.score} is equal or lower than 0.7`);
  });
});
