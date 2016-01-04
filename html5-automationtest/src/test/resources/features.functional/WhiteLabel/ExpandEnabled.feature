@testEnabled
Feature: Verify if system administrator is able to define whether 'Expand' is enabled in the system

	Scenario: Check whether 'Expand' button is available on toolbar
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'Expand' button should be visible

#	For 'DofE' Help is disabled by default so no need to check it
#	Scenario: Check whether 'Expand' description is available in 'Create custom route' help topic
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Help'
#		And I click 'Create custom route' help topic
#		Then I should see 'Expand' description in content