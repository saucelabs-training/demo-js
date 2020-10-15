# WebdriverIO CucumberBDD Example
This folder contains simple code examples designed to
demonstrate how to use WebdriverIO with CucumberBDD and Sauce.
This is just an example to get you started and not a
best practice recommendation!

## Install dependencies
Navigate to the `cucumber` directory
```
cd cucumber
```

Install all dependencies:

    npm install
    
This will install all needed dependencies that are 
listed in the `package.json`-file

## Update base url
Update the `baseUrl` property to your application url in the `wdio.shared.conf.js`

## Run tests on Sauce Labs
You can run your tests on Sauce Labs US DC with this command

    npm run test:sauce

