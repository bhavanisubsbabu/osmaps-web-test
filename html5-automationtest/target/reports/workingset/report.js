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
  "line": 41,
  "name": "Create a route with waypoint name and description",
  "description": "",
  "id": "create-route;create-a-route-with-waypoint-name-and-description",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I should be able to create route and edit waypoint name and description",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Save the route.",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 14237130564,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 9441254038,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route_and_edit_waypoint_name_and_description()"
});
formatter.result({
  "duration": 16649349909,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (1279, 669). Other element would receive the click: \u003cdiv class\u003d\"Basic_Style DiscoverRoute_PopUp PopUp_Dropped_Pin\" style\u003d\"left: 1160px; top: 574px; opacity: 1;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.140\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir5784_22199}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 48c17d4a6f33ae7e2d2ce65e067ca87b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.clickElement(Html5Page.java:92)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.clickWayPoints(Html5Page.java:1462)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route_and_edit_waypoint_name_and_description(ThenSteps.java:611)\r\n\tat ✽.Then I should be able to create route and edit waypoint name and description(src/test/resources/features.functional/Routing/create_route.feature:44)\r\n",
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
  "duration": 1914562301,
  "status": "passed"
});
});