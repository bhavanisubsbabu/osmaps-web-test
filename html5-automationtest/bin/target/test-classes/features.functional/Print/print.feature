Feature: User should be able to Print maps and routes
@regression
Scenario: A user should be able to hide and open preview window

	Given I am on getamap app
	When I login as guest user
	And I select print option from tool bar
	And click on hide link on preview window
	Then window should be minimised with show link
	When I click on show link
	Then window should be displayed
@regression
Scenario: A guest user should be able to print map

	Given I am on getamap app
	When I login as guest user
	And I select print option from tool bar
	And I click on Preview
	Then I should see preview of the map
@regression
Scenario: A registered user should be able to print map

	Given I am on getamap app
	When I login as registered user
	And I select print option from tool bar
	And I click on Preview
	Then I should see preview of the map

Scenario: A subscriber should be able to print map in 

	Given I am on getamap app
	When I login as subscriber user
	And I select print option from tool bar
	And I click on Preview
	Then I should see preview of the map

@regression,@demo
Scenario: A subscribed user should print map in A3

	Given I am on getamap app
	When I login as subscriber user
	And I select print option from tool bar
	And I select options A3, portrait and I click on Preview
	Then I should see preview of the map in A3 portrait

@regression,@demo	
Scenario: A registered user should be able to print route

	Given I am on getamap app
	When I login as registered user
	And I navigate to My Routes
	When I select a route in edit mode
	And I select print preview
	Then I should see route preview 