@testDisabled
Feature: Verify if alternative 'Import GPX' functionality on Create/Edit Route is disabled

	Scenario: Check whether alternative 'Import GPX' functionality is NOT available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		Then alternative 'Import GPX' button should NOT be visible
		
	Scenario: Check whether alternative 'Import GPX' functionality is NOT available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		Then alternative 'Import GPX' button should NOT be visible