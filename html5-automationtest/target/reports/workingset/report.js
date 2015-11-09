$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RatingDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Rating\" functionality is Disabled",
  "description": "",
  "id": "verify-if-\"rating\"-functionality-is-disabled",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testDisabled"
    }
  ]
});
formatter.scenario({
  "line": 53,
  "name": "Check whether \"Rating\" description is NOT available in \u0027Discovering routes\u0027 help topic",
  "description": "",
  "id": "verify-if-\"rating\"-functionality-is-disabled;check-whether-\"rating\"-description-is-not-available-in-\u0027discovering-routes\u0027-help-topic",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@rating"
    }
  ]
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
  "name": "I click \u0027Discovering routes\u0027 help topic",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should NOT see \u0027Rating\u0027 description in content",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 28266424045,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 459863440,
  "status": "passed"
});
formatter.match({
  "location": "RatingEnabled_steps.i_click_Discovering_routes_help_topic()"
});
formatter.result({
  "duration": 885624928,
  "status": "passed"
});
formatter.match({
  "location": "RatingDisabled_steps.i_should_NOT_see_Rating_description_in_content()"
});
formatter.result({
  "duration": 139038693,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.RatingDisabled_steps.i_should_NOT_see_Rating_description_in_content(RatingDisabled_steps.java:63)\r\n\tat ✽.Then I should NOT see \u0027Rating\u0027 description in content(RatingDisabled.feature:57)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 543185544,
  "status": "passed"
});
formatter.uri("RatingEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \"Rating\" functionality is Enabled and it works as expected",
  "description": "",
  "id": "verify-if-\"rating\"-functionality-is-enabled-and-it-works-as-expected",
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
  "name": "Check whether \"Rating\" description is available in \u0027Discovering routes\u0027 help topic",
  "description": "",
  "id": "verify-if-\"rating\"-functionality-is-enabled-and-it-works-as-expected;check-whether-\"rating\"-description-is-available-in-\u0027discovering-routes\u0027-help-topic",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@rating"
    }
  ]
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
  "name": "I click \u0027Discovering routes\u0027 help topic",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I should see \u0027Rating\u0027 description in content",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 30795997812,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 271067800,
  "status": "passed"
});
formatter.match({
  "location": "RatingEnabled_steps.i_click_Discovering_routes_help_topic()"
});
formatter.result({
  "duration": 858127398,
  "status": "passed"
});
formatter.match({
  "location": "RatingEnabled_steps.i_should_see_Rating_description_in_content()"
});
formatter.result({
  "duration": 126684348,
  "status": "passed"
});
formatter.after({
  "duration": 30789,
  "status": "passed"
});
});