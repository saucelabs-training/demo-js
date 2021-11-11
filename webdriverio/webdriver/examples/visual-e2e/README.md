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
`[0-0] 2020-07-17T13:35:47.715Z INFO webdriver: DATA {
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
