@testDisabled
Feature: Verify if user is NOT able to see "Directions" functionality

	Scenario: Check whether "Directions" is NOT available on top bar menu
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'Directions' should NOT be visible

	Scenario: Check whether "Directions" is available NOT in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Directions' in left burger menu should NOT be visible

	Scenario: Check whether "Get Directions" is NOT available in 'Routes' top menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		Then 'Get Directions' should NOT be visible
		
	Scenario: Check whether "Get Directions" is NOT available in 'Routes' side menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		And I click 'Routes' button in burger menu
		Then 'Get Directions' should NOT be visible

	Scenario Outline: Check whether "Get me here" link is NOT available on "Dropped Pin" tool
		Given I log into OS maps as a guest/registered/subscribed user
		When I search "<search-area>"
		Then 'Get me here' link should NOT be visible
			Examples:
			|search-area|
			|London|

	Scenario: Check whether "Get me here" link is available NOT within "Discover Routes"
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		And I select one of available routes
		Then 'Get me here' link should NOT be visible

	Scenario: Check whether "Get me here" link is NOT available within "My routes"
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		Then 'Get me here' link should NOT be visible

	Scenario: Check whether "Get Directions" description is NOT available in Help Menu in "The Routes menu" topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should NOT be able to see 'Get Directions' description
	
	Scenario: Check whether "The directions menu" topic is NOT available in Help Menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should NOT be able to see 'The Directions menu' topic
		