@testDisabled
Feature: Verify if "Discover Routes" functionality is Disable

	Scenario: Check whether "Discover Routes" is unavailable 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'Discover Routes' should not be visible
	
	Scenario: Check whether "Discovering routes" topic is unavailable in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should not be able to see 'Discovering routes' topic
		
	Scenario: Check whether "Discover Routes" description is unavailable in "The Routes menu" topic in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should not be able to see 'Discover Routes' description