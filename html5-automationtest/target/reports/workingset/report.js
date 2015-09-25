$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/Routing/create_route.feature");
formatter.feature({
  "line": 2,
  "name": "Create Route",
  "description": "As a getamap registered user\r\nIn order to navigate\r\nI want to create route on map",
  "id": "create-route",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Create Route and Save as registered user",
  "description": "",
  "id": "create-route;create-route-and-save-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@demo"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Save the route.",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9060217810,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 13929041531,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7451082625,
  "error_message": "java.lang.NullPointerException\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.plot_newRoute(Html5Page.java:210)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route(ThenSteps.java:47)\r\n\tat ✽.Then I should be able to create route(src/test/resources/features.functional/Routing/create_route.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1895498423,
  "status": "passed"
});
});