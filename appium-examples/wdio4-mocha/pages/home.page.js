/**
 * Created by titusfortner on 11/23/16.
 */
var Page = require('./page');

var HomePage = Object.create(Page, {
    graphicsTab: {
        get: function () {
            return browser.element(`~Graphics`);
        }
    },

    click: {
        value: function (tabName) {
            if (tabName === "Graphics") {
                this.graphicsTab.click();

            } else {
                throwError("Not implemented");
            }

        }
    }

});

module.exports = HomePage;