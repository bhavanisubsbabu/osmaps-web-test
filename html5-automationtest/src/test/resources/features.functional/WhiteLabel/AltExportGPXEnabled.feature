@testEnabled
Feature: Verify if alternative 'Export GPX' functionality on Create/Edit Route is enabled

	Scenario: Check whether alternative 'Export GPX' functionality is available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I click 'Export GPX' button
		Then I should see a 'Save route' message
		
	Scenario: Check whether alternative 'Export GPX' functionality is available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		Then alternative 'Export GPX' button should be visible