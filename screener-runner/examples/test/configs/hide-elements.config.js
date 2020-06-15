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
    ],
    //What are all of the browsers that we want to test against
    browsers: [
        {
            browserName: 'chrome'
        }
    ]
};