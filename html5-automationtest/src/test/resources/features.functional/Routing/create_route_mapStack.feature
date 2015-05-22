Feature: Create Route
As a getamap registered user
In order to navigate
I should be able to create route on different mapstack 

@Current
Scenario Outline: Registered user create route on different mapstack 
Given I am on getamap app
When I login as registered user
And I am on mapstack"<mapstack>"
Then I should be able to create route on mapstack"<mapstack>"
And  Save the route.
Examples:
|mapstack|
|1|
|2|
|3|
|4|


@Current
Scenario Outline: Registered user create route on different search areas
Given I am on getamap app
When I login as registered user
And I search "<search-area>"
Then I should be able to create route in "<search-area>"
And  Save the route.
Examples:
|search-area|
|London|





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
	







