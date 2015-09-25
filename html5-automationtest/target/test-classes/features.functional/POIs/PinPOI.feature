Feature: Pin a POI
As a user 
In order to show a POI on map
I should be able pin a POI



Scenario: subscriber to pin a POI to persist after re-login
Given I am on getamap app
When I login as subscriber user
And I Select POI "Castles And Attractions"
And I pin a POI
And I login as subscriber user
Then I should see pinned POI on the map.


Scenario: Subscriber to pin a POI to persist after turn off POI Category/Page refresh
Given I am on getamap app
When I login as subscriber user
And I Select POI "Castles And Attractions"
And I pin a POI
Then I should see POI remains persisted after I turn off POI Category


Scenario: Registered to pin a POI to persist after turn off POI Category
Given I am on getamap app
When I login as registered user
And I Select POI "Castles And Attractions"
And I pin a POI
Then I should see POI remains persisted after I turn off POI Category


Scenario: Guest user when pin a POI,it should not be persisted.
Given I am on getamap app
When I login as guest user
And I Select POI "Castles And Attractions"
And I pin a POI
Then I should not see POI  persisted after I turn off POI Category

