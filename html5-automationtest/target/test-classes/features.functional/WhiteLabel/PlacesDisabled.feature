@testDisabled
Feature: Verify if user is NOT able to see "Places" functionality

	Scenario: Check whether "Places" is NOT available on top bar menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is disabled
		Then 'Places' should NOT be visible
	
	Scenario: Check whether "Places" is available NOT in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is disabled
		When I select left slider menu
		Then 'Places' in left burger menu should NOT be visible

	Scenario: Check whether "The Places menu" topic is NOT available in Help Menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is disabled
		When I open 'Help'
		Then I should NOT be able to see 'The Places menu' topic
		