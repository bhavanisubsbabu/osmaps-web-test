@regression
Feature: Create Route
As a getamap registered user
In order to navigate
I want to create route on map

@demo@smoke
Scenario: Create Route and Save as registered user
Given I am on getamap app
When I login as registered user
Then I should be able to create route
And  Save the route.

Scenario: Create Route and Save as Subscriber 
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route.

Scenario: Create route type as run
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route
	And  Save the route as run

Scenario: Create route type as cycle
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route
	And  Save the route as cycle


Scenario: Create route type as other
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route
	And  Save the route as other


Scenario: Create a route and add waypoint name and description
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route and edit waypoint name and description
	And  Save the route.
	

	