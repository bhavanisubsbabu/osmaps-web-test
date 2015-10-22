$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ShareRoute.feature");
formatter.feature({
  "line": 2,
  "name": "Logged in User should be able to share a route by email, Facebook and Twitter",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "User be able to share a route by email",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter;user-be-able-to-share-a-route-by-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to my routes to select a route",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I clicked on Share icon, select email, enter email address and share",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "application should send email with route details and default message",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 14293805346,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 9128426273,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 3873097655,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_and_share()"
});
formatter.result({
  "duration": 1615585781,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2235887446,
  "status": "passed"
});
formatter.after({
  "duration": 110846,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User be able to share a route by email to multiple recipients",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter;user-be-able-to-share-a-route-by-email-to-multiple-recipients",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I navigate to my routes to select a route",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I clicked on Share icon, select email, enter multiple email addresses and share",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "application should send email with route details and default message",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4233127790,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14588399752,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 3181171766,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_multiple_email_addresses_and_share()"
});
formatter.result({
  "duration": 1504261005,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2208783526,
  "status": "passed"
});
formatter.after({
  "duration": 36128,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User be able to edit default text message and share a route by email",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter;user-be-able-to-edit-default-text-message-and-share-a-route-by-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I navigate to my routes to select a route",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I clicked on Share icon, select email, enter email address, update text and share",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "application should send email with route details and default message",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3183620644,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14226501657,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2589986493,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share()"
});
formatter.result({
  "duration": 2096092881,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2236937200,
  "status": "passed"
});
formatter.after({
  "duration": 327612,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User be able to share a route by Facebook",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter;user-be-able-to-share-a-route-by-facebook",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I navigate to my routes to select a route",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I clicked on Share icon, select facebook, looged into facebook and share",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "application should show confirmation message and post route on facebook",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3093805756,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
