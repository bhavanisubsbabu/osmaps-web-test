Feature: Map stack access
As a subscriber 
In order to create routes on 25k map
I should have permissions to liesure maps(25k and 50k maps)


Scenario:  Verify Registered user has only Zoom and Aerial map stacks.
Given I am on getamap app
When I login as registered user
Then I should see Aerial map stack
And I should  see Zoom map stack
