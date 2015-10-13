Feature: In order to know details about POI
As a reg/subscriber user
I should be able to view POI on map

Scenario: View Clustered POI
	Given im on Map with clusttered POIs on map
	When I click on clustured POI
	Then I should be able to see clustered POI split to precise POIs on map.
	
	

Scenario: View POI summary Box
	Given I am on map with POIs on it
	When I click on a POI
	Then I should see POI summary box
	And  It should give details such as name<>,short summary<> thumbnail photo,view info link
	
Scenario: Guest user limitation for viewing POI
	Given I am on map with POIs as <Guest user>
	When I click on 
	
Scenario: View info link
	Given I am on map with POIs on it
	When I click on a POI
	And I click on view info link
	Then I should be able to see side bar with POI detail information
	
Scenario: POI side bar details
	Given I am on map with POIs on it
	When I click on a POI
	And I click on view Info
	Then I should see side bar on left hand side with deails such as Name,Photo, Long description and view more link 
	
Scenario: POI summary box behaviour
	Given I am on map with POIs on it
	When I click on a POI
	And I see POI summary box
	Then I should be able to close summary box by clicking on x button

Scenario: Close summary box by clicking on another POI
	Given I am on map with POIs on it
	When I click on a POI
	And I see POI summary box
	Then I should be able to close summary box by clicking on another POI
	
Scenario: View website on new page
	Given I am on POI side bar 
	When I click on visit website
	Then I should be able to open website in new page
	
Scenario: View website on moible
	Given I am on POI side bar 
	When I click on visit website
	Then I should be able to open website in preview page
	
Scenario: POI side bar close when click on another POI
	Given I am on POI side bar
	When I click on another POI on map
	Then POI side bard should be closed by itself
Scenario: POI side can be closed by user
	Given I am on POI side bar
	When I click on cross button on POI side bar top right
	Then POI side bar should be closed

Scenario: POI side bar to close on summary box 
	Given I am on POI  side bar
	When I close POI summary box on map
	Then I should close POI side bar itself

Scenario: View POI from diff POI categories
	Given Im on Map features
	When I select different POI category
	Then I should be able to view POI on map.
	




 