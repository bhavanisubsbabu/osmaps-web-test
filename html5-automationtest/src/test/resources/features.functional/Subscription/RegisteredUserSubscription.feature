Feature: Registered user should be able to upgrade as subscriber


	Scenario: Registered user buying a month subscription from application
	
		Given I am on getamap app
		When I registered a user
		And selected upgrade from menu
		And I select one month subscription
		And complete subscription process
		Then I am logged in as subscribed user
		
	Scenario: Registered user should be able to subscribe for 1 year subscription
	
		Given I am on getamap app
		When I registered a user
		And selected upgrade from menu
		And I select one year subscription
		And complete subscription process
		Then I am logged in as subscribed user
		
	Scenario: Registered user should be able to cancel and gest back to application as registered user
	
		Given I am on getamap app
		When I registered a user
		And selected upgrade from menu
		And I select one year subscription
		And click on cancel subscription
		Then I am taken back to osmaps application and logged in as registered user
	