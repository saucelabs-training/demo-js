import AppHeaderPage from '../page-objects/AppHeaderPage';
import SwagDetailsPage from '../page-objects/SwagDetailsPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Swag Item Details', () => {
    it('should validate that we can go back from the details to the inventory page', () => {
        // Need to start with the inventory url here to get the correct routing
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);

        // Actual test starts here
        SwagDetailsPage.waitForIsShown()
        SwagDetailsPage.goBack();

        expect(SwagDetailsPage.waitForIsShown(false)).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that a product can be added to a cart', () => {
        // Need to start with the inventory url here to get the correct routing
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
        });
        browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
        SwagDetailsPage.waitForIsShown();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );

        SwagDetailsPage.addToCart();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );
    });

    it('should validate that a product can be removed from the cart', () => {
        // Need to start with the inventory url here to get the correct routing
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.SWAG_ITEMS,
            products: [PRODUCTS.BACKPACK],
        });
        browser.url(`${PAGES.SWAG_DETAILS}?id=${PRODUCTS.BACKPACK}`);
        SwagDetailsPage.waitForIsShown();

        // Actual test starts here
        expect(AppHeaderPage.getCartAmount()).toEqual(
            '1',
            'The amount of cart items is not equal to 1',
        );

        SwagDetailsPage.removeFromCart();

        expect(AppHeaderPage.getCartAmount()).toEqual(
            '',
            'The amount of cart items is not equal to nothing',
        );
    });
});
