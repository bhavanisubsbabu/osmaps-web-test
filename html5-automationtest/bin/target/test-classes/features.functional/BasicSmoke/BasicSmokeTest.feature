Feature: OSMaps Basic Smoke test
As a OSMaps app user
In order to create or view routes or see maps
I should be able access all features provided in the app



@Wip
Scenario:  Verify subscribed user has access to all pages
Given I am on getamap app
When I login as subscriber user
Then I should be able to access all pages


@BasicSmoke
Scenario: Verify top menu bar(Top menu bar)
Given I am on OSMaps
When I login as guest user
Then I should be able to see all options on top menu bar


@BasicSmoke
Scenario: Verify routes menu(Routes)
Given I am on OSMaps 
When I login as guest user
And I open routes menu
Then I should be able to find all route options

@BasicSmoke
Scenario: Verify Places(POIS)
Given I am on OSMaps
When I login as guest user
And I open places menu
Then I should be able to see the POI Categories

# @TODO:JT disabled failing test - needs fixing!

@BasicSmoke
Scenario Outline: Login as registered/subscriber user (User Login)
Given I am on OSMaps
When I login as <User> user
Then  I should see "<UserType>" top right corner
Examples: 
|User|UserType|
|subscriber|test|			

# @TODO:JT disabled failing test - needs fixing!

@BasicSmoke
Scenario: Create Route and Save as Subscriber(create route)
Given I am on getamap app
When I login as subscriber user
Then I should be able to create route
And  Save the route.





