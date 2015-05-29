Feature: Print zoom maps
As a getamap  user
I order to navigate to route
I want to print zoom maps

# Print zoom map as guest


Scenario: User to print a-b walking directions

Scenario: User to print a-b driving directions

Scenraio: user can search place and 


Scenario: Print zoom maps as guest user
Given I am on getamap app as guest user
When I am on print panel
Then I should be able  print zoom maps at any zoom layer

Scenario: Print zoom maps as guest user with POI on map
Given I am on getamap app as guest user
When I view POIs on map for any category
And I open Print panel
Then I should be able  print zoom maps with POIs on it.

Scenario: Print zoom map as guest with public route on it	
	Given I am on getamap app as guest user
	When I discover public routes 
	And I open Print panel
	Then I should be able to print zoom maps with Routes in it
	
Scenario: Print zoom map with guest limitations
	Given I am on getamap app as guest user
	When I open print panel
	Then I should be able to print on A4 only
	

#Print zoom maps as registered user

Scenario: Print zoom maps as reg user
Given I am on getamap app as reg user
When I am on print panel
Then I should be able  print zoom maps at any zoom layer

Scenario: Print zoom maps as reg user with POI on map
Given I am on getamap app as reg user
When I view POIs on map for any category
And I open Print panel
Then I should be able  print zoom maps with POIs on it.

Scenario: Print zoom map as guest with public route on it	
	Given I am on getamap app as reg user
	When I discover public routes 
	And I open Print panel
	Then I should be able to print zoom maps with Routes in it

Scenario: Print created routes on zoom maps
	Given I am on the 


