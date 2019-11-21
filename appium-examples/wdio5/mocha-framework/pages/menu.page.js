/**
 * Created by titusfortner on 11/23/16.
 */
var Page = require('./page');

var MenuPage = Object.create(Page, {
    arcsEntry: {
        get: function () {
            return browser.$(`~Arcs`);
        }
    }
});

module.exports = MenuPage;