import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import CartSummaryPage from '../page-objects/CartSummaryPage';
import {setTestContext} from '../helpers/index';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Swag items list', () => {
    it('should validate that all products are present', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        await expect(await SwagOverviewPage.getAmount()).toEqual(6);
    });

    it('should validate that the details of a product can be opened', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        const product = 'Sauce Labs Backpack';

        await SwagOverviewPage.openSwagDetails(product);

        await expect(await SwagDetailsPage.waitForIsShown()).toBeTruthy();

        await expect(await SwagDetailsPage.getText()).toContain(product);
    });

    it('should validate that a product can be added to the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        await expect(await AppHeaderPage.getCartAmount()).toEqual('');

        await SwagOverviewPage.addSwagToCart(0);

        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');
    });

    it('should validate that a product can be removed from the cart', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK]
        });
        await SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');

        await SwagOverviewPage.removeSwagFromCart(0);

        await expect(await AppHeaderPage.getCartAmount()).toEqual('');
    });

    it('should be able to open the cart summary page', async () => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await SwagOverviewPage.waitForIsShown();

        // Actual test starts here
        await AppHeaderPage.openCart();

        await expect(await CartSummaryPage.waitForIsShown()).toBeTruthy();
    });
});
