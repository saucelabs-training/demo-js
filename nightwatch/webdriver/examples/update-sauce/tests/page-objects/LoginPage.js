const {DEFAULT_TIMEOUT} = require('../configs/e2eConstants');

const loginCommands = {
    /**
     * Wait for page to be visible
     *
     * @returns {void}
     */
    waitForDisplayed: function () {
        return this.waitForElementVisible('@screen', 15000);
    },

    /**
     * Check if the screen is displayed
     *
     * @returns {boolean}
     */
    isDisplayed: function () {
        return this.assert.visible('@screen');
    },

    /**
     * Sign in
     *
     * @param {object} userDetails
     * @param {string} userDetails.username
     * @param {string} userDetails.password
     *
     * @returns {void}
     */
    signIn: function (userDetails) {
        const {password, username} = userDetails;

        return this.waitForElementVisible('@screen', DEFAULT_TIMEOUT)
            .setValue('@username', username)
            .setValue('@password', password)
            .click('@loginButton');
    },

    /**
     * Get the text or the error message container
     *
     * @param {string} errorMessage
     *
     * @returns{string}
     */
    containsErrorMessage: function (errorMessage) {
        return this.waitForElementVisible('@errorMessage', DEFAULT_TIMEOUT)
            .assert.containsText('@errorMessage', errorMessage);
    },
};

module.exports = {
    commands: [loginCommands],
    elements: {
        screen: '#login_button_container',
        username: '#user-name',
        password: '#password',
        loginButton: '.btn_action',
        errorMessage: '[data-test="error"]',
    },
    /**
     * Launch the url
     *
     * @returns {void}
     */
    url: function () {
        return this.api.launchUrl;
    },
};
