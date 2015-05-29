Feature: In order to choose and display POIs by one or more categories
	As a getamap user 
	I should be able to filter POI by Type


Scenario: navigate to POI in getamap
	Given I am on getamap app
	When I open Map features menu
	Then I should be able to see the POI Categories

Scenario: Category list
	Given I am on getamap app
	When I open Map features menu
	Then I should be able to see all available POI Category list

		
Scenario: POI side bar can be closed
	Given I am on the POI Category list 
	When I select category type
	Then I should be able to close the side bar

Scenario: Select Multiple Category
	Given Im on the POI Category list
	When I select any Category type
	And Select another Category type
	Then I should be able to see related POIs on the map
	
Scenario: Select POI Category at all zoom levels
	Given I am on the POI Category list 
	When I zoom in map
	Then I should be able to filter POI Category 
	
Scenario: Subscriber on 125K map to select Category
	Given I am on the POI category list as subscriber user
	When I opem 125K map
	Then I should be able Filter POI Category 

Scenario: Subscriber on 150K map to select POI Category
	Given I am on the POI category list as subscriber user
	When I open 150K map
	Then I should be able to filter POI Category
	
Scenario: Filter POI as registered user
	Given I am on the POI category list as registered user
	When I select any Category type
	Then I should be able to see related POIs on the map
	
Scenario: Filter POI as guest user
	Given I am on the POI category list as registered user
	When I select any Category type
	Then I should be able to see related POIs on the map
	
Scenario: Default POI category 
	Given I am on getamap app
	When I open Map features menu
	Then I should see all Category turned off by default
	
Scenario: Clustered POI display
	Given I am on the getamap app
	When I open Map features menu
	And I select Skating sub category under sports
	Then I should see clustered POI with total number on it at high zoom out level

Scenario: Search location and display POIs
	Given I am on the getamap app
	When I search for London in search box
	And I open Map features menu
	And I select Skating sub category under sports
	Then I should see clustered POI with total number on it at high zoom out level
	
Scenario: View POI pins in Aerial view
	Given I am on the POI category list 
	When I select any Category type
	And I change view to Aerial
	Then I should see clustered POI with total number on it
	
	
	
	
	
	

	
	




		


