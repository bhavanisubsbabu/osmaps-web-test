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
  "duration": 11062173898,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 16101504199,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_National_Park_Pathways_from_mapstack()"
});
formatter.result({
  "duration": 5335968628,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_select_create_custom_route_from_routes()"
});
formatter.result({
  "duration": 904613345,
  "status": "passed"
});
formatter.match({
  "location": "CreateDPN_steps.i_zoom_in_map_till_snap_is_enabled()"
});
formatter.result({
  "duration": 4924162722,
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
  "duration": 7909625701,
  "status": "passed"
});
formatter.after({
  "duration": 838335,
  "status": "passed"
});
formatter.uri("ImportExportRoute/ExportRoute.feature");
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
  "duration": 2460854239,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16429635094,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2604954633,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.i_click_on_export_button()"
});
formatter.result({
  "duration": 2210099758,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.route_should_be_exported_as_gpx_file()"
});
formatter.result({
  "duration": 62403,
  "status": "passed"
});
formatter.after({
  "duration": 51318,
  "status": "passed"
});
formatter.uri("ImportExportRoute/ImportRoute.feature");
formatter.feature({
  "line": 2,
  "name": "A logged in user should be able to import route",
  "description": "",
  "id": "a-logged-in-user-should-be-able-to-import-route",
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
  "name": "user should be able to import a route",
  "description": "",
  "id": "a-logged-in-user-should-be-able-to-import-route;user-should-be-able-to-import-a-route",
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
  "name": "I navigate to importGPX panel",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "select a gpx file and clicked on save",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "route should be added to the application",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 3414058982,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16177132509,
  "status": "passed"
});
formatter.match({
  "location": "ImportRoutes_steps.i_navigate_to_importGPX_panel()"
});
formatter.result({
  "duration": 331593029,
  "status": "passed"
});
formatter.match({
  "location": "ImportRoutes_steps.select_a_gpx_file_and_clicked_on_save()"
});
formatter.result({
  "duration": 61254627571,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 60 seconds waiting for element to be clickable: By.xpath: //*[@id\u003d\u0027route-import-edit-route-details-button\u0027]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.191\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:68)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.importRoute(Html5Page.java:1583)\r\n\tat uk.co.ordnancesurvey.stepdefs.ImportRoutes_steps.select_a_gpx_file_and_clicked_on_save(ImportRoutes_steps.java:32)\r\n\tat ✽.And select a gpx file and clicked on save(ImportExportRoute/ImportRoute.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ImportRoutes_steps.route_should_be_added_to_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1316255033,
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
  "duration": 2542721205,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17052908698,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Aerial_map_stack()"
});
formatter.result({
  "duration": 307540785,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Zoom_map_stack()"
});
formatter.result({
  "duration": 99875564,
  "status": "passed"
});
formatter.after({
  "duration": 29559,
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
  "duration": 2318279846,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21358703841,
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
  "duration": 279787058,
  "status": "passed"
});
formatter.after({
  "duration": 29970,
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
  "duration": 2349179175,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 131375,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 122953582,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 84191477,
  "error_message": "java.lang.AssertionError: Failed:, Category Live update not found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.verify_poi_categories_exist(Html5Page.java:599)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_see_the_POI_Categories(ThenSteps.java:216)\r\n\tat ✽.Then I should be able to see the POI Categories(POIs/POI.feature:11)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1957955580,
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
  "duration": 2291237595,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16307232465,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 87007411,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 49812771,
  "error_message": "java.lang.AssertionError: Failed:, Category Live update not found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.verify_poi_categories_exist(Html5Page.java:599)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_see_the_POI_Categories(ThenSteps.java:216)\r\n\tat ✽.Then I should be able to see the POI Categories(POIs/POI.feature:17)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1109752888,
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
  "duration": 2304030617,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21390878737,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 96141648,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 49859984,
  "error_message": "java.lang.AssertionError: Failed:, Category Live update not found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.verify_poi_categories_exist(Html5Page.java:599)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_see_the_POI_Categories(ThenSteps.java:216)\r\n\tat ✽.Then I should be able to see the POI Categories(POIs/POI.feature:24)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1971474447,
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
  "duration": 2375546078,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16387527040,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_search_for_location()"
});
formatter.result({
  "duration": 211148293,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_selected_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1088109317,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_list_of_clustered_POIs_for_that_location()"
});
formatter.result({
  "duration": 63807050,
  "status": "passed"
});
formatter.after({
  "duration": 39823,
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
  "duration": 2389230395,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16349732180,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 977159688,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1925419814,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_a_right_side_panel_view_with_details()"
});
formatter.result({
  "duration": 706100425,
  "status": "passed"
});
formatter.after({
  "duration": 149439,
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
      "name": "@demo"
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
  "duration": 2385807263,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16282871079,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1304787663,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1217438267,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 533616938,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 15539981222,
  "status": "passed"
});
formatter.after({
  "duration": 29149,
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
  "duration": 2352243080,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16386747413,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1028720973,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1692808179,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 822422048,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "duration": 2614659528,
  "status": "passed"
});
formatter.after({
  "duration": 28328,
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
  "duration": 2301513149,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 146155,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 626814973,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.click_on_hide_link_on_preview_window()"
});
formatter.result({
  "duration": 140107013,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.window_should_be_minimised_with_show_link()"
});
formatter.result({
  "duration": 118638334,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_show_link()"
});
formatter.result({
  "duration": 286537255,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.window_should_be_displayed()"
});
formatter.result({
  "duration": 172121385,
  "status": "passed"
});
formatter.after({
  "duration": 73077,
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
  "duration": 2369559086,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 142049,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 686062499,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 9072896948,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 32562041,
  "status": "passed"
});
formatter.after({
  "duration": 39001,
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
  "duration": 2361633086,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16542283152,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 648714724,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 8944586972,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 42950495,
  "status": "passed"
});
formatter.after({
  "duration": 30380,
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
  "duration": 2396718753,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 362922,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9544964428,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 30417760,
  "status": "passed"
});
formatter.after({
  "duration": 290666,
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
  "duration": 2348366704,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16317835634,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9531993229,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 20376216,
  "status": "passed"
});
formatter.after({
  "duration": 43107,
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
  "duration": 2291646498,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21435675046,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9588147292,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 19606442,
  "status": "passed"
});
formatter.after({
  "duration": 36539,
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
  "duration": 2351371491,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 23401500381,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 5312437366,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 2682482538,
  "status": "passed"
});
formatter.after({
  "duration": 34076,
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
  "duration": 2672190973,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21350161201,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3507249625,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 2462080951,
  "status": "passed"
});
formatter.after({
  "duration": 22169,
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
  "duration": 2492877233,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21276035900,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3563991590,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 2473517529,
  "status": "passed"
});
formatter.after({
  "duration": 35307,
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
  "duration": 2453737015,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21220196315,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3596542547,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_run()"
});
formatter.result({
  "duration": 10350448583,
  "status": "passed"
});
formatter.after({
  "duration": 21348,
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
  "duration": 2390113069,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 16151535791,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3539383057,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_cycle()"
});
formatter.result({
  "duration": 7472270701,
  "status": "passed"
});
formatter.after({
  "duration": 24222,
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
  "duration": 2346629684,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 16205459357,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3542945363,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_other()"
});
formatter.result({
  "duration": 11732639346,
  "status": "passed"
});
formatter.after({
  "duration": 21759,
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
  "duration": 2344442296,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 16188310443,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 18197271840,
  "status": "passed"
});
formatter.after({
  "duration": 21349,
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
  "duration": 2543080844,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16304424741,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 15405785660,
  "status": "passed"
});
formatter.after({
  "duration": 20938,
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
  "duration": 2343280040,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16340272381,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1389714428,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_way_points_and_save()"
});
formatter.result({
  "duration": 5175248924,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1767354700,
  "status": "passed"
});
formatter.after({
  "duration": 174482,
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
  "duration": 2420550945,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16694696690,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1607014752,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_delete_way_points_and_save()"
});
formatter.result({
  "duration": 6816925249,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 5241089819,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.xpath: //div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.191\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.confirmRouteSaved(Html5Page.java:1428)\r\n\tat uk.co.ordnancesurvey.stepdefs.EditRoute_steps.route_is_saved_with_added_way_points(EditRoute_steps.java:37)\r\n\tat ✽.Then route is saved with updates(Routing/edit_Route.feature:18)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]\"}\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.191\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir2544_28142}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b4d0bf6106a69e783770a5c9f75bef06\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.confirmRouteSaved(Html5Page.java:1428)\r\n\tat uk.co.ordnancesurvey.stepdefs.EditRoute_steps.route_is_saved_with_added_way_points(EditRoute_steps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 2263651371,
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
  "duration": 2610476065,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16324658087,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1656728992,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_styling_and_save()"
});
formatter.result({
  "duration": 8216271085,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1300511418,
  "status": "passed"
});
formatter.after({
  "duration": 509899,
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
  "duration": 2493564898,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16338635123,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1156967314,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_running_and_save()"
});
formatter.result({
  "duration": 3914279650,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1417824099,
  "status": "passed"
});
formatter.after({
  "duration": 36949,
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
  "duration": 2406648627,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16383320586,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1596264197,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_cycling_and_save()"
});
formatter.result({
  "duration": 3130200128,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1645801491,
  "status": "passed"
});
formatter.after({
  "duration": 29970,
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
  "duration": 2487230995,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16241610802,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1611108716,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_other_and_save()"
});
formatter.result({
  "duration": 3577818367,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 5220301825,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.xpath: //div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.191\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.confirmRouteSaved(Html5Page.java:1428)\r\n\tat uk.co.ordnancesurvey.stepdefs.EditRoute_steps.route_is_saved_with_added_way_points(EditRoute_steps.java:37)\r\n\tat ✽.Then route is saved with updates(Routing/edit_Route.feature:50)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]\"}\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.191\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir2544_28142}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: b4d0bf6106a69e783770a5c9f75bef06\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Saved in My Routes\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.confirmRouteSaved(Html5Page.java:1428)\r\n\tat uk.co.ordnancesurvey.stepdefs.EditRoute_steps.route_is_saved_with_added_way_points(EditRoute_steps.java:37)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1929208332,
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
  "duration": 2373892398,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 113722,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10203482989,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1653955754,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1763036167,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 491317569,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 284217260,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 784771291,
  "status": "passed"
});
formatter.after({
  "duration": 110027,
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
  "duration": 2501186272,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16196668337,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10210396994,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1660464959,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1657600170,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 184533010,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 197035366,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 1259818514,
  "status": "passed"
});
formatter.after({
  "duration": 31612,
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
  "duration": 3640316596,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21429682308,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10202666414,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1634206031,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1636458286,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 370725037,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 318110701,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 739937622,
  "status": "passed"
});
formatter.after({
  "duration": 22580,
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
      "line": 1,
      "name": "@regression"
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
  "duration": 2563571191,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 113311,
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
  "duration": 10363510924,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 62360697,
  "status": "passed"
});
formatter.after({
  "duration": 18885,
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
  "duration": 2349579047,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16240360279,
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
  "duration": 10306175309,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 62288030,
  "status": "passed"
});
formatter.after({
  "duration": 17243,
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
  "duration": 2345488777,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 21385173380,
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
  "duration": 10288147415,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 60467259,
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
  "duration": 2363363538,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16152481278,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2167213309,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_and_share()"
});
formatter.result({
  "duration": 1844688418,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2234933683,
  "status": "passed"
});
formatter.after({
  "duration": 25454,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User be able to share a route by email to multiple recipients",
  "description": "",
  "id": "logged-in-user-should-be-able-to-share-a-route-by-email,-facebook-and-twitter;user-be-able-to-share-a-route-by-email-to-multiple-recipients",
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
  "duration": 2311318218,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16094748666,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2489971389,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_multiple_email_addresses_and_share()"
});
formatter.result({
  "duration": 1862786104,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2223945420,
  "status": "passed"
});
formatter.after({
  "duration": 27917,
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
  "duration": 2363801179,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 16186783623,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2231662453,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share()"
});
formatter.result({
  "duration": 2172774564,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 279978783,
  "status": "passed"
});
formatter.after({
  "duration": 29560,
  "status": "passed"
});
});