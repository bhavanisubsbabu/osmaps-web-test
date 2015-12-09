@testDisabled
Feature: Verify if 'Help and Information' is disabled in the system

	Scenario: Check whether 'Help and Information' in burger menu is disabled
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		Then 'Help and Information' in left burger menu should NOT be visible
