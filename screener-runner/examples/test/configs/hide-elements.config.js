var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'sample-app-web',
    //ignore: '.btn_action',
    //This will hide your element from the screenshot
    hide: '.btn_action',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
    newSessionForEachState: true, //this forces screener to run a brand new sauce labs session for each screenshot

    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
        {
            url: 'https://www.saucedemo.com',
            name: 'Hide element example',
        },
        //If you wanted to dynamically preload the page, you'd do it like this
        // {
        //   //This page has dynamic elements that only appear when they are scrolled into view
        //   //so we run a script to preload those elements
        //   url: 'https://www.ultimateqa.com',
        //   name: 'Ultimate QA Home Page',
        //   steps: new Steps()
        //   .executeScript('window.scrollTo(0,document.body.scrollHeight)')
        //   .wait(4000)
        //   .snapshot('Loaded')
        //   .end()
        // }
    ],
    //What are all of the browsers that we want to test against
    //In this case, they are all overriden in the screener.sauce.config
    browsers: [
        {
            browserName: 'chrome'
        }
    ]
};