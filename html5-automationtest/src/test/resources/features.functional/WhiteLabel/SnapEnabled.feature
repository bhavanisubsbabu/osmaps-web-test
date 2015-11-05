@testEnabled
Feature: Verify if "Snap" functionality is Enabled and it works as expected

	Scenario: Check whether "Snap" functionality is available
		Given I log into OS maps as a guest/registered/subscribed user
#		When 'Snap' functionality is enabled
		When I switch to 'National Park pathways' map type
		And I zoom in map on National Park location
		And I open 'Create custom route'
		Then 'Snap' button should be visible and enabled
		
	Scenario: Check whether "Snap" description is available in 'Create custom route' help topic
		Given I log into OS maps as a guest/registered/subscribed user
#		And 'Snap' function is enabled
		When I open 'Help'
		And I click 'Create custom route' help topic
		Then I should see 'Snap' description in content