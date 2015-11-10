@testEnabled
Feature: Verify if "Discover Routes" functionality is Enabled and it works as expected

	Scenario: Check whether "Discover Routes" is available 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'Discover Routes' should work as expected
	
	Scenario: Check whether "Discovering routes" topic is available in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should be able to see 'Discovering routes' topic
		
	Scenario: Check whether "Discover Routes" description is available in "The Routes menu" topic in Help Menu 
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should be able to see 'Discover Routes' description