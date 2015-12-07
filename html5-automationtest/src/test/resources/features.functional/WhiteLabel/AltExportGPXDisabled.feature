@testDisabled
Feature: Verify if alternative 'Export GPX' functionality on Create/Edit Route is disabled

	Scenario: Check whether alternative 'Export GPX' functionality is NOT available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		Then alternative 'Export GPX' button should NOT be visible
		
	Scenario: Check whether alternative 'Export GPX' functionality is NOT available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		Then alternative 'Export GPX' button should NOT be visible