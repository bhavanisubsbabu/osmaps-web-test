
Feature: Verify if system administrator is able to define whether 'Places' are enabled in the system

	Scenario: Check whether "Places" are available on top bar menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is enabled
		When I select 'Places' tab in top menu
		Then 'Places' menu should appear
### This step is covered by 'POIs' feature in OS tests ###
#		And 'Places' should work as expected
	
	Scenario: Check whether "Places" is available in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is enabled
		When I select left slider menu
		And I click 'Places' button in burger menu
		Then 'Places' menu should appear
### This step is covered by 'POIs' feature in OS tests ###
#		And 'Places' should work as expected

	Scenario: Check whether "The Places menu" topic is available in Help Menu
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Places' function is enabled
		When I open 'Help'
		Then I should be able to see 'The Places menu' topic
		