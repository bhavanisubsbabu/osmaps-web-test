
Feature: Verify if system administrator is able to define whether 'Preferences' are enabled in the system

	Scenario: Check whether 'Preferences' are enabled in the system
		Given I log into OS maps as a guest/registered/subscribed user
		When I open User's panel
		Then I see 'Preferences' link 
		
	Scenario: Check whether user is able to access and modify 'Preferences'
		Given I log into OS maps as a guest/registered/subscribed user
		When I open User's panel
		And I see 'Preferences' link
		And I open 'Preferences' menu
		Then I should see 'Preferences' panel with all settings