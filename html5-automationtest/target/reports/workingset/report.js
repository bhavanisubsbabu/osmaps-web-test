$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SingleUserMode.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \u0027Single User Mode\u0027 is enabled",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 32,
  "name": "Check whether \u0027Who can see my route\u0027 is NOT present in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027who-can-see-my-route\u0027-is-not-present-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I open \u0027Create custom route\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I plot new route",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click \u0027Save\u0027 route",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should NOT see \u0027Who can see your route\u0027 option",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 19358372359,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Create_custom_route()"
});
formatter.result({
  "duration": 381098019,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_plot_new_route()"
});
formatter.result({
  "duration": 4572773294,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Save_route()"
});
formatter.result({
  "duration": 215713722,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesDisabled_steps.i_should_NOT_see_Who_can_see_your_route_option()"
});
formatter.result({
  "duration": 52091110,
  "status": "passed"
});
formatter.after({
  "duration": 211063,
  "status": "passed"
});
});