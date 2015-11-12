$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DiscoverRoutesEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Discover Routes\" functionality is Enabled and it works as expected",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-enabled-and-it-works-as-expected",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testEnabled"
    }
  ]
});
formatter.scenario({
  "line": 14,
  "name": "Check whether \"Discover Routes\" description is available in \"The Routes menu\" topic in Help Menu",
  "description": "",
  "id": "verify-if-\"discover-routes\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"discover-routes\"-description-is-available-in-\"the-routes-menu\"-topic-in-help-menu",
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
  "name": "I should be able to see \u0027Discover Routes\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21248879975,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 220699620,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 840371191,
  "status": "passed"
});
formatter.match({
  "location": "DiscoverRoutesEnable_steps.i_should_be_able_to_see_Discover_Routes_description()"
});
formatter.result({
  "duration": 81981209,
  "status": "passed"
});
formatter.after({
  "duration": 136227,
  "status": "passed"
});
});