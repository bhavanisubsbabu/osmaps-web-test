@wip@regression
Feature: Application should auto route between way points when subscribed user create routes in National Park pathways

	Scenario: Plot a route in national park pathways with snap enabled
	
		Given I am on getamap app
		When I login as subscriber user
		And I select National Park Pathways from mapstack
		And I select create custom route from routes
		And I zoom-in map till snap is enabled and plot a route
		Then app should auto route nearest pathways from the 2 locations   


	
	
	
	
	
	