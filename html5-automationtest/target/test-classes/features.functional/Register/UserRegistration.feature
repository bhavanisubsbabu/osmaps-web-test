@regression
Feature: User Registration
@wip
Scenario: Guest user to register
Given I can access OS maps as a guest user to register
When I get to the login box
Then I should be given an option to upgrade to a Registered user by completing the registration process within the application
