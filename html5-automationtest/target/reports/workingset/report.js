$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SingleUserMode.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \u0027Single User Mode\u0027 is enabled",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled",
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
  "name": "Check whether \u0027Single User Mode\u0027 is enabled in the system",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027single-user-mode\u0027-is-enabled-in-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\u0027Sign in\u0027 button should be replaced by \u0027Exit\u0027 button",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 14357012659,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.sign_in_button_should_be_replaced_by_Exit_button()"
});
formatter.result({
  "duration": 36241407,
  "status": "passed"
});
formatter.after({
  "duration": 126278,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Check whether \u0027My Routes\u0027 are disabled in \u0027Routes\u0027 menu in Single User Mode",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027my-routes\u0027-are-disabled-in-\u0027routes\u0027-menu-in-single-user-mode",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I open routes menu",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "\u0027My Routes\u0027 should NOT be present",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5118207135,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 176687343,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.my_Routes_should_NOT_be_present()"
});
formatter.result({
  "duration": 33316481,
  "status": "passed"
});
formatter.after({
  "duration": 120031,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check whether \u0027Save\u0027 button is NOT present in \u0027Get Direction\u0027 functionality in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027save\u0027-button-is-not-present-in-\u0027get-direction\u0027-functionality-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I select \u0027Directions\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\u0027Save\u0027 button should NOT be present",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5098678183,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Directions_tab_in_top_menu()"
});
formatter.result({
  "duration": 253211506,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 2161800343,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1540059873,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 292689739,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.save_button_should_NOT_be_present()"
});
formatter.result({
  "duration": 48395352,
  "status": "passed"
});
formatter.after({
  "duration": 49976,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check whether \u0027Print\u0027 message is changed in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027print\u0027-message-is-changed-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on \u0027Print\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "additional \u0027Print\u0027 text is not displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5155394512,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.i_click_on_Print_button()"
});
formatter.result({
  "duration": 309894368,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.additional_Print_text_is_not_displayed()"
});
formatter.result({
  "duration": 124550051,
  "status": "passed"
});
formatter.after({
  "duration": 35697,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Check whether \u0027My Routes\u0027 description is NOT present in \u0027Help\u0027 topic in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027my-routes\u0027-description-is-not-present-in-\u0027help\u0027-topic-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should NOT be able to see \u0027My Routes\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5071677845,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 190150476,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 717507562,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.i_should_NOT_be_able_to_see_My_Routes_description()"
});
formatter.result({
  "duration": 58763107,
  "status": "passed"
});
formatter.after({
  "duration": 37929,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Check whether \u0027Who can see my route\u0027 is NOT present in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027who-can-see-my-route\u0027-is-not-present-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I plot new route",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I click \u0027Save\u0027 route",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I should NOT see \u0027Who can see your route\u0027 option",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5098530041,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_plot_new_route()"
});
formatter.result({
  "duration": 4061582279,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Save_route()"
});
formatter.result({
  "duration": 211976085,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesDisabled_steps.i_should_NOT_see_Who_can_see_your_route_option()"
});
formatter.result({
  "duration": 51671892,
  "status": "passed"
});
formatter.after({
  "duration": 49976,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Check whether there is a monit for unsaved changes when clicking \u0027Exit\u0027 button in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-there-is-a-monit-for-unsaved-changes-when-clicking-\u0027exit\u0027-button-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I plot new route",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I click \u0027Exit\u0027 button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "there should be a monit for unsaved changes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 5257443388,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_plot_new_route()"
});
formatter.result({
  "duration": 3892149465,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.i_click_Exit_button()"
});
formatter.result({
  "duration": 185527266,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.there_should_be_a_monit_for_unsaved_changes()"
});
formatter.result({
  "duration": 35626971,
  "status": "passed"
});
formatter.after({
  "duration": 49084,
  "status": "passed"
});
});