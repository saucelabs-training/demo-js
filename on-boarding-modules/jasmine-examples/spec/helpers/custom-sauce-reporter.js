const myReporter = {

    jasmineStarted: function (suiteInfo) {
        console.log('Running suite with '
            + suiteInfo.totalSpecsDefined);
    },

    suiteStarted: function (result) {

        console.log('Suite started: '
            + result.description
            + ' whose full description is: '
            + result.fullName);
    },

    specStarted: function (result) {
        console.log('Spec started: '
            + result.description
            + ' whose full description is: '
            + result.fullName);
    },

    specDone: function (result) {
        console.log('Spec: ' + result.description + 'result: ' + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Failure: ' + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
        console.log(result.passedExpectations.length);
    },

    suiteDone: function (result) {
        console.log('Suite: '
            + result.description
            + ' was '
            + result.status);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Suite '
                + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    },
    jasmineDone: function (result) {
        console.log('Finished suite: '
            + result.overallStatus);
        for (var i = 0; i < result.failedExpectations.length; i++) {
            console.log('Global '
                + result.failedExpectations[i].message);
            console.log(result.failedExpectations[i].stack);
        }
    }
};
jasmine.getEnv().addReporter(myReporter);
module.exports = myReporter;