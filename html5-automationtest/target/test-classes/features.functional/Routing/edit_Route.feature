@regression
Feature: User should able to edit routes
@smoke
	Scenario: User should be able to edit route by adding way points
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, add way points and save
		Then route is saved with updates
@wip	
	Scenario: User should be able to edit route by deleting way points
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, delete way points and save
		Then route is saved with updates
	
	Scenario: User should be able to edit route by updating styling
			
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, add styling and save
		Then route is saved with updates
		
	Scenario: User should be able to edit route by updating route type as running
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, change route type running and save
		Then route is saved with updates
		
	Scenario: User should be able to edit route by updating route type as cycling
		
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, change route type cycling and save
		Then route is saved with updates
		
	Scenario: User should be able to edit route by updating route type as other
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, change route type other and save
		Then route is saved with updates
		
	Scenario: User should be able to edit route by updating waypoint name and description
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route for editing
		When I click on edit link, edit waypoint name and description and save
		Then route is saved with updates