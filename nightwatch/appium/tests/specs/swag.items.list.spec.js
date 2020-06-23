const {setTestContext} = require('../helpers');
const {LOGIN_USERS, PAGES} = require('../configs/e2eConstants');

module.exports = {
    'Swag Overview page: should validate that all products are present': function (browser) {
        const SwagOverviewPage = browser.page.SwagOverviewPage();

        setTestContext(
            browser,
            {
                user: LOGIN_USERS.STANDARD,
                path: PAGES.SWAG_ITEMS,
                products: [],
            },
        );
        SwagOverviewPage.waitForDisplayed();
        SwagOverviewPage.expectSwagItemsCountToBe(6);
    },

    after: function (browser) {
        browser.customSauceLabsEnd();
    },
};
