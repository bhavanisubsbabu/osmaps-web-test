
Feature: A logged in user should be able to import route

	Scenario: user should be able to import a route
	
		Given I am on getamap app
		When I login as registered user
		And I navigate to importGPX panel
		And select a gpx file and clicked on save
		Then route should be added to the application