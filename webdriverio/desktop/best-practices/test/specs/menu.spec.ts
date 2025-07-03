import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import LoginPage from "../page-objects/LoginPage";
import CartSummaryPage from "../page-objects/CartSummaryPage";
import MenuPage from "../page-objects/MenuPage";
import {setTestContext} from '../helpers/index';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

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

        await expect(await SwagOverviewPage.waitForIsShown()).toBeTruthy();
    });

    it('should be able to log out', async () => {
        await MenuPage.logout();

        await expect(await LoginPage.waitForIsShown()).toBeTruthy();
    });

    it('should be able to clear the cart', async () => {
        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');

        await MenuPage.restAppState();

        await expect(await AppHeaderPage.getCartAmount()).toEqual('');
    });
});
