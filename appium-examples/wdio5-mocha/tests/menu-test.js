import HomePage from '../pages/page';
import MenuPage from '../pages/menu.page';

describe('Mocha Spec Sync example', () => {
    it("verify Arcs entry in menu", () => {
        HomePage.open();
        HomePage.submit();
        expect(MenuPage.arcsEntry.get(isVisible()).to.equal(true));
    });
});