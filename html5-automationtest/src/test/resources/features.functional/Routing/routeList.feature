@regression
Feature: Find a route from List

	Scenario: User should be able to navigate to my routes list and find a route by scrolling
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes
		Then I should be able to scroll to find a route 
		
	Scenario: User should be able to navigate to my routes list and find a route by search
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes
		Then I should be able to search to find a route