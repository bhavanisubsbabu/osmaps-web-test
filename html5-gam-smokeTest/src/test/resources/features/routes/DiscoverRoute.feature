Feature: Discover route
As a user 
I order to plan my journy
I should be able to discover existing routes


Scenario: Discover single route as registered user
	Given I am on getamap app
    When I login as registered user
    And  I click Discover under routes
	Then I should available public routes in that map view area
	
Scenario: Discover single scenario as  subscriber
	Given I am on getamap app
    When I login as subscriber user
    And  I click Discover under routes
	Then I should available public routes in that map view area

Scenario: Discover single scenario as  guest
	Given I am on getamap app as guest user    
    And  I click Discover under routes
	Then I should available public routes in that map view area
	


