Feature: User shouldn't be timed out after 1 hr waiting

	Scenario: User should be able to save route with 1 hr pause

		Given I am on getamap app
		When I login as registered user
		Then I should be able to create route with some delay
		And Save the route. 