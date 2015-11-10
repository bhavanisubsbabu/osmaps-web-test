$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DiscoverRoutesDisable.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Discover Routes\" functionality is Disable",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-disable",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testDisabledDiscoverRoutes"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check whether \"Discover Routes\" is unavailable",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-disable;check-whether-\"discover-routes\"-is-unavailable",
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
  "name": "\u0027Discover Routes\u0027 should not be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 27489749141,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 291588581,
  "status": "passed"
});
formatter.match({
  "location": "DiscoverRoutesDisable_steps.discover_Routes_should_not_be_visible()"
});
formatter.result({
  "duration": 48671343,
  "status": "passed"
});
formatter.after({
  "duration": 149290,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \"Discovering routes\" topic is unavailable in Help Menu",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-disable;check-whether-\"discovering-routes\"-topic-is-unavailable-in-help-menu",
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
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should not be able to see \u0027Discovering routes\u0027 topic",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20762724058,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 239399127,
  "status": "passed"
});
formatter.match({
  "location": "DiscoverRoutesDisable_steps.i_should_not_be_able_to_see_Discovering_routes_topic()"
});
formatter.result({
  "duration": 50722214,
  "status": "passed"
});
formatter.after({
  "duration": 30791,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Check whether \"Discover Routes\" description is unavailable in \"The Routes menu\" topic in Help Menu",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-disable;check-whether-\"discover-routes\"-description-is-unavailable-in-\"the-routes-menu\"-topic-in-help-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should not be able to see \u0027Discover Routes\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 23058288884,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 272245262,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 868762885,
  "status": "passed"
});
formatter.match({
  "location": "DiscoverRoutesDisable_steps.i_should_not_be_able_to_see_Discover_Routes_description()"
});
formatter.result({
  "duration": 25709139,
  "status": "passed"
});
formatter.after({
  "duration": 27525,
  "status": "passed"
});
});