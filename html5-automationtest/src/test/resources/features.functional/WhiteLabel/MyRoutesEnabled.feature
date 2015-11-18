@testEnabled
Feature: Verify if system administrator is able to define whether 'My Routes' are enabled in the system

	Scenario: Check whether 'My Routes' are enabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		Then I should see 'My Routes' in left menu
		
	Scenario: Check whether 'My Routes' is available in 'My Routes' panel
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		Then 'My Routes' should be present in 'My Routes' panel
@test
	Scenario: Check whether 'Who can see my route' is present in 'Create Custom Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Create custom route'
		And I plot new route
		And I click 'Save' route
		Then I should see 'Who can see your route' option
		
	Scenario: Check whether 'My Routes' description is present in 'Help' topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should see 'My Routes' description in content