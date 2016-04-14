@regression
Feature: A guest user should be able to subscribe for a product

	Scenario: guest user should be able to subscribe for one month subscription
	
		Given I am on getamap app
		When I click on Sign up button
		And click on Register as Subscriber
		And I select one month subscription
		And complete registration process
		And complete subscription process
		Then I am logged in as subscribed user


	Scenario: guest user should be able to subscribe for 1 year subscription
	
		Given I am on getamap app
		When I click on Sign up button
		And click on Register as Subscriber
		And I select one year subscription
		And complete registration process
		And complete subscription process
		Then I am logged in as subscribed user
		
	Scenario: guest user should be able to cancel and gest back to application as registered user
	
		Given I am on getamap app
		When I click on Sign up button
		And click on Register as Subscriber
		And I select one year subscription
		And complete registration process
		And click on cancel subscription
		Then I am taken back to osmaps application and logged in as registered user
