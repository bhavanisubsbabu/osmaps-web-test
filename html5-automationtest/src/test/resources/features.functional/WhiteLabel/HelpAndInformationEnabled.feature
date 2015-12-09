@testEnabled
Feature: Verify if 'Help and Information' is enabled in the system

	Scenario: Check whether 'Help and Information' in burger menu is enabled
		Given I log into OS maps as a guest/registered/subscribed user
		When I select left slider menu
		And I click 'Help and Information'
		Then I should see 'Information' panel with all six items available 
