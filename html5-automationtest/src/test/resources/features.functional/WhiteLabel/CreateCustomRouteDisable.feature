@testDisable
Feature: Verify if "Create Custom Route" functionality is Disable

	Scenario: Check whether "Create Custom Routes" is unavailable 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'Create Custom Route' should not be visible
	
	Scenario: Check whether "Create" is unavailable in My Routes
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		And I click 'My Routes' in left menu
		Then 'Create' should not be visible
	
	Scenario: Check whether "Create" is unavailable in Discover Routes
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		And I click 'Discover Routes' in left menu
		Then 'Create' should not be visible
	
	Scenario Outline: Check whether "Create route" is unavailable on "Dropped Pin" tool
		Given I log into OS maps as a guest/registered/subscribed user
		When I search "<search-area>"	
		And I click 'More info' on dropped pin
		Then 'Create route' should not be visible
			Examples:
			|search-area|
			|London|
			
	Scenario: Check whether "Create a custom route" topic is unavailable in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should not be able to see 'Create a custom route' topic
		
	Scenario: Check whether "Create Custom Route" description is unavailable in "The Routes menu" topic in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should not be able to see 'Create Custom Route' description