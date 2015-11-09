Feature: System administrator is able to define what map types are available in the system.
### MAPS_AVAILABLE: [Window_1_Btn_ZoomMap, Window_1_Btn_BingAerial, Window_1_Btn_NationalParks, Window_1_Btn_Leisure50k] ###

### Detailed 'Map changes' tests are already covered by 'Mapstacks' feature in OS tests

@SingleMap
	Scenario: Check whether only one map type is available-'Change Map Type' functionality is disabled
		Given I log into OS maps as a guest/registered/subscribed user
		Then 'Change map' button should NOT be available
		
@SingleMap
	Scenario: Check whether 'Initial Map Type' in 'Preferences' is NOT available
		Given I log into OS maps as a guest/registered/subscribed user
		When I open User's panel
		And I open 'Preferences' menu
		Then 'Initial Map Type' selection should NOT be available
			
@TwoMaps
	Scenario Outline: Check whether two types of map are available
		Given I log into OS maps as a guest/registered/subscribed user
		When I click 'Change map' button
		Then I should see "<MapTypes>" maps available
			Examples:
    		| MapTypes |
    		| 'Standard' + 'Aerial' |
#	TO DO: when configuration change mechanism will be ready    		
#    		| 'Standard' + 'Standard+OS Leisure Maps' |
#    		| 'Standard' + 'National Park pathways' |

@TwoMaps
	Scenario Outline: Check whether 'Initial Map Type' in 'Preferences' is available
		Given I log into OS maps as a guest/registered/subscribed user
		When I open User's panel
		And I open 'Preferences' menu
		Then 'Initial Map Type' should contain "<MapTypes>" selection  
			Examples:
    		| MapTypes |
    		| 'Standard' + 'Aerial' |
#	TO DO: when configuration change mechanism will be ready     		
#   		| 'Standard' + 'Standard+OS Leisure Maps' |

		