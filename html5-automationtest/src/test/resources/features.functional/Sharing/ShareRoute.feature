@regression
Feature: Share Route

	Scenario: User be able to share a route by email
	
		Given I am on getamap app
		When I login as a specific registered user
		And I navigate to my routes to select a route
		And I clicked on Share icon, select email, enter email address and share 
		Then application should send email with route details and default message
	@smoke	
	Scenario: User be able to share a route by email to multiple recipients 
	
		Given I am on getamap app
		When I login as a specific registered user 
		And I navigate to my routes to select a route
		And I clicked on Share icon, select email, enter multiple email addresses and share 
		Then application should send email with route details and default message
	@wip		
	Scenario: User be able to edit default text message and share a route by email 
	
		Given I am on getamap app
		When I login as a specific registered user
		And I navigate to my routes to select a route
		And I clicked on Share icon, select email, enter email address, update text and share 
		Then application should send email with route details and default message	
	@wip	
 	Scenario: 	User be able to share a route by Facebook
		
		Given I am on getamap app
		When I login as a specific registered user
		And I navigate to my routes to select a route
		And I clicked on Share icon, select facebook, looged into facebook and share 
		Then application should show confirmation message and post route on facebook