import {LOGIN_USERS} from '../configs/e2eConstants';
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import {Given, When, Then} from '@cucumber/cucumber';

/**
 * This step example is using the CucumberJS regular expressions,
 * see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md#regular-expressions
 */
Given(/^I load the Swag Labs demo website$/, async () => {
  await browser.url('');
  await LoginPage.waitForIsShown();
});

When(/^I login with valid credentials$/, async () => {
  await LoginPage.signIn(LOGIN_USERS.STANDARD);
});

When(/^I login with locked out credentials$/, async () => {
  await LoginPage.signIn(LOGIN_USERS.LOCKED);
});

Then(/^I should see the login page being loaded$/, async () => {
  await expect(await LoginPage.waitForIsShown()).toEqual(
    true,
    'LoginPage page was not shown',
  );
});

Then(/^I should see the swag items page being loaded$/, async () => {
  await expect(await SwagOverviewPage.waitForIsShown()).toEqual(
    true,
    'Inventory List screen was not shown',
  );
});

Then(/^I should see the locked out error message$/, async () => {
  await expect(await LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
  await expect(await LoginPage.getErrorMessage()).toContain(
    'Epic sadface: Sorry, this user has been locked out.',
    'The error message is not as expected',
  );
});
