
Feature: System administrator is able to define whether 'Search for Location' is disabled in the system

	Scenario: Check if 'Search for Location' is NOT visible in the top bar
		Given I log into OS maps as a guest/registered/subscribed user
		Then I should NOT see 'Search for Location' search box in top bar

#	Scenario: Check if 'Search for Location' is visible in the 'Preferences'
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I open 'Preferences' menu 
#		Then I should see 'Search for Location' search box in 'Preferences'
		
#	Scenario: Check if 'Search for Location' is visible in the 'Directions'
#		Given I log into OS maps as a guest/registered/subscribed user
#		When I select 'Directions' tab in top menu
#		Then I should see 'Search for Location' search box in 'Directions'