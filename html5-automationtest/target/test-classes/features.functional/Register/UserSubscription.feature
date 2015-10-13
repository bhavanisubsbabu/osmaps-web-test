Feature: User Subscription
As a user 
In order to use addtional map services
I want to able to subscribe to OS Maps



Scenario: Guest user to subscribe
Given I can access OS maps as a guest user to subscribe
When I get to the login box
Then I should be given an option to upgrade to subscribed user by completing the subscription process within the application

@current
Scenario: Guest user to subscribe via upsell message
Given I can access OS maps as a guest user to subscribe via upsell
When I navigate on the home page or try to access functionality which is specific to a subscribed user
Then I should be able to upgrade to a subscribed user by completing the subscription process within the application


Scenario: Guest user to subscribe with incorrect details
Given I can access OS maps as a guest user to subscribe
When I navigate on the home page or try to access functionality which is specific to a subscribed user
Then I should be getting errors when entering incorrect details in the subscription process within the application
