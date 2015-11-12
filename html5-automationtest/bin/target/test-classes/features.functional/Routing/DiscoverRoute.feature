@regression
Feature: Discover route
  As a user 
  I order to plan my journy
  I should be able to discover existing routes

@demo
  Scenario: Discover routes as  guest
    Given I am on getamap app
    When I login as guest user
    And I click Discover under routes
    Then I should see available public routes in that map view area

  Scenario: Discover routes as registered user
    Given I am on getamap app
    When I login as registered user
    And I click Discover under routes
    Then I should see available public routes in that map view area

  Scenario: Discover routes as  subscriber
    Given I am on getamap app
    When I login as subscriber user
    And I click Discover under routes
    Then I should see available public routes in that map view area



