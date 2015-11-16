@testEnabled
Feature: Verify if system administrator is able to define whether 'Import GPX' is enabled in the system

	Scenario: Check whether 'Import GPX' is enabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		When I click 'Import GPX' button
		Then I should see 'Import GPX' panel
		
	Scenario: Check whether 'Import GPX' description is present in 'The Routes menu' help topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should be able to see 'Import GPX' description