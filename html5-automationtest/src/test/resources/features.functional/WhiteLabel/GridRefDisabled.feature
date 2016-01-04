@testDisabled
Feature: Verify if user is NOT able to see 'GridRef' functionality

	Scenario: Check whether 'GridRef' is NOT available on toolbar
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'GridRef' button should NOT be visible

#	For 'DofE' Help is disabled by default so no need to check it
#	Scenario: Check whether 'GridRef' description is NOT available in 'Help' menu
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Help'
#		And I click 'Create custom route' help topic
#		Then I should NOT see 'GridRef' description in content	