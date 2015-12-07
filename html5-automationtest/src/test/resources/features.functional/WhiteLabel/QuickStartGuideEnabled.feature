
Feature: Verify if user is able to see "Quick Start Guide" functionality
	
	Scenario: Check whether "Quick Start Guide" is available in left slider menu
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Quick Start Guide' in left burger menu should be visible
