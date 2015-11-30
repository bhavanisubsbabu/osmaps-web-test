$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RouteCardEnabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if DofE \u0027Route Card\u0027 for selected route is created",
  "description": "",
  "id": "verify-if-dofe-\u0027route-card\u0027-for-selected-route-is-created",
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
  "name": "Check if DofE \u0027Route Card\u0027 is created",
  "description": "",
  "id": "verify-if-dofe-\u0027route-card\u0027-for-selected-route-is-created;check-if-dofe-\u0027route-card\u0027-is-created",
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
  "name": "I click \u0027My Routes\u0027 in left menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select one of my created routes",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027View route\u0027 link on route pin",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click \u0027Route Card\u0027 button in top bar",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see a \u0027Route Card\u0027 for selected route created",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 29463615781,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_select_Routes_tab_in_top_menu()"
});
formatter.result({
  "duration": 178330375,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsEnabled_steps.i_click_My_Routes_in_left_menu()"
});
formatter.result({
  "duration": 256528401,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_one_of_my_created_routes()"
});
formatter.result({
  "duration": 2605818066,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_View_route_link_on_route_pin()"
});
formatter.result({
  "duration": 873383238,
  "status": "passed"
});
formatter.match({
  "location": "RouteCardEnabled_steps.i_click_Route_Card_button_in_top_bar()"
});
formatter.result({
  "duration": 3705037451,
  "status": "passed"
});
formatter.match({
  "location": "RouteCardEnabled_steps.i_should_see_a_Route_Card_for_selected_route_created()"
});
formatter.result({
  "duration": 13569955476,
  "status": "passed"
});
formatter.after({
  "duration": 129850,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Check if DofE \u0027Route Card\u0027 is editable",
  "description": "",
  "id": "verify-if-dofe-\u0027route-card\u0027-for-selected-route-is-created;check-if-dofe-\u0027route-card\u0027-is-editable",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I navigate to my routes to select a route",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click \u0027Route Card\u0027 button in top bar",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to edit editable fields on \u0027Route Card\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 84501451549,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2869572085,
  "status": "passed"
});
formatter.match({
  "location": "RouteCardEnabled_steps.i_click_Route_Card_button_in_top_bar()"
});
formatter.result({
  "duration": 3983490804,
  "status": "passed"
});
formatter.match({
  "location": "RouteCardEnabled_steps.i_should_be_able_to_edit_editable_fields_on_Route_Card()"
});
formatter.result({
  "duration": 191613466253,
  "status": "passed"
});
formatter.after({
  "duration": 186520,
  "status": "passed"
});
});