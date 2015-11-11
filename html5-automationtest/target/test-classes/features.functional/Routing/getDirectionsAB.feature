@regression
Feature: Get Directions
As a user 
In order to find a route 
I should be able to get directions from start and end point


@guestUserFlow, @demo
Scenario: Guest user should be able to do A-B Car routing
	Given I am on getamap app
	When I login as guest user
	And I open A-B Routing window
	And I enter start location
	And I enter finish location
	And I select car icon
	And I click on GetDirections button
	Then I should be able to see A-B car directions
	
@registeredUserFlow
Scenario: Registered user should be able to do A-B car routing
	Given I am on getamap app
	When I login as registered user
	And I open A-B Routing window
	And I enter start location
	And I enter finish location
	And I select car icon
	And I click on GetDirections button	
	Then I should be able to see A-B car directions
	

@subscriberUserFlow
Scenario: Subscriber user should be able to do A-B car routing
	Given I am on getamap app
	When I login as subscriber user
	And I open A-B Routing window
	And I enter start location
	And I enter finish location
	And I select car icon
	And I click on GetDirections button	
	Then I should be able to see A-B car directions

