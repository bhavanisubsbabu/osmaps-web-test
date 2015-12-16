@test
Feature: Verify if user is able to see "Elevation" functionality

	Scenario: Check if 'Elevation' is available in 'Route Details'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		Then I should see and open 'Elevation' on 'Route Details'

	Scenario: Check if 'Elevation' is available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I plot new route
		Then I should see 'Elevation' graph in left panel
	
	Scenario: Check if 'Elevation' is available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		Then I should see 'Elevation' graph in left panel
	
	Scenario: Check if 'Elevation' is available in 'Directions'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open A-B Routing window
		And I enter start location
		And I enter finish location
		And I click on GetDirections button
		Then I should be able to see and click 'Elevations' button
		And I should see 'Elevation' graph in 'Directions' panel