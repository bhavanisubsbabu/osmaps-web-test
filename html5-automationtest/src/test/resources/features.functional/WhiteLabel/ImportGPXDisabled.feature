@test
Feature: Verify if system administrator is able to define whether 'Import GPX' is disabled in the system

	Scenario: Check whether 'Import GPX' is disabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'Import GPX' button should NOT be present
		
	Scenario: Check whether 'Import GPX' description is NOT present in 'The Routes menu' help topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should NOT be able to see 'Import GPX' description