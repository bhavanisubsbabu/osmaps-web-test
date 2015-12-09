@testDisabled
Feature: Verify if 'Feedback' is disabled in the system

	Scenario: Check whether 'Feedback' in burger menu is disabled
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Feedback' in left burger menu should NOT be visible
