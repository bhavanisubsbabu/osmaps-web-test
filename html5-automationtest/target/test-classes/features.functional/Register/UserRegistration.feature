Feature: User Registration
As a user 
In order to use addtional map services
I want to able to register to OS Maps

@regression @demo
Scenario: Guest user to register
Given I can access OS maps as a guest user to register
When I get to the login box
Then I should be given an option to upgrade to a Registered user by completing the registration process within the application
