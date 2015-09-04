$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/Route Ratings/RateDiscoverRoute.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a guest user\r\nIn order to view ratings\r\nI should have permissions to authored routes",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify guest user can view a route rating",
  "description": "",
  "id": ";verify-guest-user-can-view-a-route-rating",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see ratings for Discover routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9290583223,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
