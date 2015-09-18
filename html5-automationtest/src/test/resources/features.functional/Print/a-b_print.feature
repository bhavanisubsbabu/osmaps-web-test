Feature: User should be able to Print maps

Scenario: A guest user should be able to print map

Given I am on getamap app
When I login as guest user
And I select print option from tool bar
And I click on Preview
Then I should see preview of the map

Scenario: A registered user should be able to print map

Given I am on getamap app
When I login as registered user
And I select print option from tool bar
And I click on Preview
Then I should see preview of the map

Scenario: A subscriber should be able to print map in 

Given I am on getamap app
When I login as guest user
And I select print option from tool bar
And I click on Preview
Then I should see preview of the map


