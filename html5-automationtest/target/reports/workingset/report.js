$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/Routing/edit_Route.feature");
formatter.feature({
  "line": 1,
  "name": "User should able to edit routes",
  "description": "",
  "id": "user-should-able-to-edit-routes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 35,
  "name": "User should be able to edit route by updating route type as cycling",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-route-type-as-cycling",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 37,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on edit link, change route type cycling and save",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9786849529,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 11136284271,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1108164042,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_cycling_and_save()"
});
formatter.result({
  "duration": 2929911474,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1166710526,
  "status": "passed"
});
formatter.after({
  "duration": 165449,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User should be able to edit route by updating route type as other",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-route-type-as-other",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I click on edit link, change route type other and save",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 693383792,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16200557848,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1156289681,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_other_and_save()"
});
formatter.result({
  "duration": 2747974272,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1077640898,
  "status": "passed"
});
formatter.after({
  "duration": 42286,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User should be able to edit route by updating waypoint name and description",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-waypoint-name-and-description",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 53,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 54,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on edit link, edit waypoint name and description and save",
  "keyword": "When "
});
formatter.step({
  "line": 57,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 454105052,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16025085486,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 6138440038,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_edit_waypoint_name_and_description_and_save()"
});
formatter.result({
  "duration": 1406114,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat uk.co.ordnancesurvey.stepdefs.EditRoute_steps.i_click_on_edit_link_edit_waypoint_name_and_description_and_save(EditRoute_steps.java:74)\r\n\tat ✽.When I click on edit link, edit waypoint name and description and save(src/test/resources/features.functional/Routing/edit_Route.feature:56)\r\n",
  "status": "pending"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35307,
  "status": "passed"
});
});