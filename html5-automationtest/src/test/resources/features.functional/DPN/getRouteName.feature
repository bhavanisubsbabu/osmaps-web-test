
Feature: Get no of routes and all route Names
@wip
	Scenario Outline: Get no of routes and all route names for registered user 

		Given I am on getamap app
		When I login as "<user>" and "<pwd>"
		And I navigate to my routes
		Then I should be get all routes 
		
	Examples:
		|user|pwd|
		|mf@example.com|123456|
		|sp@example.com|123456|
		|cb@example.com|123456|		
		 