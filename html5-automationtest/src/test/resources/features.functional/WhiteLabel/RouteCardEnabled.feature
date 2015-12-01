@testEnabled
Feature: Verify if DofE 'Route Card' for selected route is created

	Scenario: Check if DofE 'Route Card' is created
		Given I log into OS maps as a guest/registered/subscribed user
		When I select 'Routes' tab in top menu
		And I click 'My Routes' in left menu
		And I select one of my created routes
		And I click 'View route' link on route pin
		And I click 'Route Card' button in top bar
		Then I should see a 'Route Card' for selected route created

	Scenario: Check if DofE 'Route Card' is editable
		Given I log into OS maps as a guest/registered/subscribed user
		When I navigate to my routes to select a route
		And I click 'Route Card' button in top bar
		Then I should be able to edit editable fields on 'Route Card' 
		