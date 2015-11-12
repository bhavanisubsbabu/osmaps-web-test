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
      "name": "@testEnabled"
    }
  ]
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
  "duration": 26699758197,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 237925354,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 814956900,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_should_be_able_to_see_Get_Directions_description()"
});
formatter.result({
  "duration": 108543634,
  "status": "passed"
});
formatter.after({
  "duration": 103570,
  "status": "passed"
});
});