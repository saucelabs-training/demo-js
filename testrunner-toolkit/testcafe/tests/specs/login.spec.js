import {LOGIN_USERS} from '../configs/e2eConstants';
import LoginPage from '../page-objects/LoginPage';
import SwagListPage from '../page-objects/SwagOverviewPage';

fixture`Test Login`
    .beforeEach(t=> t.resizeWindow(1366, 768))
    .page(`${ LoginPage.url }`);

test('should be able to test loading of login page', async t => {
    await t.expect(LoginPage.isScreenDisplayed()).ok();
});

test('should be able to login with a standard user', async t => {
    await LoginPage.signIn(LOGIN_USERS.STANDARD);
    await t.expect(SwagListPage.screen.exists).ok();
});

test('should not be able to login with a locked user', async t => {
    // It doesn't matter which error we check, all errors should be checked in a UT
    // With this UT we just check that A failure is triggered
    await t.expect(LoginPage.isErrorMessageDisplayed()).notOk();
    await LoginPage.signIn(LOGIN_USERS.LOCKED);
    await t.expect(LoginPage.getErrorMessage()).eql('Epic sadface: Sorry, this user has been locked out.');
});
