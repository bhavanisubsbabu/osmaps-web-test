Feature: Login
As a user 
In order to create new route 
I should be able to login to application


Scenario: Login valid user name password
	Given I am Login page
	When I ente user name and password
	Then I should be able to login.
	