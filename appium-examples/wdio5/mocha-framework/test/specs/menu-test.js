/**
 * Created by jamestacker on 11/20/19.
 */
const expect = require('chai').expect;
const HomePage = require('../../pages/home.page'),
    MenuPage = require('../../pages/menu.page');

describe('Mocha Spec Sync example', function() {
    it("verify Arcs entry in menu", function() {
        HomePage.click("Graphics");
        expect(MenuPage.arcsEntry.getAttribute('name')).to.equal('Arcs');
    });
});