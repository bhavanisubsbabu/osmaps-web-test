Feature:LandingPage
As a env user
In order to continue testing on ci
I should check if im landing on correct landing page

@smoke
Scenario: Check the page title
	Given I have ITE env url
	When I Open this url
	Then I should see OS landing page
	

@functional	
Scenario: Check the page title
	Given I have ITE env url
	When I Open this url
	Then I should see OS landing page