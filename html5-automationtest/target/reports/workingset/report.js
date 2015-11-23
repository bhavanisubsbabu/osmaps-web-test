$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ExportGPXDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \u0027Export GPX\u0027 functionality is disabled",
  "description": "",
  "id": "verify-if-\u0027export-gpx\u0027-functionality-is-disabled",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check whether \u0027Export GPX\u0027 functionality is NOT available in \u0027Discovered Routes\u0027",
  "description": "",
  "id": "verify-if-\u0027export-gpx\u0027-functionality-is-disabled;check-whether-\u0027export-gpx\u0027-functionality-is-not-available-in-\u0027discovered-routes\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click \u0027Discover Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select one of available routes",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027View route\u0027 link on route pin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "\u0027Export GPX\u0027 button should NOT be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 27288478152,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 216314661,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Discover_Routes_in_left_menu()"
});
formatter.result({
  "duration": 3260325899,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_one_of_available_routes()"
});
formatter.result({
  "duration": 1210885990,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_View_route_link_on_route_pin()"
});
formatter.result({
  "duration": 856594457,
  "status": "passed"
});
formatter.match({
  "location": "ExportGPXDisabled_steps.export_GPX_button_should_NOT_be_visible()"
});
formatter.result({
  "duration": 98402366,
  "status": "passed"
});
formatter.after({
  "duration": 201690,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check whether \u0027Export GPX\u0027 functionality is NOT available in \u0027My Routes\u0027",
  "description": "",
  "id": "verify-if-\u0027export-gpx\u0027-functionality-is-disabled;check-whether-\u0027export-gpx\u0027-functionality-is-not-available-in-\u0027my-routes\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click \u0027My Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select one of my created routes",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click \u0027View route\u0027 link on route pin",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "\u0027Export GPX\u0027 button should NOT be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 22303224272,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 217206202,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 308703366,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_one_of_my_created_routes()"
});
formatter.result({
  "duration": 2483011641,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_View_route_link_on_route_pin()"
});
formatter.result({
  "duration": 942604941,
  "status": "passed"
});
formatter.match({
  "location": "ExportGPXDisabled_steps.export_GPX_button_should_NOT_be_visible()"
});
formatter.result({
  "duration": 51095372,
  "status": "passed"
});
formatter.after({
  "duration": 90582,
  "status": "passed"
});
});