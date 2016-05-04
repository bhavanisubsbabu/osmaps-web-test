Feature: Create Multiple users

Scenario Outline: Application should allow to create multiple users

	Given I can access OS maps as a guest user to register
	When I get to the login box
	Then user should be allow to create multiple accounts with "<First Name>", "<Last Name>" "<email address>"
	   
Examples:
|First Name|Last Name|email address|
|free|trail|freetrail22|
|free|trail|freetrail23|
|free|trail|freetrail24|
|free|trail|freetrail25|
|free|trail|freetrail26|
|free|trail|freetrail27|
|free|trail|freetrail28|
|free|trail|freetrail29|
|free|trail|freetrail30|