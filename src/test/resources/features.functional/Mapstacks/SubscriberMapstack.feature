Feature: Map Stack for subscriber
As a subscriber 
In order to create routes on 25k map
I should have permissions to open 25k and 50k map

@regression
Scenario:  Verify subscriber user able to open 25k maps
Given I am on getamap app
When I login as subscriber user
Then I should see 25k mapstack

@regression
Scenario:  Verify registered user have no access to leisure maps
Given I am on getamap app
When I login as registered user
And I open leisure mapstack
Then I should not be able to see leisuremapstack