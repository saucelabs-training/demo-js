const swagOverviewCommands = {
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
     * Expect the swag items overview to have x amount of items
     *
     * @param {number} amount
     *
     * @returns {void}
     */
    expectSwagItemsCountToBe: function (amount) {
        return this.expect.elements('@swagItems').count.to.equal(amount);
    },
};

module.exports = {
    commands: [swagOverviewCommands],
    elements: {
        screen: '.inventory_list',
        swagItems: '.inventory_item',
        swagItemName: '.inventory_item_name',
    },
};
