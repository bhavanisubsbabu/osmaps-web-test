Feature: User should be able to login to the application

	Scenario: User should be able to login to the appby entering valid user name and password details

		Given I am on getamap app
		When I login as subscriber user
		And I select National Park Pathways from mapstack
		And I select create custom route from routes
		And I zoom-in map till snap is enabled and plot a route
		Then app should auto route nearest pathways from the 2 locations 
