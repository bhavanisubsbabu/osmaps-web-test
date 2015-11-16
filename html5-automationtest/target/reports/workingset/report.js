$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyRoutesDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if user is NOT able to see \u0027My Routes\u0027 functionality",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027my-routes\u0027-functionality",
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
  "name": "Check whether \u0027My Routes\u0027 are disabled in the system",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027my-routes\u0027-functionality;check-whether-\u0027my-routes\u0027-are-disabled-in-the-system",
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
  "name": "\u0027My Routes\u0027 should NOT be present",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20961340120,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_routes_menu()"
});
formatter.result({
  "duration": 243398393,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.my_Routes_should_NOT_be_present()"
});
formatter.result({
  "duration": 155801905,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.SingleUserMode_steps.my_Routes_should_NOT_be_present(SingleUserMode_steps.java:36)\r\n\tat ✽.Then \u0027My Routes\u0027 should NOT be present(MyRoutesDisabled.feature:7)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 495219053,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \u0027Save\u0027 button is NOT present in \u0027Get Direction\u0027 functionality",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027my-routes\u0027-functionality;check-whether-\u0027save\u0027-button-is-not-present-in-\u0027get-direction\u0027-functionality",
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
  "name": "I select \u0027Directions\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "\u0027Save\u0027 button should NOT be present",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18692379087,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Directions_tab_in_top_menu()"
});
formatter.result({
  "duration": 204222245,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 2172621005,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1506431935,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 385014745,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.save_button_should_NOT_be_present()"
});
formatter.result({
  "duration": 175944844,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.SingleUserMode_steps.save_button_should_NOT_be_present(SingleUserMode_steps.java:43)\r\n\tat ✽.Then \u0027Save\u0027 button should NOT be present(MyRoutesDisabled.feature:15)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 792986695,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Check whether \u0027Who can see my route\u0027 is NOT present in \u0027Create Custom Route\u0027",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027my-routes\u0027-functionality;check-whether-\u0027who-can-see-my-route\u0027-is-not-present-in-\u0027create-custom-route\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I plot new route",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#\t\tWhen I open \u0027Create custom route\u0027"
    },
    {
      "line": 21,
      "value": "#\t\tAnd I plot new route"
    }
  ],
  "line": 22,
  "name": "I click \u0027Save\u0027 route",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should NOT see \u0027Who can see your route\u0027 option",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19362023182,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_plot_new_route()"
});
formatter.result({
  "duration": 9145337768,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Save_route()"
});
formatter.result({
  "duration": 228278470,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesDisabled_steps.i_should_NOT_see_Who_can_see_your_route_option()"
});
formatter.result({
  "duration": 250961701,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.MyRoutesDisabled_steps.i_should_NOT_see_Who_can_see_your_route_option(MyRoutesDisabled_steps.java:29)\r\n\tat ✽.Then I should NOT see \u0027Who can see your route\u0027 option(MyRoutesDisabled.feature:23)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 657305418,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Check whether \u0027My Routes\u0027 description is NOT present in \u0027Help\u0027 topic",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\u0027my-routes\u0027-functionality;check-whether-\u0027my-routes\u0027-description-is-not-present-in-\u0027help\u0027-topic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should NOT be able to see \u0027My Routes\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19387270351,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 152105924,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 677191786,
  "status": "passed"
});
formatter.match({
  "location": "SingleUserMode_steps.i_should_NOT_be_able_to_see_My_Routes_description()"
});
formatter.result({
  "duration": 86699600,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertFalse(Assert.java:64)\r\n\tat org.junit.Assert.assertFalse(Assert.java:74)\r\n\tat uk.co.ordnancesurvey.stepdefs.SingleUserMode_steps.i_should_NOT_be_able_to_see_My_Routes_description(SingleUserMode_steps.java:62)\r\n\tat ✽.Then I should NOT be able to see \u0027My Routes\u0027 description(MyRoutesDisabled.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 366109153,
  "status": "passed"
});
formatter.uri("MyRoutesEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if system administrator is able to define whether \u0027My Routes\u0027 are enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027my-routes\u0027-are-enabled-in-the-system",
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
  "name": "Check whether \u0027My Routes\u0027 are enabled in the system",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027my-routes\u0027-are-enabled-in-the-system;check-whether-\u0027my-routes\u0027-are-enabled-in-the-system",
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
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should see \u0027My Routes\u0027 in left menu",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18053507166,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 111172590,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesEnabled_steps.i_should_see_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 29454510,
  "status": "passed"
});
formatter.after({
  "duration": 32574,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \u0027My Routes\u0027 is available in \u0027My Routes\u0027 panel",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027my-routes\u0027-are-enabled-in-the-system;check-whether-\u0027my-routes\u0027-is-available-in-\u0027my-routes\u0027-panel",
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
  "name": "I select \u0027Routes\u0027 tab in top menu",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click \u0027My Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "\u0027My Routes\u0027 should be present in \u0027My Routes\u0027 panel",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 20682539201,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 138477245,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 187003783,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesEnabled_steps.my_Routes_should_be_present_in_My_Routes_panel()"
});
formatter.result({
  "duration": 92528478,
  "status": "passed"
});
formatter.after({
  "duration": 41498,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check whether \u0027Who can see my route\u0027 is present in \u0027Create Custom Route\u0027",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027my-routes\u0027-are-enabled-in-the-system;check-whether-\u0027who-can-see-my-route\u0027-is-present-in-\u0027create-custom-route\u0027",
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
  "name": "I plot new route",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#\t\tWhen I open \u0027Create custom route\u0027"
    },
    {
      "line": 19,
      "value": "#\t\tAnd I plot new route"
    }
  ],
  "line": 20,
  "name": "I click \u0027Save\u0027 route",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see \u0027Who can see your route\u0027 option",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 19159030254,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_plot_new_route()"
});
formatter.result({
  "duration": 3893822317,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Save_route()"
});
formatter.result({
  "duration": 199160406,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesEnabled_steps.i_should_see_Who_can_see_your_route_option()"
});
formatter.result({
  "duration": 41893584,
  "status": "passed"
});
formatter.after({
  "duration": 56223,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Check whether \u0027My Routes\u0027 description is present in \u0027Help\u0027 topic",
  "description": "",
  "id": "verify-if-system-administrator-is-able-to-define-whether-\u0027my-routes\u0027-are-enabled-in-the-system;check-whether-\u0027my-routes\u0027-description-is-present-in-\u0027help\u0027-topic",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see \u0027My Routes\u0027 description in content",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 18285838142,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 133507326,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 694003301,
  "status": "passed"
});
formatter.match({
  "location": "MyRoutesEnabled_steps.i_should_see_My_Routes_description_in_content()"
});
formatter.result({
  "duration": 84390002,
  "status": "passed"
});
formatter.after({
  "duration": 34805,
  "status": "passed"
});
});