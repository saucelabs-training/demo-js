@login
Feature: LoginPage

  Background:
    Given I load the Swag Labs demo website

  Scenario: As a user I want to verify that the login page loads
    Then I should see the login page being loaded

  @happy-flow
  Scenario: As a user I want to be able to login
    When I login with valid credentials
    Then I should see the swag items page being loaded

    # It doesn't matter which error we check, all errors should be checked in a UT
    # With this UT we just check that A failure is triggered
  @error-flow
  Scenario: As a user I want to be notified if I'm not allowed to login as a locked out user
    When I login with locked out credentials
    Then I should see the locked out error message
