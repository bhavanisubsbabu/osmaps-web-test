$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SingleUserMode.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \u0027Single User Mode\u0027 is enabled",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled",
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
  "name": "Check whether \u0027Single User Mode\u0027 is enabled in the system",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027single-user-mode\u0027-is-enabled-in-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "\u0027Sign in\u0027 button should be replaced by \u0027Exit\u0027 button",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
