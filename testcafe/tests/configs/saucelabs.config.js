const createTestCafe = require('testcafe');
const {join} = require('path');
let testCafe = null;

createTestCafe()
    .then(tc => {
        testCafe = tc;
        const runner = testCafe.createRunner();

        return runner
            .src(['tests/specs/'])
            .browsers([
                'saucelabs:Chrome@latest:Windows 10',
                'saucelabs:MicrosoftEdge@latest:Windows 10',
                'saucelabs:Firefox@latest:Windows 10',
                'saucelabs:Internet Explorer@latest:Windows 10',
            ])
            .screenshots({
                path: join(process.cwd(), './.tmp'),
                fullPage: true,
                takeOnFails: true,
            })
            .concurrency(8)
            .run();
    })
    .then(failedCount => {
        console.log('Tests failed: ' + failedCount);
        testCafe.close();
    });
