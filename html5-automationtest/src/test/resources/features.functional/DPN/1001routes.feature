Feature: As logged in user I should be create 100s of routes

	Scenario: create more than 1000 routes
	
		Given I am on getamap app
		When I login as registered user
		Then I should be able to create 1001 routes
