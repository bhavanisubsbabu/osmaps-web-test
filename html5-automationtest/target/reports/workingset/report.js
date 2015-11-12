$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DirectionsEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify a user is able to see \"Directions\" functionality and this functionality should work as expected",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected",
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
  "name": "Check whether \"Directions\" is available on top bar menu",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"directions\"-is-available-on-top-bar-menu",
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
  "name": "I select \u0027Directions\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\u0027Directions\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21301204577,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Directions_tab_in_top_menu()"
});
formatter.result({
  "duration": 5427956279,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.directions_should_work_as_expected()"
});
formatter.result({
  "duration": 185524099,
  "status": "passed"
});
formatter.after({
  "duration": 116910,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \"Directions\" is available in left slider menu",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"directions\"-is-available-in-left-slider-menu",
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
  "name": "I select left slider menu",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click \u0027Directions\u0027 button in burger menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\u0027Directions\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20119277477,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_left_slider_menu()"
});
formatter.result({
  "duration": 5317583170,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Directions_button_in_burger_menu()"
});
formatter.result({
  "duration": 244333979,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.directions_should_work_as_expected()"
});
formatter.result({
  "duration": 174759876,
  "status": "passed"
});
formatter.after({
  "duration": 37037,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check whether \"Get Directions\" is available in \u0027Routes\u0027 top menu",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-directions\"-is-available-in-\u0027routes\u0027-top-menu",
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
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click \u0027Get Directions\u0027 button in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "\u0027Get Directions\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18545391304,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 140847421,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Get_Directions_button_in_left_menu()"
});
formatter.result({
  "duration": 191400848,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.get_Directions_should_work_as_expected()"
});
formatter.result({
  "duration": 176281495,
  "status": "passed"
});
formatter.after({
  "duration": 53100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check whether \"Get Directions\" is available in \u0027Routes\u0027 side menu",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-directions\"-is-available-in-\u0027routes\u0027-side-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I select left slider menu",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I click \u0027Routes\u0027 button in burger menu",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click \u0027Get Directions\u0027 button in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "\u0027Get Directions\u0027 should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19612969454,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_left_slider_menu()"
});
formatter.result({
  "duration": 5294484915,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Routes_button_in_burger_menu()"
});
formatter.result({
  "duration": 213660206,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Get_Directions_button_in_left_menu()"
});
formatter.result({
  "duration": 200084782,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.get_Directions_should_work_as_expected()"
});
formatter.result({
  "duration": 174733103,
  "status": "passed"
});
formatter.after({
  "duration": 41499,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Check whether \"Get me here\" link is available on \"Dropped Pin\" tool",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-on-\"dropped-pin\"-tool",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I search \"\u003csearch-area\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Get me here\u0027 link on dropped pin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "\u0027Get me here\u0027 link should work as expected",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-on-\"dropped-pin\"-tool;",
  "rows": [
    {
      "cells": [
        "search-area"
      ],
      "line": 34,
      "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-on-\"dropped-pin\"-tool;;1"
    },
    {
      "cells": [
        "London"
      ],
      "line": 35,
      "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-on-\"dropped-pin\"-tool;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Check whether \"Get me here\" link is available on \"Dropped Pin\" tool",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-on-\"dropped-pin\"-tool;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I search \"London\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Get me here\u0027 link on dropped pin",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "\u0027Get me here\u0027 link should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 23707075525,
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
  "duration": 10303985882,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Get_me_here_link_on_dropped_pin()"
});
formatter.result({
  "duration": 255677399,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.get_me_here_link_should_work_as_expected()"
});
formatter.result({
  "duration": 168715795,
  "status": "passed"
});
formatter.after({
  "duration": 76304,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Check whether \"Get me here\" link is available within \"Discover Routes\"",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-within-\"discover-routes\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I click \u0027Discover Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I select one of available routes",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click \u0027Get me here\u0027 link on route pin",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "\u0027Get me here\u0027 link should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18182241241,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 134594060,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_Discover_Routes_in_left_menu()"
});
formatter.result({
  "duration": 8247570431,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_one_of_available_routes()"
});
formatter.result({
  "duration": 253856811,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Get_me_here_link_on_route_pin()"
});
formatter.result({
  "duration": 391738193,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.get_me_here_link_should_work_as_expected()"
});
formatter.result({
  "duration": 721323406,
  "status": "passed"
});
formatter.after({
  "duration": 66487,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Check whether \"Get me here\" link is available within \"My routes\"",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-me-here\"-link-is-available-within-\"my-routes\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I click \u0027My Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I select one of my created routes",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click \u0027Get me here\u0027 link on route pin",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "\u0027Get me here\u0027 link should work as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21507380295,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 5311525701,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 5258306542,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_one_of_my_created_routes()"
});
formatter.result({
  "duration": 1918806712,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Get_me_here_link_on_route_pin()"
});
formatter.result({
  "duration": 293186854,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.get_me_here_link_should_work_as_expected()"
});
formatter.result({
  "duration": 173966493,
  "status": "passed"
});
formatter.after({
  "duration": 57563,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Check whether \"Get Directions\" description is available in Help Menu in \"The Routes menu\" topic",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"get-directions\"-description-is-available-in-help-menu-in-\"the-routes-menu\"-topic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 54,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 55,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should be able to see \u0027Get Directions\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19713625177,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 5248188449,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 701592345,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_should_be_able_to_see_Get_Directions_description()"
});
formatter.result({
  "duration": 81277178,
  "status": "passed"
});
formatter.after({
  "duration": 53547,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Check whether \"The directions menu\" topic is available in Help Menu",
  "description": "",
  "id": "verify-a-user-is-able-to-see-\"directions\"-functionality-and-this-functionality-should-work-as-expected;check-whether-\"the-directions-menu\"-topic-is-available-in-help-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 60,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I should be able to see \u0027The Directions menu\u0027 topic",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 23002046376,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 133202739,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_should_be_able_to_see_The_Directions_menu_description()"
});
formatter.result({
  "duration": 2105738197,
  "status": "passed"
});
formatter.after({
  "duration": 33913,
  "status": "passed"
});
});