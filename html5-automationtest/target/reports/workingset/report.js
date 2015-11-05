$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SnapEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Snap\" functionality is Enabled and it works as expected",
  "description": "",
  "id": "verify-if-\"snap\"-functionality-is-enabled-and-it-works-as-expected",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testEnabled"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check whether \"Snap\" functionality is available",
  "description": "",
  "id": "verify-if-\"snap\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"snap\"-functionality-is-available",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\t\tWhen \u0027Snap\u0027 functionality is enabled"
    }
  ],
  "line": 7,
  "name": "I switch to \u0027National Park pathways\u0027 map type",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I zoom in map on National Park location",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I open \u0027Create custom route\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\u0027Snap\u0027 button should be visible and enabled",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 25203768818,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_switch_to_National_Park_pathways_map_type()"
});
formatter.result({
  "duration": 552131702,
  "status": "passed"
});
formatter.match({
  "location": "SnapEnabled_steps.i_zoom_in_map()"
});
formatter.result({
  "duration": 360126886,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Create_custom_route()"
});
formatter.result({
  "duration": 2622487700,
  "status": "passed"
});
formatter.match({
  "location": "SnapEnabled_steps.snap_button_should_be_visible_and_enabled()"
});
formatter.result({
  "duration": 182723551,
  "status": "passed"
});
formatter.after({
  "duration": 127617,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check whether \"Snap\" description is available in \u0027Create custom route\u0027 help topic",
  "description": "",
  "id": "verify-if-\"snap\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"snap\"-description-is-available-in-\u0027create-custom-route\u0027-help-topic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 14,
      "value": "#\t\tAnd \u0027Snap\u0027 function is enabled"
    }
  ],
  "line": 15,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click \u0027Create custom route\u0027 help topic",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see \u0027Snap\u0027 description in content",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 22877314627,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 289163589,
  "status": "passed"
});
formatter.match({
  "location": "SnapDisabled_steps.i_click_Create_custom_route_help_topic()"
});
formatter.result({
  "duration": 845293372,
  "status": "passed"
});
formatter.match({
  "location": "SnapEnabled_steps.i_should_see_Snap_description_in_content()"
});
formatter.result({
  "duration": 130933651,
  "status": "passed"
});
formatter.after({
  "duration": 34805,
  "status": "passed"
});
});