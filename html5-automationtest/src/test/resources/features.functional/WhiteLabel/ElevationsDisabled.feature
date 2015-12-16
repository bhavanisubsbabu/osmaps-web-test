@test
Feature: Verify if user is NOT able to see "Elevation" functionality

	Scenario: Check if 'Elevation' is NOT available in 'Route Details'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		Then I should NOT see 'Elevation' on 'Route Details'

	Scenario: Check if 'Elevation' is NOT available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I plot new route
		Then I should NOT see 'Elevation' graph in left panel
		
	Scenario: Check if 'Elevation' is NOT available in 'Create Route' expanded view
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I plot new route
		And I click 'Expand' button
		Then I should NOT see 'Elevation' graph in expanded view
	
	Scenario: Check if 'Elevation' is NOT available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		Then I should NOT see 'Elevation' graph in left panel
		
	Scenario: Check if 'Elevation' is NOT available in 'Edit Route' expanded view
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		And I click 'Expand' button
		Then I should NOT see 'Elevation' graph in expanded view
	
	Scenario: Check if 'Elevation' is NOT available in 'Directions'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open A-B Routing window
		And I enter start location
		And I enter finish location
		And I click on GetDirections button
		Then I should NOT be able to see 'Elevations' button