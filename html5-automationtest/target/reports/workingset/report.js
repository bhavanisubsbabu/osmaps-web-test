$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PreferencesDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if user is NOT able to see \u0027Preferences\u0027 functionality",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027preferences\u0027-functionality",
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
  "name": "Check whether \u0027Preferences\u0027 are disabled in the system",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027preferences\u0027-functionality;check-whether-\u0027preferences\u0027-are-disabled-in-the-system",
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
  "name": "I open User\u0027s panel",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should NOT see \u0027Preferences\u0027 link",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21868338150,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_User_s_panel()"
});
formatter.result({
  "duration": 263863182,
  "status": "passed"
});
formatter.match({
  "location": "PreferencesDisabled_steps.i_should_NOT_see_Preferences_link()"
});
formatter.result({
  "duration": 47764346,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.PreferencesDisabled_steps.i_should_NOT_see_Preferences_link(PreferencesDisabled_steps.java:30)\r\n\tat ✽.Then I should NOT see \u0027Preferences\u0027 link(PreferencesDisabled.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 401134025,
  "status": "passed"
});
formatter.uri("PreferencesEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if system administrator is able to define whether \u0027Preferences\u0027 are enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027preferences\u0027-are-enabled-in-the-system",
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
  "name": "Check whether \u0027Preferences\u0027 are enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027preferences\u0027-are-enabled-in-the-system;check-whether-\u0027preferences\u0027-are-enabled-in-the-system",
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
  "name": "I open User\u0027s panel",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \u0027Preferences\u0027 link",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 24342471634,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_User_s_panel()"
});
formatter.result({
  "duration": 256205590,
  "status": "passed"
});
formatter.match({
  "location": "PreferencesEnabled_steps.i_should_see_Preferences_link()"
});
formatter.result({
  "duration": 23402486,
  "status": "passed"
});
formatter.after({
  "duration": 43283,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether user is able to access and modify \u0027Preferences\u0027",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027preferences\u0027-are-enabled-in-the-system;check-whether-user-is-able-to-access-and-modify-\u0027preferences\u0027",
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
  "name": "I open User\u0027s panel",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I see \u0027Preferences\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I open \u0027Preferences\u0027 menu",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see \u0027Preferences\u0027 panel with all settings",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 21933927223,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_User_s_panel()"
});
formatter.result({
  "duration": 331588313,
  "status": "passed"
});
formatter.match({
  "location": "PreferencesEnabled_steps.i_should_see_Preferences_link()"
});
formatter.result({
  "duration": 29182381,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Preferences_menu()"
});
formatter.result({
  "duration": 337149561,
  "status": "passed"
});
formatter.match({
  "location": "PreferencesEnabled_steps.i_should_see_Preferences_panel_with_all_settings()"
});
formatter.result({
  "duration": 779372025,
  "status": "passed"
});
formatter.after({
  "duration": 34806,
  "status": "passed"
});
});