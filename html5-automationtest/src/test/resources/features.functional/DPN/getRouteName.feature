
Feature: Get no of routes and all route Names
@wip
	Scenario Outline: Get no of routes and all route names for registered user 

		Given I am on getamap app
		When I login as "<user>" and "<pwd>"
		And I navigate to my routes
		Then I should be get all routes 
		
	Examples:
		|user|pwd|
		|deltapack@sub.com|123456|
		|deltapack@reg.com|123456|
		|nasirkhantestite@example.com|123456|
	
	Scenario: Get no of routes and all route names for Subscribed user 

		Given I am on getamap app
		When I login as subscriber user
		And I navigate to my routes
		Then I should be get all routes 		 