exports.command = async function () {
    // This is currently not supported by Sauce Labs
    // const SauceLabs = require('saucelabs');
    // const myAccount = new SauceLabs.default({
    //     user: process.env.SAUCE_USERNAME,
    //     key: process.env.SAUCE_ACCESS_KEY,
    //     region: process.env.REGION === 'eu' ? 'eu' : 'us',
    // });
    // const sessionId = this.capabilities['webdriver.remote.sessionid'];
    // const jobName = this.currentTest.name;
    // const passed = this.currentTest.results.testcases[jobName].passed === 1;
    //
    // await myAccount.updateJob(process.env.SAUCE_USERNAME, sessionId, {passed: passed});

    // When the API is supported for RDC you need to uncomment the above and remove this piece of code
    const jobName = this.currentTest.name;
    this.execute(`sauce:job-result=${this.currentTest.results.testcases[jobName].passed === 1 ? 'passed': 'failed'}`)

    return this.end();
};
