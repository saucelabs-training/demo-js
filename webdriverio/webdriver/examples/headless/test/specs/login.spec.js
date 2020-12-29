import { LOGIN_USERS } from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

describe('LoginPage', () => {
    beforeEach(() => {
        browser.url('');
        LoginPage.waitForIsShown();
    });

    it('should be able to test loading of login page', () => {
        expect(LoginPage.waitForIsShown()).toEqual(
            true,
            'LoginPage page was not shown',
        );
    });

    it('should be able to login with a standard user', () => {
        LoginPage.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(SwagOverviewPage.waitForIsShown()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', () => {
        // It doesn't matter which error we check, all errors should be checked in a UT
        // With this UT we just check that A failure is triggered
        LoginPage.signIn(LOGIN_USERS.LOCKED);

        expect(LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });
});
