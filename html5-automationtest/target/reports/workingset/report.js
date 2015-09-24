$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search popup",
  "description": "As a user\r\nIn order to view certain region on the map\r\nI should be able to search a location/place on the map",
  "id": "search-popup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 16,
  "name": "Search a place as guest user",
  "description": "",
  "id": "search-popup;search-a-place-as-guest-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search \"Manchester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9027614141,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5369310295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10236263031,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 35124258,
  "status": "passed"
});
formatter.after({
  "duration": 158060,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search a place as registered User",
  "description": "",
  "id": "search-popup;search-a-place-as-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I search \"Newbury\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1296856327,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 11290273223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newbury",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10168795964,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 58725723,
  "status": "passed"
});
formatter.after({
  "duration": 42286,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a place as subscriber",
  "description": "",
  "id": "search-popup;search-a-place-as-subscriber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I search \"Birmingham\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1342901106,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21367978484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10206053008,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 33562541,
  "status": "passed"
});
formatter.after({
  "duration": 39412,
  "status": "passed"
});
});