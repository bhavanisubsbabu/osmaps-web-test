@testDisabled
Feature: Verify if "Snap" functionality is Disabled

	Scenario: Check whether "Snap" is NOT available during route creation
		Given I log into OS maps as a guest/registered/subscribed user
		When I switch to 'National Park pathways' map type
		And I open 'Create custom route'
		Then 'Snap' button is NOT visible
		
	Scenario: Check whether "Snap" description is NOT available in 'Create custom route' help topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I click 'Create custom route' help topic
		Then I should NOT be able to see 'Snap' description in content