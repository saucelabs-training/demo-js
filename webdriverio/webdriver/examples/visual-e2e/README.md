# Screener e2e visual testing
This folder contains a simple examples using Screener e2e visual testing

## Install dependencies
You can install all dependencies by running the following command

```bash
    cd webdriverio/webdriver/examples/visual-e2e
    npm install
```    

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test.visual.sauce
    
Run cross-platform in US, across multiple resolutions using:

    npm run test.visual.crossplatform
    
The output will look like this

```log
[0-0] 2020-07-17T13:35:47.715Z INFO webdriver: DATA {
  capabilities: {
    alwaysMatch: {
      browserName: 'chrome',
      platformName: 'macOS 10.15',
      browserVersion: 'latest',
      'sauce:options': [Object],
      'sauce:visual': [Object]
    },
    firstMatch: [ {} ]
  },
  desiredCapabilities: {
    browserName: 'chrome',
    platformName: 'macOS 10.15',
    browserVersion: 'latest',
    'sauce:options': { username: 'nikolay-a' },
    'sauce:visual': {
      apiKey: '{api-key}',
      projectName: 'demo-js',
      viewportSize: '1280x1024'
    }
  } 
```

## Timeouts
If you use multiple visual assertions in 1 single test (an `it` for Mocha/Jasmine or a `Scenario` for CucumberJS) then 
you might need to increase the test timeout value, see below. 

A single visual assertion can take up to 30-45 seconds. A combination of multiple E2E steps and a 2 or 3 visual checks 
might already exceed the single `it|scenario` timeout that is set and result in a failing test.

See below for how to set the timeouts per framework.

### Mocha
```js
exports.config = {
  // ...
  mochaOpts: {
    //...
    // This is the timeout value
    timeout: 120000,
    //...
  }
};
```

### Jasmine
```js
exports.config = {
  // ...
  jasmineOpts: {
    //...
    // This is the timeout value
    defaultTimeoutInterval: 120000,
    //...
  }
};
```

### CucumberJS
```js
exports.config = {
  // ...
  cucumberOpts: {
    //...
    // This is the timeout value
    timeout: 120000,
    //...
  }
};
```
