@testEnabled
Feature: Verify if 'Feedback' is enabled in the system

	Scenario: Check whether 'Feedback' in burger menu is enabled
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Feedback' in left burger menu should be visible
