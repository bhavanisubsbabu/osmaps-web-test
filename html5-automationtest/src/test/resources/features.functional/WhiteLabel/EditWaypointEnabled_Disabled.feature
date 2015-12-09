
Feature: System administrator is able to select if the title and description of the first 'Start' waypoint on a route is editable

@testEnabled
	Scenario: Check whether 'Start' waypoint is editable
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I create and open 'Start' waypoint
		Then I should see 'Clear' and 'Edit' in waypoint popup
		
@testDisabled
	Scenario: Check whether 'Start' waypoint is NOT editable
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I create and open 'Start' waypoint
		Then I should NOT see 'Clear' and 'Edit' in waypoint popup
		