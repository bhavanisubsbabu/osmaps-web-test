Feature: Print zoom maps
As a getamap  user
I order to navigate to route
I want to print zoom maps

# Print zoom map as guest

#####functionality coverage###### 
###Print zoom maps all layers
###All user can print zoom maps
###guest user limitations
###Registered user limiations
###Print all types of routes
## Print zoom maps to landscape or portrait
##Print POIS on map





Scenario: Print zoom maps as guest user
Given I am on getamap app as guest user
When I am on print panel
Then I should be able  print zoom maps at any zoom layer

Scenario: Print preview
	Given I am on getamap app as guest user
	When I open print panel
	Then I should be able to preview the map
	
Scenario: Print preview
	Given I am on getamap app as guest user
	When I open print panel
	Then I should be able to print zoom maps to landscape or portrait


Scenario: Print zoom maps as guest user with POI on map
	Given I am on getamap app as guest user
	When I view POIs on map for any category
	And I open Print panel
	Then I should be able  print zoom maps with POIs on it.

Scenario: Print zoom map as guest with public route on it	
	Given I am on getamap app as guest user
	When I discover public routes 
	And I open Print panel
	Then I should be able to print zoom maps with Routes in it
	
Scenario: Print zoom map with guest limitations
	Given I am on getamap app as guest user
	When I open print panel
	Then I should be able to print on A4 only
	
Scenario: Guest user to print A-B routing on zoom maps



#Print zoom maps as registered user

Scenario: Reg user to print zoom maps at any given layer from 12 layers

Scenario: Reg user to print public/Authored Routes on zoom map stack

Scenario: Reg user to print A-B routing on zoom map stack

Scenario: Reg user can zoom in zoom out on printable area to include complete route to print

Scenario: Reg user can print on A4 

Scenario: Reg user cannot print on A3, should give a message to subscriber to use this feature

Scenario: REg user can print on landscape mode

Scenario: Reg user can preview before printing

Scenario : Reg user cannot print on landscape mode

Scenario: Reg user can include route card when printing any route

Scenario: Reg user cannot select 1:25k or 1:50 maps 



#### Print zoom maps as subscriber

Scenario: Subscriber user to print zoom maps at any given layer from 12 layers

Scenario: Subscriber user to print public/Authored Routes on zoom map stack

Scenario: Subscriber user to print A-B routing on zoom map stack

Scenario: Subscriber user can zoom in zoom out on printable area to include complete route to print

Scenario: Subscriber  user can print on A4 

Scenario: Subscriber user can print on A3

Scenario: Subscriber user can print on landscape mode

Scenario: Subscriber user can preview before printing

Scenario : Subscriber user can print on landscape mode

Scenario: Subscriber user can include route card when printing any route
Scenario: Subscriber to print POIs on zoom map





	
	

	
	


