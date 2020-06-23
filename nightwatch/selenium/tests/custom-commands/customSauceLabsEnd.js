exports.command = async function () {
    const SauceLabs = require('saucelabs');
    const myAccount = new SauceLabs.default({
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        region: process.env.REGION === 'eu' ? 'eu' : 'us',
    });
    const sessionId = this.capabilities['webdriver.remote.sessionid'];
    const jobName = this.currentTest.name;
    const passed = this.currentTest.results.testcases[jobName].failed === 0;

    await myAccount.updateJob(process.env.SAUCE_USERNAME, sessionId, {passed: passed});

    return this.end();
};
