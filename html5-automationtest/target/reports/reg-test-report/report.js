$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DPN/createDPN.feature");
formatter.feature({
  "line": 2,
  "name": "Application should auto route between way points when subscribed user create routes in National Park pathways",
  "description": "",
  "id": "application-should-auto-route-between-way-points-when-subscribed-user-create-routes-in-national-park-pathways",
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
  "name": "Plot a route in national park pathways with snap enabled",
  "description": "",
  "id": "application-should-auto-route-between-way-points-when-subscribed-user-create-routes-in-national-park-pathways;plot-a-route-in-national-park-pathways-with-snap-enabled",
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
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I select National Park Pathways from mapstack",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select create custom route from routes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I zoom-in map till snap is enabled and plot a route",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "app should auto route nearest pathways from the 2 locations",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 9679399015,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 17331422584,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_National_Park_Pathways_from_mapstack()"
});
formatter.result({
  "duration": 5261016090,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_create_custom_route_from_routes()"
});
formatter.result({
  "duration": 861431793,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_zoom_in_map_till_snap_is_enabled()"
});
formatter.result({
  "duration": 6941925037,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 48
    }
  ],
  "location": "CreateDPN_steps.app_should_auto_route_nearest_pathways_from_the_locations(int)"
});
formatter.result({
  "duration": 7355131578,
  "status": "passed"
});
formatter.after({
  "duration": 134654,
  "status": "passed"
});
formatter.uri("Mapstacks/RegisteredMapstack.feature");
formatter.feature({
  "line": 2,
  "name": "Map stack access",
  "description": "As a subscriber \r\nIn order to create routes on 25k map\r\nI should have permissions to liesure maps(25k and 50k maps)",
  "id": "map-stack-access",
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
  "name": "Verify Registered user has only Zoom and Aerial map stacks.",
  "description": "",
  "id": "map-stack-access;verify-registered-user-has-only-zoom-and-aerial-map-stacks.",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I should see Aerial map stack",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I should  see Zoom map stack",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1736813023,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 3765819509,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 17 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir8596_22043}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2cfb4d97985ce2f93dcbae67cd82533a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat sun.reflect.GeneratedMethodAccessor21.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:184)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.IsElementDisplayed(Html5Page.java:708)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:69)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.signOUt(Html5Page.java:242)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.open_login_window(Html5Page.java:595)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.i_login_as_registered_user(WhenSteps.java:101)\r\n\tat ✽.When I login as registered user(Mapstacks/RegisteredMapstack.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Aerial_map_stack()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Zoom_map_stack()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 528546486,
  "status": "passed"
});
formatter.uri("Mapstacks/SubscriberMapstack.feature");
formatter.feature({
  "line": 2,
  "name": "Map Stack for subscriber",
  "description": "As a subscriber \r\nIn order to create routes on 25k map\r\nI should have permissions to opem 25k map",
  "id": "map-stack-for-subscriber",
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
  "name": "Verify subscriber is able to see 25k mapstack button",
  "description": "",
  "id": "map-stack-for-subscriber;verify-subscriber-is-able-to-see-25k-mapstack-button",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see 25k mapstack",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1279391462,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 15900653935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 13
    }
  ],
  "location": "ThenSteps.i_should_see_k_mapstack(int)"
});
formatter.result({
  "duration": 236497940,
  "status": "passed"
});
formatter.after({
  "duration": 36948,
  "status": "passed"
});
formatter.uri("POIs/POI.feature");
formatter.feature({
  "line": 2,
  "name": "Map features",
  "description": "In order to choose and display POIs by one or more categories\r\nAs a getamap user \r\nI should be able to filter POI by Type",
  "id": "map-features",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Verify POI Categories displayed on POI Panel for guest user",
  "description": "",
  "id": "map-features;verify-poi-categories-displayed-on-poi-panel-for-guest-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I open Map features menu",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should be able to see the POI Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1281529507,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
