Feature: User Registration
As a user 
In order to use addtional map services
I want to able to register to OS Maps

@regression
Scenario: Guest user to register
Given I can access OS maps as a guest user to register
When I get to the login box
Then I should be given an option to upgrade to a Registered user by completing the registration process within the application


Scenario: Guest user to register via upsell message
Given I can access OS maps as a guest user
When I navigate on the home page or try to access functionality which is specific to a registered user
Then I should be given an option to upgrade to a Registered user by completing the registration process within the application


Scenario: Guest user to register with incorrect details
Given I can access OS maps as a guest user to register
When I navigate on the home page or try to access functionality which is specific to a registered user
Then I should be getting errors when entering incorrect details in the registration process within the application