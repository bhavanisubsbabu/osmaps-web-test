Feature: Subscriber maps	
As a subscriber user
I should be able to see 1:25 and 1:50 maps

Scenario: subscriber able to open 125K maps
Given I am on getamap app
When I login as subscriber
Then I should be able to see 125K maps

Scenario: Subscriber able to open 150K maps
Given I am on getamap app
When I login as subscriber
Then I should be able to see 150K maps

Scenario: Subscriber should have 125K map 
Given I am on getamap app
When I login as subscriber
Then I should see 125K map as subscriber feature


Scenario: Subscriber should have 150K map 
Given I am on getamap app
When I login as subscriber
Then I should see 150K map as subscriber feature



