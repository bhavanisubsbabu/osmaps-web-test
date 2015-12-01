Feature: Get no of routes and all route Names

	Scenario: Get no of routes and all route names for registered user 

		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes
		Then I should be get all routes 
	@wip	
	Scenario: Get no of routes and all route names for Subscribed user 

		Given I am on getamap app
		When I login as subscriber user
		And I navigate to my routes
		Then I should be get all routes 		 