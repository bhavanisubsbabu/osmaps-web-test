Feature: Map Stack for subscriber
As a subscriber 
In order to create routes on 25k map
I should have permissions to opem 25k map


Scenario:  Verify subscriber is able to see 25k mapstack button
Given I am on getamap app
When I login as subscriber user
Then I should see 25k mapstack
