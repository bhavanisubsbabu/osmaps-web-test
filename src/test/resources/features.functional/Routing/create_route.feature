Feature: Create Route
As a getamap registered user
In order to navigate
I want to create route on map

@regression
Scenario: Create Route and Save as registered user
Given I am on getamap app
When I login as registered user
Then I should be able to create route
And  Save the route.

# @TODO:JT disabled failing test - needs fixing!

@regression
Scenario: Create Route and Save as Subscriber 
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route.




@regression
Scenario: Create Route and Save as Subscriber 
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route.

@regression
Scenario: Create Route and Save and Edit as registered user
Given I am on getamap app
When I login as registered user
Then I should be able to create route
And  Save the route.
And I should be able to edit route


@regression
Scenario: Create Route and Save and Edit as subscriber user
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route.
And I should be able to edit route


Scenario: Create Private Route
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route as private


Scenario Outline: Create Route on ScaleMaps 
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route on "<map type>"km Map
	And  Save the route.
Examples:
|map type|
|25|
|50|
	
	
# @TODO:JT disabled failing test - needs fixing!
 
@regression
Scenario: Create route type as run
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route
	And  Save the route as run


# @TODO:JT disabled failing test - needs fixing!

@regression
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

# create route with line style

@regression	
Scenario: Create route with line style and difficulty
	Given I am on getamap app
	When I login as registered user
	Then I should be able to create route
	And  Save as customed route

@regression
Scenario: Create route with line style and difficulty
	Given I am on getamap app
	When I login as subscriber user
	Then I should be able to create route
	And  Save as customed route
