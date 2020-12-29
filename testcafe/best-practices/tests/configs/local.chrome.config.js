const createTestCafe = require('testcafe');
const {join} = require('path');
let testCafe = null;

createTestCafe('localhost', 1337, 1338)
    .then(tc => {
        testCafe = tc;
        const runner = testCafe.createRunner();

        return runner
            .src(['tests/specs/'])
            .browsers(['chrome:headless'])
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
