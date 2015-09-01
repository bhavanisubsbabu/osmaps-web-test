Feature: delete Route
As a getamap registered/subscriber user
In order to remove routes
I should  be to able to delete routes which are not required


@regression
Scenario: delete route as subscribed user
Given I am on getamap app
When I login as subscriber user
Then I should be able to delete any route from my routes


Scenario: delete route as subscribed user
Given I am on getamap app
When I login as registered user
Then I should be able to delete any route from my routes