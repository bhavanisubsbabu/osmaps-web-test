$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ImportExportRoute/ExportRoute.feature");
formatter.feature({
  "line": 2,
  "name": "Logged in user should be able to export a route",
  "description": "",
  "id": "logged-in-user-should-be-able-to-export-a-route",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "A logged in user should be able to export route",
  "description": "",
  "id": "logged-in-user-should-be-able-to-export-a-route;a-logged-in-user-should-be-able-to-export-route",
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
  "name": "I click on export button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "route should be exported as gpx file",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 14361128742,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14261795871,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 11050274858,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.i_click_on_export_button()"
});
formatter.result({
  "duration": 2776960847,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.route_should_be_exported_as_gpx_file()"
});
formatter.result({
  "duration": 32843,
  "status": "passed"
});
formatter.after({
  "duration": 103867,
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
  "duration": 3188749122,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 15750853310,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Aerial_map_stack()"
});
formatter.result({
  "duration": 630876792,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Zoom_map_stack()"
});
formatter.result({
  "duration": 251361149,
  "status": "passed"
});
formatter.after({
  "duration": 35307,
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
  "duration": 5953845743,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21703218642,
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
  "duration": 421566132,
  "status": "passed"
});
formatter.after({
  "duration": 29969,
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
  "duration": 5353578070,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 206502,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 551342264,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 466347539,
  "status": "passed"
});
formatter.after({
  "duration": 32844,
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
  "duration": 5261786839,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17962341480,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 213408271,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 280460299,
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
  "duration": 4226323071,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 17800827240,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 197930462,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 302469404,
  "status": "passed"
});
formatter.after({
  "duration": 73487,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should select POIs By type for a location",
  "description": "",
  "id": "map-features;user-should-select-pois-by-type-for-a-location",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@regression"
    }
  ]
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
  "duration": 5122284168,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18110272969,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_search_for_location()"
});
formatter.result({
  "duration": 479409313,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_selected_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 7084981588,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_list_of_clustered_POIs_for_that_location()"
});
formatter.result({
  "duration": 339139342,
  "status": "passed"
});
formatter.after({
  "duration": 28327,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User should be able to view a POI",
  "description": "",
  "id": "map-features;user-should-be-able-to-view-a-poi",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@regression"
    }
  ]
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
  "duration": 4321928640,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18445233002,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 7298268338,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 10499408000,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_a_right_side_panel_view_with_details()"
});
formatter.result({
  "duration": 351844766,
  "status": "passed"
});
formatter.after({
  "duration": 43927,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "User should be able to pin POI to map and see when logs back to the application",
  "description": "",
  "id": "map-features;user-should-be-able-to-pin-poi-to-map-and-see-when-logs-back-to-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@regression"
    }
  ]
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
  "duration": 3996713619,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17725873118,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 2400341570,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 8481865992,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 3122160595,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 15198827906,
  "status": "passed"
});
formatter.after({
  "duration": 30380,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "User should be able to unpin POI from map",
  "description": "",
  "id": "map-features;user-should-be-able-to-unpin-poi-from-map",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 50,
      "name": "@regression"
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
  "duration": 4628943144,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18148588355,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 2453319840,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 4583081603,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 533302269,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "duration": 3307356485,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]\"}\n  (Session info: chrome\u003d46.0.2490.71)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027411b314\u0027, time: \u00272015-07-30 03:03:16\u0027\nSystem info: host: \u0027OSVM944\u0027, ip: \u002710.160.176.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 923746a1ded2d1d549c88bb7bcc45e17\n*** Element info: {Using\u003dxpath, value\u003d//*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]}\nCommand duration or timeout: 1.42 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webdriver.remote.sessionid\u003d9950af23-e8ac-4a6c-affd-c44d66bc38a3, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9950af23-e8ac-4a6c-affd-c44d66bc38a3\n*** Element info: {Using\u003dxpath, value\u003d//*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]}\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.elementDoesntExists(Html5Page.java:661)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible(ThenSteps.java:589)\r\n\tat ✽.Then POI should be removed from map and when user refreshes POI shouldn\u0027t br visible(POIs/POI.feature:58)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.elementDoesntExists(Html5Page.java:661)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible(ThenSteps.java:589)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]\"}\n  (Session info: chrome\u003d46.0.2490.71)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027411b314\u0027, time: \u00272015-07-30 03:03:16\u0027\nSystem info: host: \u0027OSVM944\u0027, ip: \u002710.160.176.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 923746a1ded2d1d549c88bb7bcc45e17\n*** Element info: {Using\u003dxpath, value\u003d//*[starts-with(@id,\u0027OpenLayers_Geometry_Point_\u0027)]}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.GeneratedConstructorAccessor37.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor11.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1032506230,
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
  "duration": 3880531322,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 125626,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 5868166236,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 19410724154,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 70078947,
  "status": "passed"
});
formatter.after({
  "duration": 35307,
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
  "duration": 4352553770,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17507183236,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 5012698856,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 18728877457,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 40942027,
  "status": "passed"
});
formatter.after({
  "duration": 28738,
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
  "line": 8,
  "name": "Discover routes as  guest",
  "description": "",
  "id": "discover-route;discover-routes-as--guest",
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
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4076139764,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 140405,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 11716115378,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 2111720126,
  "status": "passed"
});
formatter.after({
  "duration": 29148,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Discover routes as registered user",
  "description": "",
  "id": "discover-route;discover-routes-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4259500535,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17515122690,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 12727031665,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 2186452966,
  "status": "passed"
});
formatter.after({
  "duration": 30791,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Discover routes as  subscriber",
  "description": "",
  "id": "discover-route;discover-routes-as--subscriber",
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
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see available public routes in that map view area",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4050397199,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 18250561005,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 10482171844,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 1958375653,
  "status": "passed"
});
formatter.after({
  "duration": 32843,
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
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@demo"
    },
    {
      "line": 7,
      "name": "@smoke"
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
  "duration": 4849685731,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17312449657,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 27452596878,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 11048211478,
  "status": "passed"
});
formatter.after({
  "duration": 318579,
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
  "duration": 6486408217,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 17925995048,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 5695540293,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 10333686125,
  "status": "passed"
});
formatter.after({
  "duration": 52549,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Create route type as run",
  "description": "",
  "id": "create-route;create-route-type-as-run",
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
  "name": "Save the route as run",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 5189074271,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 18174860108,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 5978118573,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_run()"
});
formatter.result({
  "duration": 17381293287,
  "status": "passed"
});
formatter.after({
  "duration": 19706,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Create route type as cycle",
  "description": "",
  "id": "create-route;create-route-type-as-cycle",
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
  "name": "Save the route as cycle",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4290986571,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 12970073610,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 5583648150,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_cycle()"
});
formatter.result({
  "duration": 14968004483,
  "status": "passed"
});
formatter.after({
  "duration": 31612,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Create route type as other",
  "description": "",
  "id": "create-route;create-route-type-as-other",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 35,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Save the route as other",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3982711295,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 12287372578,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 6033409420,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_other()"
});
formatter.result({
  "duration": 13281903350,
  "status": "passed"
});
formatter.after({
  "duration": 290663,
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
  "line": 8,
  "name": "delete route as subscribed user",
  "description": "",
  "id": "delete-route;delete-route-as-subscribed-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@smoke"
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
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be able to delete any route from my routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4000743900,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 12632725458,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 21788479808,
  "status": "passed"
});
formatter.after({
  "duration": 21759,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "delete route as registered user",
  "description": "",
  "id": "delete-route;delete-route-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I should be able to delete any route from my routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 5332674141,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17833073188,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 16583202712,
  "status": "passed"
});
formatter.after({
  "duration": 25043,
  "status": "passed"
});
formatter.uri("Routing/edit_Route.feature");
formatter.feature({
  "line": 2,
  "name": "User should able to edit routes",
  "description": "",
  "id": "user-should-able-to-edit-routes",
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
  "name": "User should be able to edit route by adding way points",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-adding-way-points",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
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
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on edit link, add way points and save",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4122702099,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18157233939,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 4322534599,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_way_points_and_save()"
});
formatter.result({
  "duration": 14295045590,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 3321935208,
  "status": "passed"
});
formatter.after({
  "duration": 23812,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User should be able to edit route by deleting way points",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-deleting-way-points",
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
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on edit link, delete way points and save",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4193600486,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17848352293,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 4406571941,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_delete_way_points_and_save()"
});
formatter.result({
  "duration": 13956321717,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 3869120334,
  "status": "passed"
});
formatter.after({
  "duration": 25453,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to edit route by updating styling",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-styling",
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
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I click on edit link, add styling and save",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4544694783,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18147329225,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 2161226451,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_styling_and_save()"
});
formatter.result({
  "duration": 15695869136,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 4745861540,
  "status": "passed"
});
formatter.after({
  "duration": 20527,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should be able to edit route by updating route type as running",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-route-type-as-running",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on edit link, change route type running and save",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4316761980,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17888575053,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 2132560011,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_running_and_save()"
});
formatter.result({
  "duration": 10824391476,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 2918188200,
  "status": "passed"
});
formatter.after({
  "duration": 20938,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "User should be able to edit route by updating route type as cycling",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-route-type-as-cycling",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on edit link, change route type cycling and save",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3860678378,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17659421712,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 4473532419,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_cycling_and_save()"
});
formatter.result({
  "duration": 11185795279,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 2956267525,
  "status": "passed"
});
formatter.after({
  "duration": 20116,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "User should be able to edit route by updating route type as other",
  "description": "",
  "id": "user-should-able-to-edit-routes;user-should-be-able-to-edit-route-by-updating-route-type-as-other",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I navigate to my routes to select a route for editing",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I click on edit link, change route type other and save",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "route is saved with updates",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 4011887217,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17517988677,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 2266395983,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_other_and_save()"
});
formatter.result({
  "duration": 10792956757,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 4713219832,
  "status": "passed"
});
formatter.after({
  "duration": 45980,
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
      "name": "@demo"
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
  "duration": 4176434944,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 142047,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 11026809152,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 4509071725,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 3814047483,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 772076640,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 355997800,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 1704493371,
  "status": "passed"
});
formatter.after({
  "duration": 20937,
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
  "duration": 4312412298,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17589483170,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10450861931,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 3885965654,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 3433256289,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 695248398,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 413272382,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 1388634992,
  "status": "passed"
});
formatter.after({
  "duration": 19706,
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
  "duration": 3294606312,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 17940705146,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 14041841112,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 4348590818,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 3610586622,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 855971114,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 567838214,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 1410720459,
  "status": "passed"
});
formatter.after({
  "duration": 20527,
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
formatter.scenarioOutline({
  "line": 9,
  "name": "Search a place as guest user",
  "description": "",
  "id": "search-popup;search-a-place-as-guest-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
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
  "name": "I search \"\u003csearch-area\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "search-popup;search-a-place-as-guest-user;",
  "rows": [
    {
      "cells": [
        "search-area"
      ],
      "line": 15,
      "id": "search-popup;search-a-place-as-guest-user;;1"
    },
    {
      "cells": [
        "Manchester"
      ],
      "line": 16,
      "id": "search-popup;search-a-place-as-guest-user;;2"
    }
  ],
  "keyword": "Examples"
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
      "line": 8,
      "name": "@smoke"
    },
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
  "duration": 5380484520,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 142458,
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
  "duration": 10743278417,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 139641844,
  "status": "passed"
});
formatter.after({
  "duration": 18474,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Search a place as registered User",
  "description": "",
  "id": "search-popup;search-a-place-as-registered-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "I search \"\u003csearch-area\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "search-popup;search-a-place-as-registered-user;",
  "rows": [
    {
      "cells": [
        "search-area"
      ],
      "line": 25,
      "id": "search-popup;search-a-place-as-registered-user;;1"
    },
    {
      "cells": [
        "Newbury"
      ],
      "line": 26,
      "id": "search-popup;search-a-place-as-registered-user;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 5059058383,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 20225059426,
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
  "duration": 11757407187,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 141893251,
  "status": "passed"
});
formatter.after({
  "duration": 24633,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Search a place as subscriber",
  "description": "",
  "id": "search-popup;search-a-place-as-subscriber",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "I search \"\u003csearch-area\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I should be able to see dropped pin in that searched area",
  "keyword": "Then "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "search-popup;search-a-place-as-subscriber;",
  "rows": [
    {
      "cells": [
        "search-area"
      ],
      "line": 36,
      "id": "search-popup;search-a-place-as-subscriber;;1"
    },
    {
      "cells": [
        "Birmingham"
      ],
      "line": 37,
      "id": "search-popup;search-a-place-as-subscriber;;2"
    }
  ],
  "keyword": "Examples"
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
  "duration": 4124901778,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 17570743203,
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
  "duration": 11083647328,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 148160160,
  "status": "passed"
});
formatter.after({
  "duration": 18474,
  "status": "passed"
});
formatter.uri("Sharing/ShareRoute.feature");
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
  "duration": 6103589361,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 19778977835,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 11367535235,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_and_share()"
});
formatter.result({
  "duration": 5393828337,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 664171672,
  "status": "passed"
});
formatter.after({
  "duration": 18885,
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
  "duration": 4209856269,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16970982548,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 4802660306,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_multiple_email_addresses_and_share()"
});
formatter.result({
  "duration": 12934431668,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 4547627278,
  "status": "passed"
});
formatter.after({
  "duration": 18474,
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
  "duration": 4035554498,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17210251210,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 11660554805,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share()"
});
formatter.result({
  "duration": 5692539237,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027shared-email-message\u0027]\"}\n  (Session info: chrome\u003d46.0.2490.71)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027411b314\u0027, time: \u00272015-07-30 03:03:16\u0027\nSystem info: host: \u0027OSVM944\u0027, ip: \u002710.160.176.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 923746a1ded2d1d549c88bb7bcc45e17\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027shared-email-message\u0027]}\nCommand duration or timeout: 1.84 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, webdriver.remote.sessionid\u003d9950af23-e8ac-4a6c-affd-c44d66bc38a3, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 9950af23-e8ac-4a6c-affd-c44d66bc38a3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027shared-email-message\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.set_textBox(Html5Page.java:609)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.shareRouteEmailText(Html5Page.java:1530)\r\n\tat uk.co.ordnancesurvey.stepdefs.ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share(ShareRoute_steps.java:51)\r\n\tat ✽.And I clicked on Share icon, select email, enter email address, update text and share(Sharing/ShareRoute.feature:25)\r\nCaused by: org.openqa.selenium.remote.ScreenshotException: Screen shot has been taken\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:138)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.set_textBox(Html5Page.java:609)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.shareRouteEmailText(Html5Page.java:1530)\r\n\tat uk.co.ordnancesurvey.stepdefs.ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share(ShareRoute_steps.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\u0027shared-email-message\u0027]\"}\n  (Session info: chrome\u003d46.0.2490.71)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 37 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027411b314\u0027, time: \u00272015-07-30 03:03:16\u0027\nSystem info: host: \u0027OSVM944\u0027, ip: \u002710.160.176.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir12968_18958}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d46.0.2490.71, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 923746a1ded2d1d549c88bb7bcc45e17\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027shared-email-message\u0027]}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: driver.version: EventFiringWebDriver\r\n\tat sun.reflect.GeneratedConstructorAccessor37.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor11.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy1.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:48)\r\n\tat org.openqa.selenium.remote.server.handler.FindElement.call(FindElement.java:1)\r\n\tat java.util.concurrent.FutureTask.run(Unknown Source)\r\n\tat org.openqa.selenium.remote.server.DefaultSession$1.run(DefaultSession.java:176)\r\n\tat java.util.concurrent.ThreadPoolExecutor.runWorker(Unknown Source)\r\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(Unknown Source)\r\n\tat java.lang.Thread.run(Unknown Source)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2039430415,
  "status": "passed"
});
});