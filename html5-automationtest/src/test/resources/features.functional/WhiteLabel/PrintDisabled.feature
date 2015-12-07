
Feature: Verify if user is NOT able to see "Print" functionality

	Scenario: Check whether "Print" is NOT available in left burger menu and on toolbar
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Print' in left burger menu should NOT be visible
		And 'Print' button on toolbar should NOT be visible

# To do when removed from help		
#	Scenario: Check whether "Print" is NOT mentioned is 'Help'
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Help'
#		And I click 'The Directions menu' topic
#		Then I should NOT be able to see Print mention in description 
	