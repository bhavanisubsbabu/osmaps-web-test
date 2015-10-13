@regression
Feature: Logged in user should be able to export a route

	Scenario: A logged in user should be able to export route
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to my routes to select a route
		And I click on export button
		Then route should be exported as gpx file