@ui
Feature: SauceDemo login

  Scenario: login
    Given I navigate to saucedemo
    And I input "standard_user" in the username field
    And I input "secret_sauce" in the password field
    And I click "login" button
    Then I should be able to see "Products" page
