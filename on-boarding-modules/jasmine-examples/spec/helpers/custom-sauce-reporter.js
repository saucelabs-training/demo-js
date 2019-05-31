function sauceReporter() {
    this.jasmineStarted = function (options) {
        console.log("starting Jasmine");
    };
    this.specStarted = function (result) {
        console.log("starting test spec: " + result.describe)
    };
    this.specDone = async function (result) {
        console.log("spec result is: " + result.status)
        if (result.status === 'passed') {
            console.log("sending" + result.status + "spec result to Sauce Labs");
            driver.executeScript("sauce:job-result=passed");
        }
        else if (result.status === 'failed') {
            console.log("sending" + result.status + "spec result to Sauce Labs")
            driver.executeScript("sauce:job-result=failed");
        }
        queueResults.push(result)
    };
    this.suiteStarted = function (result) {};
    this.suiteDone = function (result) {}
    this.jasmineDone = async function (result) {}
}

module.exports = sauceReporter;