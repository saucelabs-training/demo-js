const {LOGIN_USERS, PAGES, PRODUCTS} = require('../e2eConstants');
const MenuPage = require('../page-objects/MenuPage');
const SwagOverviewPage = require('../page-objects/SwagOverviewPage');
const CartSummaryPage = require('../page-objects/CartSummaryPage');
const LoginPage = require('../page-objects/LoginPage');
const AppHeaderPage = require('../page-objects/AppHeaderPage');
const {setTestContext} = require('../helpers');

describe('Menu', () => {
    beforeEach(async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        await CartSummaryPage.waitForIsDisplayed();
        await MenuPage.open();
    });

    it('should be able to the swag items overview page', async () => {
        await MenuPage.openInventoryList();

        expect(await SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Swag Items overview page was not shown',
        );
    });

    it('should be able to open the about page', async () => {
        const currentUrl = page.url();
        await MenuPage.openAboutPage();

        expect(page.url()).not.toEqual(currentUrl, 'Swag Cart should not be shown anymore');
    });

    it('should be able to log out', async () => {
        await MenuPage.logout();

        expect(await LoginPage.waitForIsDisplayed()).toEqual(
            true,
            'Login is not shown',
        );
    });

    it('should be able to clear the cart', async () => {
        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to nothing',
        );

        await MenuPage.restAppState();

        expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
