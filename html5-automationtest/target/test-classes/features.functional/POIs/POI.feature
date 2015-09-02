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
Scenario: User should select POIs By type for a location

	Given I am on getamap app
	When I login as registered user
	And I search for location
	And from Places I selected POI Castles and Attractions
	Then I should list of clustered POIs for that location    

@regression
Scenario: User should be able to view a POI

	Given I am on getamap app
	When I login as registered user
	And from Places I select POI Castles and Attractions
	And click on a POI and select more info
	Then I should see a right side panel view with details

@wip
Scenario: User should be able to pin POI to map and see when logs back to the applciation

	Given I am on getamap app
	When I login as registered user
	And from Places I select POI Castles and Attractions
	And click on a POI and select more info
	And select pin POI to map
	Then I should see POI on map after logging into the application as registered user
@wip
Scenario: User should be able to unpin POI from map 

	Given I am on getamap app
	When I login as registered user
	And from Places I select POI Castles and Attractions
	And click on a POI and select more info
	And unpin POI from map
	Then POI should be removed from map and when user refreshes POI shouldn't br visible


	
	
	
	
	

	
	




		


