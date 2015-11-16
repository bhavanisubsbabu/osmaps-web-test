@testDisabled
Feature: Verify if user is NOT able to see 'My Routes' functionality

	Scenario: Check whether 'My Routes' are disabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I open routes menu
		Then 'My Routes' should NOT be present

	Scenario: Check whether 'Save' button is NOT present in 'Get Direction' functionality
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Directions' tab in top menu
		And I enter start location
		And I enter finish location
		And I click on GetDirections button
		Then 'Save' button should NOT be present
		
	Scenario: Check whether 'Who can see my route' is NOT present in 'Create Custom Route'
		Given I log into OS maps as a guest/registered/subscribed user
		When I plot new route
#		When I open 'Create custom route'
#		And I plot new route
		And I click 'Save' route
		Then I should NOT see 'Who can see your route' option
		
	Scenario: Check whether 'My Routes' description is NOT present in 'Help' topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should NOT be able to see 'My Routes' description

### TO DO:		
#	Scenario: Check whether 'Save' message is changed in 'Create Custom Route'
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Create custom route'
#		And I plot new route
#		And I click 'Save' route
#		And I fill all information and save the route
#		Then 'Save' message should NOT state that route was saved in 'My Routes' 