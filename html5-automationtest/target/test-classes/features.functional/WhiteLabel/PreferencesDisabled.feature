@testDisabled
Feature: Verify if user is NOT able to see 'Preferences' functionality

	Scenario: Check whether 'Preferences' are disabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I open User's panel
		Then I should NOT see 'Preferences' link 