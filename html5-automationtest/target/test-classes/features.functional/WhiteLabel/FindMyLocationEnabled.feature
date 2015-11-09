@testEnabled
Feature: Verify if "Find My Location" functionality is Enabled and it works as expected

	Scenario: Check whether "Find My Location" functionality is available
		Given I log into OS maps as a guest/registered/subscribed user
		When 'Find My Location' button is enabled
		Then 'Find My Location' works as expected