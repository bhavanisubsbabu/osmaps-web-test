Feature: Discover route
  As a user 
  I order to plan my journy
  I should be able to discover existing routes



  Scenario: Discover single scenario as  guest
    Given I am on getamap app
    When I login as guest user
    And I click Discover under routes
    Then I should see available public routes in that map view area

  Scenario: Discover single route as registered user
    Given I am on getamap app
    When I login as registered user
    And I click Discover under routes
    Then I should see available public routes in that map view area


  @regression
  Scenario: Discover single scenario as  subscriber
    Given I am on getamap app
    When I login as subscriber user
    And I click Discover under routes
    Then I should see available public routes in that map view area



