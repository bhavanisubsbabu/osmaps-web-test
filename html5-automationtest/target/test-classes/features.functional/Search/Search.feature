Feature: Search popup
As a user
In order to view certain region on the map
I should be able to search a location/place on the map



Scenario Outline: Search a place as guest user
Given I am on getamap app
When I login as guest user
And I search "<search-area>"
Then I should be able to see dropped pin in that searched area
Examples:
|search-area|
|Manchester |


Scenario Outline: Search a place as registered User
Given I am on getamap app
When I login as registered user
And I search "<search-area>"
Then I should be able to see dropped pin in that searched area
Examples:
|search-area|
|Newbury|


# @TODO:JT disabled failing test - needs fixing!

@regression
Scenario Outline: Search a place as subscriber
Given I am on getamap app
When I login as subscriber user
And I search "<search-area>"
Then I should be able to see dropped pin in that searched area
Examples:
|search-area|
|Birmingham|






