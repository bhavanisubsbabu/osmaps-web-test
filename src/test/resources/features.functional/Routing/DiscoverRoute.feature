Feature: Discover route
  As a user 
  I order to plan my journy
  I should be able to discover existing routes


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


  Scenario: Discover single scenario as  guest
    Given I am on getamap app
    When I login as guest user
    And I click Discover under routes
    Then I should see available public routes in that map view area

  @WIP
  Scenario: Discover single scenario as  guest
    Given I am on getamap app
    When I login as guest user
    And I click Discover under routes
    And I Select the Route Type as "Other"
    And I Select the Distance as "30 - 50 miles"
    Then I Should see the Route "Angus Glens" on the sidebar
    And I Should see the Route "Angus Glens" on the Map

  @WIP
  Scenario Outline: Create All Route types
    Given I am on getamap app
    When I login as registered user
    Then I should be able to create route
    And Save the route as any "<RouteType>"
    And I click Discover under routes
    And I Select the Route Type as "<RouteType>"
    And I Select the Distance as "0 - 10 miles"
    Then I Should see the Route "Angus Glens" on the sidebar
    And I Should see the Route "Angus Glens" on the Map

    Examples: 
      | RouteType |
      | Other     |
