@regression
Feature: Discover route
  As a user 
  I order to plan my journy
  I should be able to discover existing routes

@demo
	Scenario: Discover routes as  guest
	    Given I am on getamap app
	    When I login as guest user
	    And I click Discover under routes
	    Then I should see available public routes in that map view area

	Scenario Outline: Discover routes as registered user & 
	    Given I am on getamap app
	    When I login as "<user>" and "<pwd>"
	    And I click Discover under routes
	    Then I should see available public routes in that map view area
	
	  Examples:
			|user|pwd|
			|newaccount@reg.com|123456|
			|automationtestsub@ite.com|123456|

	Scenario: Application should prompt guest user to subscribe while viewing authored route
		
		Given I am on getamap app
	    When I login as guest user
	    And I select a authored route
	    And click on view route 
	    
	Scenario: Application should prompt registered user to subscribe while viewing authored route
		
		Given I am on getamap app
	    When I login as registered user
	    And I select a authored route
	    And click on view route 
	    Then app should display upsell screen
    
	Scenario: Subscribed user should be able to view authored route
		
		Given I am on getamap app
	    When I login as subscriber user
	    And I select a authored route
	    And click on view route 
	    Then app should display authored route on map
	    
	    
	    