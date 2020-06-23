const SauceLabs = require('../helpers/SauceLabs');

exports.command = async function () {
    const sauceLabs = new SauceLabs();
    const jobName = this.currentTest.name;
    const sessionId = this.sessionId;
    const passed = this.currentTest.results.testcases[jobName].failed === 0;

    try {
        await sauceLabs.updateJobStatus(sessionId, passed);
    } catch (e) {
        console.log(e);
    }

    return this.end();
};
