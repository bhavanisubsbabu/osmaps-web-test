Feature: Create Multiple users

Scenario Outline: Application should allow to create multiple users

	Given I can access OS maps as a guest user to register
	When I get to the login box
	Then user should be allow to create multiple accounts with "<First Name>", "<Last Name>" "<email address>"
	   
Examples:
|First Name|Last Name|email address|
|George|Clooney|gc|
|Josh|Brolin|jb|
|Colin|Farrell|cf|
|Robert|Downey Jr|rdj|
|Christoph|Waltz|cw|
|Sam|Rockwell|sr|
|Michael|Shannon|ms|
|Jamie|Foxx|jf|
|Hugh|Jackman|hj|
|Vin|Diesel|vd|
|Russell|Crowe|rc|
|Brad|Pitt|bd|
|Kevin|Spacey|ks|
|Michael|Fassbender|mf|
|Sean|Penn|sp|
|Christian|Bale|cb|
|Johnny|Depp|jd|
|Leonardo|DiCaprio|ld|
|sylvester|stallone|ss|
|Sean|Connery|sc|
