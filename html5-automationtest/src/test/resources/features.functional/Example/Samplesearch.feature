Feature: search location

Scenario: User should be able to search for a location

         Given I am on getamap app
		 When I login as registered user
		 And enter a location in search box 
		 When I click on search icon
		 Then the app should drop a pin on the map
