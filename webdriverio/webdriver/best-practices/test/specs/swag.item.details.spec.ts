import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {setTestContext} from '../helpers/index';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Swag Item Details', () => {
    it('should validate that we can go back from the details to the inventory page', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);

        // Actual test starts here
        await SwagDetailsPage.waitForIsShown()
        await SwagDetailsPage.goBack();

        await expect(await SwagDetailsPage.waitForIsShown(false)).toBeTruthy();
    });

    it('should validate that a product can be added to a cart', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        await browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
        await SwagDetailsPage.waitForIsShown();

        // Actual test starts here
        await expect(await AppHeaderPage.getCartAmount()).toEqual('');

        await SwagDetailsPage.addToCart();

        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');
    });

    it('should validate that a product can be removed from the cart', async () => {
        // Need to start with the inventory url here to get the correct routing
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK],
        });
        await browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
        await SwagDetailsPage.waitForIsShown();

        // Actual test starts here
        await expect(await AppHeaderPage.getCartAmount()).toEqual('1');

        await SwagDetailsPage.removeFromCart();

        await expect(await AppHeaderPage.getCartAmount()).toEqual('');
    });
});
