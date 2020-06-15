var Steps = require('screener-runner/src/steps');
module.exports = {
    // full repository name for your project:
    projectRepo: 'jo-malone',

    // this example assumes Environment Variables listed below exist on your system:
    apiKey: process.env.SCREENER_API_KEY,
    newSessionForEachState: true, //this forces screener to run a brand new sauce labs session for each screenshot

    // array of UI states to capture visual snapshots of.
    // each state consists of a url and a name.
    states: [
        {
            //This page has dynamic elements that only appear when they are scrolled into view
            url: 'https://wwwtmp.jomalone.co.uk/scents/light-floral/red-roses',
            name: 'Before dynamic scrolling'
        },
        {
            //This page has dynamic elements that only appear when they are scrolled into view
            //so we run a script to preload those elements
            url: 'https://wwwtmp.jomalone.co.uk/scents/light-floral/red-roses',
            name: 'Preload the page to handle dynamic loading',
            steps: new Steps()
                .executeScript('window.scrollTo(0,document.body.scrollHeight)')
                .wait(4000)
                .snapshot('Loaded')
                .end()
        }
    ],
    //What are all of the browsers that we want to test against
    browsers: [
        {
            browserName: 'chrome'
        }
    ]
};