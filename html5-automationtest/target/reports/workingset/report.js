$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FindMyLocationEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Find My Location\" functionality is Enabled and it works as expected",
  "description": "",
  "id": "verify-if-\"find-my-location\"-functionality-is-enabled-and-it-works-as-expected",
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
  "name": "Check whether \"Find My Location\" functionality is available",
  "description": "",
  "id": "verify-if-\"find-my-location\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"find-my-location\"-functionality-is-available",
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
  "name": "\u0027Find My Location\u0027 button is enabled",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\u0027Find My Location\u0027 works as expected",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 22145449418,
  "status": "passed"
});
formatter.match({
  "location": "FindMyLocationEnabled_steps.find_My_Location_button_is_enabled()"
});
formatter.result({
  "duration": 85129140,
  "status": "passed"
});
formatter.match({
  "location": "FindMyLocationEnabled_steps.find_My_Location_works_as_expected()"
});
formatter.result({
  "duration": 5117516579,
  "status": "passed"
});
formatter.after({
  "duration": 365006,
  "status": "passed"
});
});