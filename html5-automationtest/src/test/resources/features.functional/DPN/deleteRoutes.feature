Feature: Delete route for all users

	Scenario Outline: Get no of routes and all route names for registered user 

		Given I am on getamap app
		When I login as "<user>" and "<pwd>"
		And I navigate to my routes
		Then I should delete all routes 
		
		Examples:
		|user|pwd|
		|jd@example.com|123456|
		|ld@example.com|123456|	
		|ss@example.com|123456|	
		|sc@example.com|123456|		