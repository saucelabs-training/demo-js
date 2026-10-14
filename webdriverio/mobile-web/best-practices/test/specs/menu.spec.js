import AppHeaderPage from '../page-objects/AppHeaderPage.js';
import SwagOverviewPage from '../page-objects/SwagOverviewPage.js';
import LoginPage from "../page-objects/LoginPage.js";
import CartSummaryPage from "../page-objects/CartSummaryPage.js";
import MenuPage from "../page-objects/MenuPage.js";
import {setTestContext} from '../helpers/index.js';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants.js";

describe('Menu', () => {
    beforeEach(async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CART,
            products: [PRODUCTS.BACKPACK],
        });
        await CartSummaryPage.waitForIsShown();
        await MenuPage.open();
    });

    it('should be able to the swag items overview page', async () => {
        await MenuPage.openInventoryList();

        await expect(await SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Swag Items overview page was not shown',
        );
    });

    // Don't execute this test on the EU DC, the saucelabs.com url is not working there making this test fail
    if(!process.env.REGION) {
        it('should be able to open the about page', async () => {
            await MenuPage.openAboutPage();

            await expect(await CartSummaryPage.waitForIsShown(false)).toEqual(
                true,
                'Swag Cart should not be shown anymore',
            );
        });
    }

    it('should be able to log out', async () => {
        await MenuPage.logout();

        await expect(await LoginPage.waitForIsShown()).toEqual(
            true,
            'Login is not shown',
        );
    });

    it('should be able to clear the cart', async () => {
        await expect(await AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to nothing',
        );

        await MenuPage.restAppState();

        await expect(await AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
