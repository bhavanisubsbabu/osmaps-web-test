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
  "duration": 10404961433,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 16355592604,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_National_Park_Pathways_from_mapstack()"
});
formatter.result({
  "duration": 5209890187,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_create_custom_route_from_routes()"
});
formatter.result({
  "duration": 781833916,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_zoom_in_map_till_snap_is_enabled()"
});
formatter.result({
  "duration": 7855303384,
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
  "duration": 16802067353,
  "status": "passed"
});
formatter.after({
  "duration": 340740,
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
  "duration": 1412794777,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15925787060,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Aerial_map_stack()"
});
formatter.result({
  "duration": 241715380,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Zoom_map_stack()"
});
formatter.result({
  "duration": 108705353,
  "status": "passed"
});
formatter.after({
  "duration": 36948,
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
  "duration": 1025785459,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20951167735,
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
  "duration": 221438838,
  "status": "passed"
});
formatter.after({
  "duration": 25042,
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
  "duration": 1044191621,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5029049592,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 82174369,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 37731504,
  "status": "passed"
});
formatter.after({
  "duration": 29969,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify POI Categories displayed on POI Panel for registered user",
  "description": "",
  "id": "map-features;verify-poi-categories-displayed-on-poi-panel-for-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I open Map features menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see the POI Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1085543598,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15936885769,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 77316555,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 42379126,
  "status": "passed"
});
formatter.after({
  "duration": 39411,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify POI Categories displayed on POI Panel",
  "description": "",
  "id": "map-features;verify-poi-categories-displayed-on-poi-panel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I open Map features menu",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should be able to see the POI Categories",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1057758032,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20920537188,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 86408177,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 37038937,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should select POIs By type for a location",
  "description": "",
  "id": "map-features;user-should-select-pois-by-type-for-a-location",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I search for location",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "from Places I selected POI Castles and Attractions",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should list of clustered POIs for that location",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1046786589,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15921006836,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_search_for_location()"
});
formatter.result({
  "duration": 179416463,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_selected_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 5362008795,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_list_of_clustered_POIs_for_that_location()"
});
formatter.result({
  "duration": 29142372,
  "status": "passed"
});
formatter.after({
  "duration": 93601,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should be able to view a POI",
  "description": "",
  "id": "map-features;user-should-be-able-to-view-a-poi",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "from Places I select POI Castles and Attractions",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "click on a POI and select more info",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should see a right side panel view with details",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1206775077,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15908716355,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 5498782570,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 5793199470,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_a_right_side_panel_view_with_details()"
});
formatter.result({
  "duration": 552998950,
  "status": "passed"
});
formatter.after({
  "duration": 29558,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User should be able to pin POI to map and see when logs back to the application",
  "description": "",
  "id": "map-features;user-should-be-able-to-pin-poi-to-map-and-see-when-logs-back-to-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "from Places I select POI Castles and Attractions",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "click on a POI and select more info",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "select pin POI to map",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should see POI on map after logging into the application as registered user",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 2323881128,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15877742605,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 5569301962,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 756473768,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 188151744,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 13241496567,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 3 seconds waiting for presence of element located by: By.xpath: //*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:259)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:54)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.verifyPinOnMap(Html5Page.java:815)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application(ThenSteps.java:581)\r\n\tat ✽.Then I should see POI on map after logging into the application as registered user(POIs/POI.feature:49)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir8124_27268}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 552b540d52eb7b08e2490f269c7807fe\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat sun.reflect.GeneratedMethodAccessor21.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:184)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:106)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$3.apply(ExpectedConditions.java:103)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:54)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.verifyPinOnMap(Html5Page.java:815)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application(ThenSteps.java:581)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 417218249,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User should be able to unpin POI from map",
  "description": "",
  "id": "map-features;user-should-be-able-to-unpin-poi-from-map",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "from Places I select POI Castles and Attractions",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click on a POI and select more info",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "unpin POI from map",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "POI should be removed from map and when user refreshes POI shouldn\u0027t br visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 993246763,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15975306554,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 5531998231,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1329319434,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 10197338198,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for element to be clickable: By.xpath: //*[contains(@class,\u0027unpin-from-map-icon\u0027)]\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: unknown\r\n\tat org.openqa.selenium.support.ui.FluentWait.timeoutException(FluentWait.java:259)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:71)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:726)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.unpinPOI(Html5Page.java:811)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.unpin_POI_from_map(WhenSteps.java:486)\r\n\tat ✽.And unpin POI from map(POIs/POI.feature:57)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.169\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir8124_27268}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 552b540d52eb7b08e2490f269c7807fe\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat sun.reflect.GeneratedMethodAccessor21.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:184)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:730)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:130)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$4.apply(ExpectedConditions.java:126)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$17.apply(ExpectedConditions.java:528)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$17.apply(ExpectedConditions.java:521)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:71)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:726)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.unpinPOI(Html5Page.java:811)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.unpin_POI_from_map(WhenSteps.java:486)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:34)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:30)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:89)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:40)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:94)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 412056642,
  "status": "passed"
});
formatter.uri("Print/print.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to Print maps and routes",
  "description": "",
  "id": "user-should-be-able-to-print-maps-and-routes",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "A user should be able to hide and open preview window",
  "description": "",
  "id": "user-should-be-able-to-print-maps-and-routes;a-user-should-be-able-to-hide-and-open-preview-window",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select print option from tool bar",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on hide link on preview window",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "window should be minimised with show link",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on show link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "window should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1112926844,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5030837866,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 456253189,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.click_on_hide_link_on_preview_window()"
});
formatter.result({
  "duration": 94543672,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.window_should_be_minimised_with_show_link()"
});
formatter.result({
  "duration": 67918677,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_show_link()"
});
formatter.result({
  "duration": 174870241,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.window_should_be_displayed()"
});
formatter.result({
  "duration": 36421088,
  "status": "passed"
});
formatter.after({
  "duration": 32843,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "A guest user should be able to print map",
  "description": "",
  "id": "user-should-be-able-to-print-maps-and-routes;a-guest-user-should-be-able-to-print-map",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select print option from tool bar",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Preview",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see preview of the map",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1357485152,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5028309404,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 372079123,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 13283054630,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 29263068,
  "status": "passed"
});
formatter.after({
  "duration": 26274,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "A registered user should be able to print map",
  "description": "",
  "id": "user-should-be-able-to-print-maps-and-routes;a-registered-user-should-be-able-to-print-map",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select print option from tool bar",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Preview",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see preview of the map",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3960314779,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17374962283,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 326079523,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 10713957113,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 29498713,
  "status": "passed"
});
formatter.after({
  "duration": 24632,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "A registered user should be able to print route",
  "description": "",
  "id": "user-should-be-able-to-print-maps-and-routes;a-registered-user-should-be-able-to-print-route",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 46,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I navigate to My Routes",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I select a route in edit mode",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I select print preview",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should see route preview",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3385569995,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17459632271,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_navigate_to_My_Routes()"
});
formatter.result({
  "duration": 10917550164,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_a_route_in_edit_mode()"
});
formatter.result({
  "duration": 775959216,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_preview()"
});
formatter.result({
  "duration": 9657383874,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_route_preview()"
});
formatter.result({
  "duration": 30663390,
  "status": "passed"
});
formatter.after({
  "duration": 31201,
  "status": "passed"
});
formatter.uri("Register/UserRegistration.feature");
formatter.feature({
  "line": 1,
  "name": "User Registration",
  "description": "As a user \r\nIn order to use addtional map services\r\nI want to able to register to OS Maps",
  "id": "user-registration",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "Guest user to register",
  "description": "",
  "id": "user-registration;guest-user-to-register",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I can access OS maps as a guest user to register",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I get to the login box",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be given an option to upgrade to a Registered user by completing the registration process within the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_can_access_OS_maps_as_a_guest_user_to_register()"
});
formatter.result({
  "duration": 3465623972,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.I_get_to_the_login_box()"
});
formatter.result({
  "duration": 13948986994,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_given_an_option_to_upgrade_to_a_Registered_user_by_completing_the_registration_process_within_the_application()"
});
formatter.result({
  "duration": 22279705108,
  "status": "passed"
});
formatter.after({
  "duration": 26274,
  "status": "passed"
});
formatter.uri("Routing/DiscoverRoute.feature");
formatter.feature({
  "line": 2,
  "name": "Discover route",
  "description": "As a user \r\nI order to plan my journy\r\nI should be able to discover existing routes",
  "id": "discover-route",
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
  "name": "Discover routes as  guest",
  "description": "",
  "id": "discover-route;discover-routes-as--guest",
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
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3391043607,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5035886167,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9362656612,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 15981155,
  "status": "passed"
});
formatter.after({
  "duration": 283677,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Discover routes as registered user",
  "description": "",
  "id": "discover-route;discover-routes-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3560437774,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17926168033,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9294490795,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 15118629,
  "status": "passed"
});
formatter.after({
  "duration": 37769,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Discover routes as  subscriber",
  "description": "",
  "id": "discover-route;discover-routes-as--subscriber",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4006185472,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 22338557616,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9393502278,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 8388793,
  "status": "passed"
});
formatter.after({
  "duration": 19706,
  "status": "passed"
});
formatter.uri("Routing/create_route.feature");
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
  "duration": 2998586542,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16812428337,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7644705032,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 16774811372,
  "status": "passed"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Create Route and Save as Subscriber",
  "description": "",
  "id": "create-route;create-route-and-save-as-subscriber",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Save the route.",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1087530570,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20885380125,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7556925680,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 16730964597,
  "status": "passed"
});
formatter.after({
  "duration": 22990,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create Route and Save as Subscriber",
  "description": "",
  "id": "create-route;create-route-and-save-as-subscriber",
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
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Save the route.",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 949333482,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20853168212,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7552033382,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 16724339856,
  "status": "passed"
});
formatter.after({
  "duration": 21348,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Create route type as run",
  "description": "",
  "id": "create-route;create-route-type-as-run",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Save the route as run",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1032502979,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20898701860,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7584093397,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_run()"
});
formatter.result({
  "duration": 13998248264,
  "status": "passed"
});
formatter.after({
  "duration": 17653,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Create route type as cycle",
  "description": "",
  "id": "create-route;create-route-type-as-cycle",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 34,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Save the route as cycle",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1074642355,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 15710147385,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7572670780,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_cycle()"
});
formatter.result({
  "duration": 17981047011,
  "status": "passed"
});
formatter.after({
  "duration": 20937,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Create route type as other",
  "description": "",
  "id": "create-route;create-route-type-as-other",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Save the route as other",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 993908129,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 15828368439,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 7536862204,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 20116,
  "status": "passed"
});
formatter.uri("Routing/delete_route.feature");
formatter.feature({
  "line": 2,
  "name": "delete Route",
  "description": "As a getamap registered/subscriber user\r\nIn order to remove routes\r\nI should  be to able to delete routes which are not required",
  "id": "delete-route",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "delete route as subscribed user",
  "description": "",
  "id": "delete-route;delete-route-as-subscribed-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I should be able to delete any route from my routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1095836845,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20892938413,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 15350199046,
  "status": "passed"
});
formatter.after({
  "duration": 18474,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "delete route as registered user",
  "description": "",
  "id": "delete-route;delete-route-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should be able to delete any route from my routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1115238956,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15850354842,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 15290614971,
  "status": "passed"
});
formatter.after({
  "duration": 20527,
  "status": "passed"
});
formatter.uri("Routing/getDirectionsAB.feature");
formatter.feature({
  "line": 2,
  "name": "A-B routing",
  "description": "As a user \r\nIn order to find a route \r\nI should be able to get directions from start and end point",
  "id": "a-b-routing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "Guest user should be able to do A-B Car routing",
  "description": "",
  "id": "a-b-routing;guest-user-should-be-able-to-do-a-b-car-routing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@guestUserFlow,"
    },
    {
      "line": 8,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I open A-B Routing window",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select car icon",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see A-B car directions",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1048786695,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5019257193,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10078101901,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1374463898,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1386295815,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 203647241,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 159592737,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 635138425,
  "status": "passed"
});
formatter.after({
  "duration": 20116,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Registered user should be able to do A-B car routing",
  "description": "",
  "id": "a-b-routing;registered-user-should-be-able-to-do-a-b-car-routing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@registeredUserFlow"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I open A-B Routing window",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select car icon",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to see A-B car directions",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1224340472,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15838955214,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10086200448,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1377165603,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1387797127,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 134437444,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 156176708,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 632899799,
  "status": "passed"
});
formatter.after({
  "duration": 32022,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Subscriber user should be able to do A-B car routing",
  "description": "",
  "id": "a-b-routing;subscriber-user-should-be-able-to-do-a-b-car-routing",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@subscriberUserFlow"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I open A-B Routing window",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter start location",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter finish location",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select car icon",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on GetDirections button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should be able to see A-B car directions",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1082108275,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 20865130268,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10086866740,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1387726106,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1371271197,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 117505498,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 134927617,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 631489214,
  "status": "passed"
});
formatter.after({
  "duration": 25042,
  "status": "passed"
});
formatter.uri("Search/Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search popup",
  "description": "As a user\r\nIn order to view certain region on the map\r\nI should be able to search a location/place on the map",
  "id": "search-popup",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenario({
  "line": 16,
  "name": "Search a place as guest user",
  "description": "",
  "id": "search-popup;search-a-place-as-guest-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I search \"Manchester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1120152192,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 5020120540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10192841651,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 16011,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Search a place as registered User",
  "description": "",
  "id": "search-popup;search-a-place-as-registered-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I search \"Newbury\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1078821973,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15983999550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newbury",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10182702765,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 15189,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Search a place as subscriber",
  "description": "",
  "id": "search-popup;search-a-place-as-subscriber;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "I search \"Birmingham\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 1007508614,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 15819509998,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Birmingham",
      "offset": 10
    }
  ],
  "location": "WhenSteps.i_search(String)"
});
formatter.result({
  "duration": 10176461460,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 15189,
  "status": "passed"
});
});