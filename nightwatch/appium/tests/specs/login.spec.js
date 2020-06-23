const {LOGIN_USERS} = require('../configs/e2eConstants');

module.exports = {
    beforeEach: function (browser) {
        browser.page.LoginPage()
            .navigate()
            .waitForDisplayed();
    },

    'Login page: should be able to test loading of login page': function (browser) {
        browser.page.LoginPage().isDisplayed();
    },

    'Login page: should be able to login with a standard user': function (browser) {
        const LoginPage = browser.page.LoginPage();
        const SwagOverviewPage = browser.page.SwagOverviewPage();

        LoginPage.signIn(LOGIN_USERS.STANDARD);
        SwagOverviewPage.waitForDisplayed();
        SwagOverviewPage.isDisplayed();
    },

    'Login page: should not be able to login with a locked user': function (browser) {
        // It doesn't matter which error we check, all errors should be checked in a UT
        // With this UT we just check that A failure is triggered
        const LoginPage = browser.page.LoginPage();

        LoginPage.signIn(LOGIN_USERS.LOCKED);
        LoginPage.containsErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    },

    after : function(browser) {
        browser.customSauceLabsEnd();
    },
};
