@api
Feature: Booking API

  Scenario: Create Booking
    When I create a new booking
    Then the booking should be created successfully

  Scenario: Get Booking
    Given I have an existing booking
    When I retrieve the booking
    Then the booking details should be returned

  Scenario: Update Booking
    Given I have a booking and auth token
    When I update the booking
    Then the booking should be updated successfully

  Scenario: Delete Booking
    Given I have a booking and auth token
    When I delete the booking
    Then the booking should be deleted successfully
