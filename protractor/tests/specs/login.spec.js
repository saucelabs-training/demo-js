import {LOGIN_USERS} from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagOverviewPage from '../page-objects/SwagOverviewPage';

describe('LoginPage', () => {
    beforeEach(async () => {
        await browser.get('');
        await LoginPage.waitForIsDisplayed();
    });

    it('should be able to test loading of login page', async () => {
        expect(await LoginPage.waitForIsDisplayed()).toEqual(
            true,
            'LoginPage page was not shown',
        );
    });

    it('should be able to login with a standard user', async () => {
        await LoginPage.signIn(LOGIN_USERS.STANDARD);

        // Wait for the inventory screen and check it
        expect(await SwagOverviewPage.waitForIsDisplayed()).toEqual(
            true,
            'Inventory List screen was not shown',
        );
    });

    it('should not be able to login with a locked user', async () => {
        // It doesn't matter which error we check, all errors should be checked in a UT
        // With this UT we just check that A failure is triggered
        await LoginPage.signIn(LOGIN_USERS.LOCKED);

        expect(await LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
        expect(await LoginPage.getErrorMessage()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });
});
