var expect = require('chai').expect;
var HomePage = require('../pages/home.page'),
    MenuPage = require('../pages/menu.page');

describe('Mocha Spec Sync example', function() {
    it("verify Arcs entry in menu", function() {
        HomePage.click("Graphics");
        expect(MenuPage.arcsEntry.isVisible()).to.equal(true);
    });
});
