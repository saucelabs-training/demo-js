import { LOGIN_USERS } from '../configs/e2eConstants';
import LoginPage from '../pageobjects/LoginPage';
import SwagOverviewPage from '../pageobjects/SwagOverviewPage';
import {Given, When, Then} from 'cucumber';

/**
 * This step example is using the CucumberJS regular expressions,
 * see https://github.com/cucumber/cucumber-js/blob/master/docs/support_files/step_definitions.md#regular-expressions
 */
Given(/^I load the Swag Labs demo website$/,()=>{
        browser.url('');
        LoginPage.waitForIsShown();
});

When(/^I login with valid credentials$/,()=>{
  LoginPage.signIn(LOGIN_USERS.STANDARD);
});

When(/^I login with locked out credentials$/,()=>{
  LoginPage.signIn(LOGIN_USERS.LOCKED);
});

Then(/^I should see the login page being loaded$/, () => {
    expect(LoginPage.waitForIsShown()).toEqual(
      true,
      'LoginPage page was not shown',
    );
});

Then(/^I should see the swag items page being loaded$/, () => {
  expect(SwagOverviewPage.waitForIsShown()).toEqual(
    true,
    'Inventory List screen was not shown',
  );
});

Then(/^I should see the locked out error message$/, () => {
  expect(LoginPage.isErrorMessageDisplayed()).toEqual(true, 'Error message is shown');
  expect(LoginPage.getErrorMessage()).toContain(
    'Epic sadface: Sorry, this user has been locked out.',
    'The error message is not as expected',
  );
});
