
Feature: Verify if 'Single User Mode' is enabled

	Scenario: Check whether 'Single User Mode' is enabled in the system
		Given I open OS maps in SingleUserMode
		Then 'Sign in' button should be replaced by 'Exit' button 
		
	Scenario: Check whether 'My Routes' are disabled in 'Routes' menu in Single User Mode
		Given I open OS maps in SingleUserMode 
		When I open routes menu
		Then 'My Routes' should NOT be present
		
	Scenario: Check whether 'Save' button is NOT present in 'Get Direction' functionality in 'Single User Mode'
		Given I open OS maps in SingleUserMode
		When I select 'Directions' tab in top menu
		And I enter start location
		And I enter finish location
		And I click on GetDirections button
		Then 'Save' button should NOT be present
		
	Scenario: Check whether 'Print' message is changed in 'Single User Mode'
		Given I open OS maps in SingleUserMode
		When I click on 'Print' button
		Then additional 'Print' text is not displayed
		
	Scenario: Check whether 'My Routes' description is NOT present in 'Help' topic in 'Single User Mode'
		Given I open OS maps in SingleUserMode
		When I open 'Help'
		And I select 'The Routes menu' topic
		Then I should NOT be able to see 'My Routes' description

	Scenario: Check whether 'Who can see my route' is NOT present in 'Single User Mode'
		Given I open OS maps in SingleUserMode
		When I plot new route
		And I click 'Save' route
		Then I should NOT see 'Who can see your route' option

	Scenario: Check whether there is a monit for unsaved changes when clicking 'Exit' button in 'Single User Mode'
		Given I open OS maps in SingleUserMode
		When I plot new route
		And I click 'Exit' button
		Then there should be a monit for unsaved changes

### TO DO ### 
#	Scenario: Check whether 'Save route' message is changed in 'Single User Mode'
#		Given 
#		When 
#		Then 
		 