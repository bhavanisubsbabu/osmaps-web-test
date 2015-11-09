@testDisabled
Feature: Verify if "Find My Location" functionality is Disabled

	Scenario: Check whether "Find My Location" functionality is NOT available
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'Find My Location' button is NOT visible