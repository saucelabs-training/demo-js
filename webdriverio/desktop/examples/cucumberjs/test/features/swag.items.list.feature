@swag-items
Feature: Swag items list

  Scenario: As an existing user I want to verify that all products are available
    Given I'm on the swag overview page as an existing user
    Then I should see 6 swag items

  @product-details
  Scenario: As an existing user I want to verify that I can view the product details
    Given I'm on the swag overview page as an existing user
    When I open the product details of "Sauce Labs Backpack"
    Then I should see the details of the "Sauce Labs Backpack"

  @products @cart
  Scenario: As an existing user I want to verify that I can add a product to the cart
    Given I'm on the swag overview page as an existing user
    And the cart has 0 items
    When I add product 1 to the cart
    Then the cart has 1 items

  @products @cart
  Scenario: As an existing user I want to verify that I can remove a product to the cart
    Given I'm on the swag overview page as an existing user with one product in my cart
    And the cart has 1 items
    When I remove product 1 from the cart
    Then the cart has 0 items

  @cart
  Scenario: As an existing user I want to verify that I open the cart summary page
    Given I'm on the swag overview page as an existing user with one product in my cart
    When I open the cart
    Then I should see the cart page
