import CartSummaryPage from '../page-objects/CartSummaryPage';
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage';
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage';
import {LOGIN_USERS, PAGES, PERSONAL_INFO} from "../configs/e2eConstants";
import {setTestContext} from '../helpers';

describe('Checkout - Personal info', () => {
    beforeEach(() => {
        setTestContext({
            user: LOGIN_USERS.STANDARD,
            path: PAGES.CHECKOUT_PERSONAL_INFO,
        });
        CheckoutPersonalInfoPage.waitForIsShown();
    });

    it('should validate we get an error if we don not provide all personal information', () => {
        // It doesn't matter which error we check here, all error states should have been tested in a UT
        // Reason for selecting this one is that it triggers multiple fields and thus triggers the state
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.NO_POSTAL_CODE);

        expect(CheckoutPersonalInfoPage.waitForIsShown()).toEqual(
            true,
            'Error message is shown, this is not correct',
        );

        expect(CheckoutPersonalInfoPage.getErrorMessage()).toEqual(
            'Error: Postal Code is required',
            'Error message is shown, but not with the correct message',
        );
    });

    it('should validate that we can cancel the first checkout', () => {
        expect(CartSummaryPage.isDisplayed()).toEqual(
            false,
            'Cart screen is already visible'
        );

        CheckoutPersonalInfoPage.cancelCheckout();

        expect(CartSummaryPage.waitForIsShown()).toEqual(
            true,
            'Cart content screen is still not visible'
        );
    });

    it('should be able to continue the checkout', () => {
        CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD);

        expect(CheckoutSummaryPage.waitForIsShown()).toEqual(
            true,
            'Checkout page two is still not visible'
        );
    });
});
