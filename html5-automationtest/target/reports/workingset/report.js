$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("getDirectionsAB.feature");
formatter.feature({
  "line": 2,
  "name": "A-B routing",
  "description": "As a user \r\nIn order to find a route \r\nI should be able to get directions from start and end point",
  "id": "a-b-routing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Guest user should be able to do A-B Car routing",
  "description": "",
  "id": "a-b-routing;guest-user-should-be-able-to-do-a-b-car-routing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@guestUserFlow,"
    },
    {
      "line": 8,
      "name": "@wip"
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
  "name": "I open A-B Routing window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select car icon",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see A-B car directions",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9203514177,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5879937975,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10131519905,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1560516481,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 2823709013,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 212475537,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 308058450,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 1731097618,
  "status": "passed"
});
formatter.after({
  "duration": 146975,
  "status": "passed"
});
});