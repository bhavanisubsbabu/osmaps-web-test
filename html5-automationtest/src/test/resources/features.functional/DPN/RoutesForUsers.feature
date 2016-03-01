Feature: Create 100s of routes for users

	Scenario Outline: Login as different users and create 100s of routes
	
		Given I am on getamap app
		When I login as "<user>" and "<pwd>"
		Then I should create 100 routes
		
	Examples:
		|user|pwd|
		|deltapack@sub.com|123456|
		|deltapack@reg.com|123456|
		
		