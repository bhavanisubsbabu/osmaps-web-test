
Feature: Verify if user is NOT able to see "Quick Start Guide" functionality
	
	Scenario: Check whether "Quick Start Guide" is NOT available in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Quick Start Guide' in left burger menu should NOT be visible
