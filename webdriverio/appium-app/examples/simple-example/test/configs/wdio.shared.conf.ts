export const config: WebdriverIO.Config = {

    // Specify what tests to run
    specs: ['./test/specs/*.spec.ts'],
    //Capabilities.. We will set these in the platform specific conf files
    capabilities: [],
    maxInstances: 1,
    //Test Configuration
    logLevel: 'info',
    baseUrl: '',
    waitforTimeout: 30000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    reporters: ['spec'],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    services: [],
}
