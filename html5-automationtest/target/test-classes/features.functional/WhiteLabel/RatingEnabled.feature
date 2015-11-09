@testEnabled
Feature: Verify if "Rating" functionality is Enabled and it works as expected

	Scenario: Check whether "Rating" functionality is available in 'Discover Routes'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		Then 'Rating' should be visible on 'Discover Routes' panel
		
	Scenario: Check whether "Rating" functionality is available in 'My Routes'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		Then 'Rating' should be visible in 'My Routes' panel
		
	Scenario: Check whether "Rating" functionality is available in 'Discover Routes' popup
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		And I select one of available routes
		Then 'Rating' should be visible in popup
	
	Scenario: Check whether "Rating" functionality is available in 'My Routes' popup
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		Then 'Rating' should be visible in popup
	
	Scenario: Check whether "Rating" functionality is available in 'Discover Routes' details panel 
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		And I select one of available routes
		And I click 'View route' link on route pin
		Then 'Rating' should be visible in 'Route Details' panel
		
	Scenario: Check whether "Rating" functionality is available in 'My Routes' details panel 
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		Then 'Rating' should be visible in 'Route Details' panel
		
	Scenario: Check whether "Sort by Rating" is available in 'Discover Routes'
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'Discover Routes' in left menu
		Then 'Sort by Rating' should be possible in 'Discover Routes' panel
	
	Scenario: Check whether "Rating" description is available in 'Discovering routes' help topic
		Given I log into OS maps as a guest/registered/subscribed user
		When I open 'Help'
		And I click 'Discovering routes' help topic
		Then I should see 'Rating' description in content
		