exports.command = async function () {
    /**
     * Updating the status of the Real Device session in the new Sauce Labs UI
     * can't be done with the API yet.
     */
    // // 1. Require the `Saucelabs` npm module
    // const SauceLabs = require('saucelabs');
    // // 2. Instantiate the module
    // const myAccount = new SauceLabs.default({
    //     user: process.env.SAUCE_USERNAME,
    //     key: process.env.SAUCE_ACCESS_KEY,
    //     region: process.env.REGION === 'eu' ? 'eu' : 'us',
    // });
    // // 3a. Get the sessionId
    // const sessionId = this.capabilities['webdriver.remote.sessionid'];
    // // 3b. Get the jobName
    // const jobName = this.currentTest.name;
    // // 3c. Get the status
    // const passed = this.currentTest.results.testcases[jobName].passed > 0;
    //
    // // 4. Update the status in Sauce Labs
    // await myAccount.updateJob(process.env.SAUCE_USERNAME, sessionId, {passed: passed});
    //
    // // 5. Tell Nighwatch that we are done
    // return this.end();

    /**
     * When the API is supported for RDC you need to uncomment the above and remove this piece of code
     */
    // 1a. Get the jobName
    const jobName = this.currentTest.name;
    // 1b. Get the status
    const passed = this.currentTest.results.testcases[jobName].passed > 0;
    // 2. Update the status in Sauce Labs
    this.execute(`sauce:job-result=${passed ? 'passed': 'failed'}`)

    // 3. Tell Nighwatch that we are done
    return this.end();
};
