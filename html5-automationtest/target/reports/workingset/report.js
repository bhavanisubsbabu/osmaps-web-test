$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RoutesDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if System will hide the \u0027Routes\u0027 button if all routes functionalities have been disabled",
  "description": "",
  "id": "verify-if-system-will-hide-the-\u0027routes\u0027-button-if-all-routes-functionalities-have-been-disabled",
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
  "name": "Check whether \u0027Routes\u0027 button is disabled in the system",
  "description": "",
  "id": "verify-if-system-will-hide-the-\u0027routes\u0027-button-if-all-routes-functionalities-have-been-disabled;check-whether-\u0027routes\u0027-button-is-disabled-in-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I log into OS maps with Routes disabled as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select left slider menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should NOT see \u0027Routes\u0027 button in burger menu",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should NOT see \u0027Routes\u0027 button in top bar",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_with_Routes_disabled_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 30687012931,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_left_slider_menu()"
});
formatter.result({
  "duration": 282473251,
  "status": "passed"
});
formatter.match({
  "location": "RoutesDisabled_steps.i_should_NOT_see_Routes_button_in_burger_menu()"
});
formatter.result({
  "duration": 192359230,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.RoutesDisabled_steps.i_should_NOT_see_Routes_button_in_burger_menu(RoutesDisabled_steps.java:30)\r\n\tat ✽.Then I should NOT see \u0027Routes\u0027 button in burger menu(RoutesDisabled.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "RoutesDisabled_steps.i_should_NOT_see_Routes_button_in_top_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 407857719,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Check whether \u0027The Routes menu\u0027 is NOT available in \u0027Help\u0027",
  "description": "",
  "id": "verify-if-system-will-hide-the-\u0027routes\u0027-button-if-all-routes-functionalities-have-been-disabled;check-whether-\u0027the-routes-menu\u0027-is-not-available-in-\u0027help\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I log into OS maps with Routes disabled as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should NOT be able to see \u0027The Routes menu\u0027 topic",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_with_Routes_disabled_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 33884761073,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 262811328,
  "status": "passed"
});
formatter.match({
  "location": "RoutesDisabled_steps.i_should_NOT_be_able_to_see_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 1336550230,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.RoutesDisabled_steps.i_should_NOT_be_able_to_see_The_Routes_menu_topic(RoutesDisabled_steps.java:44)\r\n\tat ✽.Then I should NOT be able to see \u0027The Routes menu\u0027 topic(RoutesDisabled.feature:13)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 471160595,
  "status": "passed"
});
});