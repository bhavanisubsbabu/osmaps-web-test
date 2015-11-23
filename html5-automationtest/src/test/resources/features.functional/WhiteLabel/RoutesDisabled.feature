
Feature: Verify if System will hide the 'Routes' button if all routes functionalities have been disabled

	Scenario: Check whether 'Routes' button is disabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then I should NOT see 'Routes' button in burger menu and in top bar
		
	Scenario: Check whether 'The Routes menu' is NOT available in 'Help'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		Then I should NOT be able to see 'The Routes menu' topic
		 