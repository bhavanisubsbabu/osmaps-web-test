$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateCustomRouteEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Create Custom Route\" functionality is Enabled and it works as expected",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testEnabledCreateCustomRoute"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check whether \"Create Custom Routes\" is available",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-custom-routes\"-is-available",
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
  "name": "I open routes menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\u0027Create Custom Route\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 27249569975,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 240915353,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.create_Custom_Route_should_work_as_expected()"
});
formatter.result({
  "duration": 135176505,
  "status": "passed"
});
formatter.after({
  "duration": 111968,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \"Create\" is available in My Routes",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create\"-is-available-in-my-routes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I open routes menu",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click \u0027My Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\u0027Create\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19937035072,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 246797846,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 379288530,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.create_should_work_as_expected()"
});
formatter.result({
  "duration": 48529983,
  "status": "passed"
});
formatter.after({
  "duration": 26593,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check whether \"Create\" is available in Discover Routes",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create\"-is-available-in-discover-routes",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I open routes menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click \u0027Discover Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\u0027Create\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21107651160,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 388603760,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Discover_Routes_in_left_menu()"
});
formatter.result({
  "duration": 3575062317,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.create_should_work_as_expected()"
});
formatter.result({
  "duration": 64439633,
  "status": "passed"
});
formatter.after({
  "duration": 52718,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Check whether \"Create route\" is available on \"Dropped Pin\" tool",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-route\"-is-available-on-\"dropped-pin\"-tool",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search \"\u003csearch-area\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click \u0027More info\u0027 on dropped pin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "\u0027Create route\u0027 should work as expected",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-route\"-is-available-on-\"dropped-pin\"-tool;",
  "rows": [
    {
      "cells": [
        "search-area"
      ],
      "line": 27,
      "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-route\"-is-available-on-\"dropped-pin\"-tool;;1"
    },
    {
      "cells": [
        "London"
      ],
      "line": 28,
      "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-route\"-is-available-on-\"dropped-pin\"-tool;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Check whether \"Create route\" is available on \"Dropped Pin\" tool",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-route\"-is-available-on-\"dropped-pin\"-tool;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@testEnabledCreateCustomRoute"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I search \"London\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click \u0027More info\u0027 on dropped pin",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "\u0027Create route\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20346588420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10425041253,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.i_click_More_info_on_dropped_pin()"
});
formatter.result({
  "duration": 335962237,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.create_route_should_work_as_expected()"
});
formatter.result({
  "duration": 468298500,
  "status": "passed"
});
formatter.after({
  "duration": 34057,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Check whether \"Create a custom route\" topic is available in Help Menu",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-a-custom-route\"-topic-is-available-in-help-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I should be able to see \u0027Create a custom route\u0027 topic",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20510013395,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 251708554,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.i_should_be_able_to_see_Create_a_custom_route_topic()"
});
formatter.result({
  "duration": 2125150748,
  "status": "passed"
});
formatter.after({
  "duration": 55051,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Check whether \"Create Custom Route\" description is available in \"The Routes menu\" topic in Help Menu",
  "description": "",
  "id": "verify-if-\"create-custom-route\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"create-custom-route\"-description-is-available-in-\"the-routes-menu\"-topic-in-help-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should be able to see \u0027Create Custom Route\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19809892702,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 233545092,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 826588923,
  "status": "passed"
});
formatter.match({
  "location": "CreateCustomRouteEnabled_steps.i_should_be_able_to_see_Create_Custom_Route_description()"
});
formatter.result({
  "duration": 121119451,
  "status": "passed"
});
formatter.after({
  "duration": 32190,
  "status": "passed"
});
});