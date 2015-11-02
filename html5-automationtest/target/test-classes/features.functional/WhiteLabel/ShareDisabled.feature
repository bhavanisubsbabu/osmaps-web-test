@testDisabled
Feature: Verify if "Share" functionality is disabled

	Scenario: Check whether "Share" functionality is NOT available in 'Discovered Routes'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		And I select one of available routes
		And I click 'View route' link on route pin
		Then 'Share' button should NOT be visible
		
	Scenario: Check whether "Share" functionality is NOT available in 'My Routes'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		Then 'Share' button should NOT be visible
	