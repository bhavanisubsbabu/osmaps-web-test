@test
Feature: Verify a user is able to see "Directions" functionality and this functionality should work as expected

	Scenario: Check whether "Directions" is available on top bar menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Directions' tab in top menu
		Then 'Directions' should work as expected
	
	Scenario: Check whether "Directions" is available in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		And I click 'Directions' button in burger menu
		Then 'Directions' should work as expected

	Scenario: Check whether "Get Directions" is available in 'Routes' top menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Get Directions' button in left menu
		Then 'Get Directions' should work as expected
		
	Scenario: Check whether "Get Directions" is available in 'Routes' side menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		And I click 'Routes' button in burger menu
		And I click 'Get Directions' button in left menu
		Then 'Get Directions' should work as expected

	Scenario Outline: Check whether "Get me here" link is available on "Dropped Pin" tool
		Given I log into OS maps as a guest/registered/subscribed user
		When I search "<search-area>"
		And I click 'Get me here' link on dropped pin
		Then 'Get me here' link should work as expected
			Examples:
			|search-area|
			|London|

	Scenario: Check whether "Get me here" link is available within "Discover Routes"
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		And I select one of available routes
		And I click 'Get me here' link on route pin
		Then 'Get me here' link should work as expected

	Scenario: Check whether "Get me here" link is available within "My routes"
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'Get me here' link on route pin
		Then 'Get me here' link should work as expected

	Scenario: Check whether "Get Directions" description is available in Help Menu in "The Routes menu" topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should be able to see 'Get Directions' description
	
	Scenario: Check whether "The directions menu" topic is available in Help Menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should be able to see 'The Directions menu' topic
		