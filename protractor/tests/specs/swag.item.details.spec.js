import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from '../configs/e2eConstants';
import {browser} from "protractor";

describe('Swag Item Details', () => {
    // @TODO: there is an error with IE11 `ReferenceError: 'URLSearchParams' is undefined`
    // This is fixed in the app, but not yet deployed
    if (browser.browserName !== 'internet explorer') {
        it('should validate that we can go back from the details to the inventory page', async () => {
            // Need to start with the inventory url here to get the correct routing
            await setTestContext({
                user: LOGIN_USERS.STANDARD,
                path: PAGES.SWAG_ITEMS,
            });
            await browser.get(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);

            // Actual test starts here
            expect(await SwagOverviewPage.isDisplayed()).toEqual(
                false,
                'Inventory screen is already visible'
            );

            await SwagDetailsPage.goBack();

            expect(await SwagOverviewPage.waitForIsDisplayed()).toEqual(
                true,
                'Inventory screen is still not visible'
            );
        });

        it('should validate that a product can be added to a cart', async () => {
            // Need to start with the inventory url here to get the correct routing
            await setTestContext({
                user: LOGIN_USERS.STANDARD,
                path: PAGES.SWAG_ITEMS,
            });
            await browser.get(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
            await SwagDetailsPage.waitForIsDisplayed();

            // Actual test starts here
            expect(await AppHeaderPage.getCartAmount()).toEqual(
                '',
                'The amount of cart items is not equal to nothing',
            );

            await SwagDetailsPage.addToCart();

            expect(await AppHeaderPage.getCartAmount()).toEqual(
                '1',
                'The amount of cart items is not equal to 1',
            );
        });

        it('should validate that a product can be removed from the cart', async () => {
            // Need to start with the inventory url here to get the correct routing
            await setTestContext({
                user: LOGIN_USERS.STANDARD,
                path: PAGES.SWAG_ITEMS,
                products: [PRODUCTS.BACKPACK],
            });
            await browser.get(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
            await SwagDetailsPage.waitForIsDisplayed();

            // Actual test starts here
            expect(await AppHeaderPage.getCartAmount()).toEqual(
                '1',
                'The amount of cart items is not equal to 1',
            );

            await SwagDetailsPage.removeFromCart();

            expect(await AppHeaderPage.getCartAmount()).toEqual(
                '',
                'The amount of cart items is not equal to nothing',
            );
        });
    }
});
