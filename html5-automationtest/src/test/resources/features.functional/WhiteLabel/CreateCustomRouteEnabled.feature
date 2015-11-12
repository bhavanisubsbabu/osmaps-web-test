@testEnabled
Feature: Verify if "Create Custom Route" functionality is Enabled and it works as expected

	Scenario: Check whether "Create Custom Routes" is available 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'Create Custom Route' should work as expected
	
	Scenario: Check whether "Create" is available in My Routes
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		And I click 'My Routes' in left menu
		Then 'Create' should work as expected
	
	Scenario: Check whether "Create" is available in Discover Routes
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		And I click 'Discover Routes' in left menu
		Then 'Create' should work as expected
	
	Scenario Outline: Check whether "Create route" is available on "Dropped Pin" tool
		Given I log into OS maps as a guest/registered/subscribed user
		When I search "<search-area>"	
		And I click 'More info' on dropped pin
		Then 'Create route' should work as expected
			Examples:
			|search-area|
			|London|
			
	Scenario: Check whether "Create a custom route" topic is available in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should be able to see 'Create a custom route' topic
		
	Scenario: Check whether "Create Custom Route" description is available in "The Routes menu" topic in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should be able to see 'Create Custom Route' description