@testEnabled
Feature: Verify if user is able to see "Weather" functionality

	Scenario: Check if 'Weather' is available in 'Route Details'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		Then I should be able to see and open 'Weather' icon in 'Route Details'

	Scenario: Check if 'Weather' is available in 'Places'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Places' tab in top menu
		Then 'Weather' checkbox in 'Places' panel should be present
		And I should be able to select 'Weather' checkbox
	
	Scenario Outline: Check if 'Weather' is available in dropped pin's 'More info'
		Given I log into OS maps as a guest/registered/subscribed user
		When I search "<search-area>"
		And I click 'More info' on dropped pin
		Then I should be able to see and open 'Weather' icon in 'Dropped Pin' panel
			Examples:
			|search-area|
			|London|

	Scenario: Check if 'Weather' is available in POI's 'More info'
		Given I log into OS maps as a guest/registered/subscribed user
		When from Places I select POI Castles and Attractions
		And click on a POI and select more info
		Then I should be able to see and open 'Weather' icon in 'POI' panel
		
	Scenario: Check if 'Weather' is available in 'The Places menu' help description
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I click 'The Places menu' topic
		Then I should see 'Weather' description
		