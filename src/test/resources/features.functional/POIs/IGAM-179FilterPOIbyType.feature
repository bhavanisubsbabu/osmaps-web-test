Feature: Map features
 In order to choose and display POIs by one or more categories
	As a getamap user 
	I should be able to filter POI by Type


@regression
Scenario: Verify POI Categories displayed on POI Panel(guest)
	Given I am on getamap app
	When I login as guest user
	And I open Map features menu
	Then I should be able to see the POI Categories


@regression
Scenario: Verify POI Categories displayed on POI Panel(registered)
	Given I am on getamap app
	When I login as registered user
	And I open Map features menu
	Then I should be able to see the POI Categories


# @TODO:JT disabled failing test - needs fixing!

@regression
Scenario: Verify POI Categories displayed on POI Panel(subscriber)
	Given I am on getamap app
	When I login as subscriber user
	And I open Map features menu
	Then I should be able to see the POI Categories

@regression
Scenario Outline: Verify user able to filter POIs By type
	Given I am on getamap app
	When I login as guest user
	And  I Select POI "Castles And Attractions"
	Then I should see "<total>" POIs and clustered POIs
 Examples:
 |total|
 |17|
   
    

@manual
Scenario: Select POI Category at all zoom levels
	Given I am on the POI Category list 
	When I zoom in map
	Then I should be able to filter POI Category

@manual		
Scenario: POI side bar can be closed
	Given I am on the POI Category list 
	When I select category type
	Then I should be able to close the side bar

@manual
Scenario: Select Multiple Category
	Given Im on the POI Category list
	When I select any Category type
	And Select another Category type
	Then I should be able to see related POIs on the map

 
@manual	
Scenario: Subscriber on 125K map to select Category
	Given I am on the POI category list as subscriber user
	When I opem 125K map
	Then I should be able Filter POI Category 
@manual
Scenario: Subscriber on 150K map to select POI Category
	Given I am on the POI category list as subscriber user
	When I open 150K map
	Then I should be able to filter POI Category
@manual	
Scenario: Filter POI as registered user
	Given I am on the POI category list as registered user
	When I select any Category type
	Then I should be able to see related POIs on the map
@manual	
Scenario: Filter POI as guest user
	Given I am on the POI category list as registered user
	When I select any Category type
	Then I should be able to see related POIs on the map
@mnauall	
Scenario: Default POI category 
	Given I am on getamap app
	When I open Map features menu
	Then I should see all Category turned off by default
@manual	
Scenario: Clustered POI display
	Given I am on the getamap app
	When I open Map features menu
	And I select Skating sub category under sports
	Then I should see clustered POI with total number on it at high zoom out level
@manual
Scenario: Search location and display POIs
	Given I am on the getamap app
	When I search for London in search box
	And I open Map features menu
	And I select Skating sub category under sports
	Then I should see clustered POI with total number on it at high zoom out level
@manual	
Scenario: View POI pins in Aerial view
	Given I am on the POI category list 
	When I select any Category type
	And I change view to Aerial
	Then I should see clustered POI with total number on it
	
	
	
	
	
	

	
	




		


