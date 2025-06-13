import SwagOverviewPage from '../page-objects/SwagOverviewPage';
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {setTestContext} from '../helpers';
import {LOGIN_USERS, PAGES, PRODUCTS} from "../configs/e2eConstants";

describe('Checkout - Summary', () => {
    beforeEach(async() => {
        await setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_SUMMARY,
            products: [PRODUCTS.BACKPACK],
        });
        await CheckoutSummaryPage.waitForIsShown();
    });

    it('should validate that we can continue shopping', async() => {
        await CheckoutSummaryPage.finishCheckout();

        await expect(await CheckoutCompletePage.waitForIsShown()).toEqual(
            true,
            'The checkout complete page is still not shown',
        );
    });

    it('should validate that we can cancel checkout and go to the inventory page', async() => {
        await CheckoutSummaryPage.cancelCheckout();

        await expect(await SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Inventory screen is still not visible'
        );
    });

    it('should validate that we have 1 product in our checkout overview', async() => {
        await expect(await CheckoutSummaryPage.getSwagAmount()).toEqual(
            1,
            'Not the correct items are shown in the checkout overview page'
        );
    });
});
