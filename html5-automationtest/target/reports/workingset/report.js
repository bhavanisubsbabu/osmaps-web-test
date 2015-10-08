$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/ImportExportRoute/ImportRoute.feature");
formatter.feature({
  "line": 1,
  "name": "A logged in user should be able to import route",
  "description": "",
  "id": "a-logged-in-user-should-be-able-to-import-route",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user should be able to import a route",
  "description": "",
  "id": "a-logged-in-user-should-be-able-to-import-route;user-should-be-able-to-import-a-route",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I navigate to importGPX panel",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "select a gpx file and clicked on save",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "route should be added to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 11030931762,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 11195259754,
  "status": "passed"
});
formatter.match({
  "location": "ImportRoutes_steps.i_navigate_to_importGPX_panel()"
});
formatter.result({
  "duration": 352439731,
  "status": "passed"
});
formatter.match({
  "location": "ImportRoutes_steps.select_a_gpx_file_and_clicked_on_save()"
});
formatter.result({
  "duration": 5880393598,
  "status": "passed"
});
formatter.match({
  "location": "ImportRoutes_steps.route_should_be_added_to_the_application()"
});
formatter.result({
  "duration": 97601960,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.importSuccess(Html5Page.java:1588)\r\n\tat uk.co.ordnancesurvey.stepdefs.ImportRoutes_steps.route_should_be_added_to_the_application(ImportRoutes_steps.java:38)\r\n\tat ✽.Then route should be added to the application(src/test/resources/features.functional/ImportExportRoute/ImportRoute.feature:9)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1187713510,
  "status": "passed"
});
});