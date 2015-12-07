@testEnabled
Feature: Verify if alternative 'Import GPX' functionality on Create/Edit Route is enabled

	Scenario: Check whether alternative 'Import GPX' functionality is available in 'Create Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I click 'Import GPX' button on left panel
		Then I should see 'Import warning' message
		And I should see 'Import GPX' panel
		
	Scenario: Check whether alternative 'Import GPX' functionality is available in 'Edit Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to My Routes
		And I click Edit route in 'My Routes'
		And I click 'Import GPX' button on left panel
		Then I should see 'Import warning' message
		And I should see 'Import GPX' panel