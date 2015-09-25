Feature: 
  As a guest user
  In order to view ratings
  I should have permissions to authored routes

  
  
  Scenario: Verify guest user can view a route rating
    Given I am on getamap app
    When I login as guest user
    And I click Discover under routes
    Then I should see ratings for Discover routes


  Scenario: Verify Registered user can view a route rating
    Given I am on getamap app
    When I login as registered user
    And I click Discover under routes
    Then I should see ratings for Discover routes
    And I should be able to rate authored routes


  Scenario: Verify Subscribed user can view a route rating
    Given I am on getamap app
    When I login as Subscribed user
    Then I should see ratings for Discover routes
    And I should be able to rate authored routes
