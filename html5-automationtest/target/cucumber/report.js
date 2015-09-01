$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/Routing/DiscoverRoute.feature");
formatter.feature({
  "line": 1,
  "name": "Discover route",
  "description": "As a user \r\nI order to plan my journy\r\nI should be able to discover existing routes",
  "id": "discover-route",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Discover single scenario as  guest",
  "description": "",
  "id": "discover-route;discover-single-scenario-as--guest",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 12088049426,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 8279978865,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 19309445679,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 22199770,
  "status": "passed"
});
formatter.after({
  "duration": 86214,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Discover single route as registered user",
  "description": "",
  "id": "discover-route;discover-single-route-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3979063064,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17839506756,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 19299486697,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 19364962,
  "status": "passed"
});
formatter.after({
  "duration": 34486,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Discover single scenario as  subscriber",
  "description": "",
  "id": "discover-route;discover-single-scenario-as--subscriber",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3058346550,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 26720006766,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 19311939324,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 16758827,
  "status": "passed"
});
formatter.after({
  "duration": 33664,
  "status": "passed"
});
});