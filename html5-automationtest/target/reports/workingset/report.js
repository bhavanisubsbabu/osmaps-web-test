$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ImportGPXDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if system administrator is able to define whether \u0027Import GPX\u0027 is disabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-disabled-in-the-system",
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
  "name": "Check whether \u0027Import GPX\u0027 is disabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-disabled-in-the-system;check-whether-\u0027import-gpx\u0027-is-disabled-in-the-system",
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
  "name": "\u0027Import GPX\u0027 button should NOT be present",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 31244869111,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 142767582,
  "status": "passed"
});
formatter.match({
  "location": "ImportGPXDisabled_steps.import_GPX_button_should_NOT_be_present()"
});
formatter.result({
  "duration": 43665942,
  "status": "passed"
});
formatter.after({
  "duration": 232923,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \u0027Import GPX\u0027 description is NOT present in \u0027The Routes menu\u0027 help topic",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-disabled-in-the-system;check-whether-\u0027import-gpx\u0027-description-is-not-present-in-\u0027the-routes-menu\u0027-help-topic",
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
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should NOT be able to see \u0027Import GPX\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18250136653,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 124938702,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 687269057,
  "status": "passed"
});
formatter.match({
  "location": "ImportGPXDisabled_steps.i_should_NOT_be_able_to_see_Import_GPX_description()"
});
formatter.result({
  "duration": 40900761,
  "status": "passed"
});
formatter.after({
  "duration": 51314,
  "status": "passed"
});
formatter.uri("ImportGPXEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if system administrator is able to define whether \u0027Import GPX\u0027 is enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-enabled-in-the-system",
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
  "name": "Check whether \u0027Import GPX\u0027 is enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-enabled-in-the-system;check-whether-\u0027import-gpx\u0027-is-enabled-in-the-system",
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
  "name": "I click \u0027Import GPX\u0027 button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should see \u0027Import GPX\u0027 panel",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20878386476,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 138013184,
  "status": "passed"
});
formatter.match({
  "location": "ImportGPXEnabled_steps.i_click_Import_GPX_button()"
});
formatter.result({
  "duration": 27993162,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat uk.co.ordnancesurvey.stepdefs.ImportGPXEnabled_steps.i_click_Import_GPX_button(ImportGPXEnabled_steps.java:29)\r\n\tat ✽.When I click \u0027Import GPX\u0027 button(ImportGPXEnabled.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ImportGPXEnabled_steps.i_should_see_Import_GPX_panel()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 451331343,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Check whether \u0027Import GPX\u0027 description is present in \u0027The Routes menu\u0027 help topic",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027import-gpx\u0027-is-enabled-in-the-system;check-whether-\u0027import-gpx\u0027-description-is-present-in-\u0027the-routes-menu\u0027-help-topic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should be able to see \u0027Import GPX\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 24003713830,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 147523318,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 698557349,
  "status": "passed"
});
formatter.match({
  "location": "ImportGPXEnabled_steps.i_should_be_able_to_see_Import_GPX_description()"
});
formatter.result({
  "duration": 29104678,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat uk.co.ordnancesurvey.stepdefs.ImportGPXEnabled_steps.i_should_be_able_to_see_Import_GPX_description(ImportGPXEnabled_steps.java:41)\r\n\tat ✽.Then I should be able to see \u0027Import GPX\u0027 description(ImportGPXEnabled.feature:14)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 380146563,
  "status": "passed"
});
});