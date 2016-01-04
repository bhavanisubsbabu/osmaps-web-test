@testDisabled
Feature: Verify if user is NOT able to see 'Expand' functionality

	Scenario: Check whether 'Expand' button is NOT available on toolbar
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'Expand' button should NOT be visible

#	For 'DofE' Help is disabled by default so no need to check it
#	Scenario: Check whether 'Expand' description is NOT available in 'Help' menu
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Help'
#		And I click 'Create custom route' help topic
#		Then I should NOT see 'Expand' description in content