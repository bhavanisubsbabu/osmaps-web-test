Feature: Print zoom maps
As a getamap  subscriber user
In order to navigate to route
I want to print map to scale 1:25 or 1:50K map


##Note: Thest Test cases are executed manually as required to print maps.

Scenario: Print to scale 1:25k 
	Given I am on getamap app as subsciber user
	When I am on print panel
	Then I should be able  print 1:25k maps

Scenario: Print to scale 1:50k 
	Given I am on getamap app as subsciber user
	When I am on print panel
	Then I should be able  print 1:25k maps

Scenario: Print zoom map 25k 
	Given I am on the getamap app as subscriber user
	When I am on the print panel
	Then I should be able to zoom in on 2k map
	And I should be able  print 1:25k maps
	
Scenario: Print zoom map 50k 
	Given I am on the getamap app as subscriber user
	When I am on the print panel
	Then I should be able to zoom in on 50k map
	And I should be able  print 1:50K maps
	
Scenario: Subscriber Print map on A3 paper

Scenario: Subscriber Print map on A4

Scenario: Subscriber Print map as landscape

Scenario: Subscriber to prrint map as Aerial

########print routes on scale maps

Scenario:  Subscriber to print public/private/authored routes on 1:25k maps

Scenario:  Subscriber to print public/private/authored routes on 1:50k maps

Scenario: subscriber to print A-B routing on 1:25k map

Scenario: subcriber to print A-B routing on 1:50k maps

Scenario: subscriber to plot a route and print on 1:25k map


## Print POIs
Scenario: subscriber to print POIS on 1:25K map
Scenario: subcriber to print POIs on 1:50K maps

	
	
	



