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
  "duration": 11312717741,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 9200434763,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 3290888452,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.i_click_on_export_button()"
});
formatter.result({
  "duration": 7067335301,
  "status": "passed"
});
formatter.match({
  "location": "ExportRoute_steps.route_should_be_exported_as_gpx_file()"
});
formatter.result({
  "duration": 36949,
  "status": "passed"
});
formatter.after({
  "duration": 149437,
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
  "duration": 2581926751,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14482540100,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Aerial_map_stack()"
});
formatter.result({
  "duration": 288351719,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_Zoom_map_stack()"
});
formatter.result({
  "duration": 94574289,
  "status": "passed"
});
formatter.after({
  "duration": 31201,
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
  "duration": 2324535986,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14522117079,
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
  "duration": 317138446,
  "status": "passed"
});
formatter.after({
  "duration": 30791,
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
  "duration": 2320537317,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 160521,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 114158740,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 245975671,
  "status": "passed"
});
formatter.after({
  "duration": 41054,
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
  "duration": 2326261900,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14338454970,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 96408586,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 142846527,
  "status": "passed"
});
formatter.after({
  "duration": 46391,
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
  "duration": 2374209811,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14209199404,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 87962115,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 157595626,
  "status": "passed"
});
formatter.after({
  "duration": 50907,
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
  "duration": 2328669724,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14291082638,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_search_for_location()"
});
formatter.result({
  "duration": 244408636,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_selected_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1409589828,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_list_of_clustered_POIs_for_that_location()"
});
formatter.result({
  "duration": 49817104,
  "status": "passed"
});
formatter.after({
  "duration": 33664,
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
  "duration": 3394031554,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14342207315,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1466564716,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 2337523862,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_a_right_side_panel_view_with_details()"
});
formatter.result({
  "duration": 238811319,
  "status": "passed"
});
formatter.after({
  "duration": 73487,
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
  "duration": 2336548007,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14426016397,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 1272950271,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1006144158,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 451737205,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 15600140816,
  "status": "passed"
});
formatter.after({
  "duration": 32433,
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
  "duration": 2331766435,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 19982307322,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 983366929,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 1177980220,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 836820196,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "duration": 1596064964,
  "status": "passed"
});
formatter.after({
  "duration": 42696,
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
  "duration": 2361345507,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 160932,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "duration": 891565023,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "duration": 9563450762,
  "status": "passed"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "duration": 34850830,
  "status": "passed"
});
formatter.after({
  "duration": 39002,
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
  "duration": 2420954016,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 18661921907,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for element to be clickable: By.xpath: .//*[@id\u003d\u0027main-top-bar-sign-in\u0027]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:68)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:623)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.open_login_window(Html5Page.java:578)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.loginToApplicationAfterLogout(WhenSteps.java:83)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.i_login_as_registered_user(WhenSteps.java:93)\r\n\tat ✽.When I login as registered user(Print/print.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Print_steps.i_select_print_option_from_tool_bar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Print_steps.i_click_on_Preview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Print_steps.i_should_see_preview_of_the_map()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 682354125,
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
  "duration": 2559612613,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 139174,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9892288808,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 22976751,
  "status": "passed"
});
formatter.after({
  "duration": 36949,
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
  "duration": 2434403340,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 9336153477,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9469086259,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 21668767,
  "status": "passed"
});
formatter.after({
  "duration": 28738,
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
  "duration": 2338788740,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14482989231,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 9630363206,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_available_public_routes_in_that_map_view_area()"
});
formatter.result({
  "duration": 21682315,
  "status": "passed"
});
formatter.after({
  "duration": 29559,
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
  "duration": 2370812174,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14651682602,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 8457129250,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for presence of element located by: By.xpath: .//*[@id\u003d\u0027MyRouteCreate\u0027]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.plot_newRoute(Html5Page.java:191)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route(ThenSteps.java:47)\r\n\tat ✽.Then I should be able to create route(Routing/create_route.feature:11)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027MyRouteCreate\u0027]\"}\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir6824_8754}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 72b0003fb2078418587d0b9a94eaf3dc\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027MyRouteCreate\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:181)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$6.apply(ExpectedConditions.java:178)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementPresent(Html5Page.java:53)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.plot_newRoute(Html5Page.java:191)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route(ThenSteps.java:47)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:50)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 2330012193,
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
  "duration": 2555018659,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14557475337,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3721014364,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 7941182605,
  "status": "passed"
});
formatter.after({
  "duration": 52960,
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
  "duration": 2651851745,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14452784084,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3686789199,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_run()"
});
formatter.result({
  "duration": 15802730919,
  "status": "passed"
});
formatter.after({
  "duration": 50086,
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
  "duration": 2399288122,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 9271861927,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 3729893547,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_cycle()"
});
formatter.result({
  "duration": 12852571013,
  "status": "passed"
});
formatter.after({
  "duration": 20528,
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
  "duration": 2930277813,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 5094979083,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027main-top-bar-sign-in\u0027]\"}\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir6824_8754}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 72b0003fb2078418587d0b9a94eaf3dc\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027main-top-bar-sign-in\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.IsElementDisplayed(Html5Page.java:676)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.open_login_window(Html5Page.java:573)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.loginToApplicationAfterLogout(WhenSteps.java:83)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.i_login_as_subscriber_user(WhenSteps.java:98)\r\n\tat ✽.When I login as subscriber user(Routing/create_route.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_other()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 372114820,
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
  "duration": 2429500248,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 8992813069,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 20522448385,
  "status": "passed"
});
formatter.after({
  "duration": 21348,
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
  "duration": 2570844606,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14147041846,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_delete_any_route_from_my_routes()"
});
formatter.result({
  "duration": 15470991170,
  "status": "passed"
});
formatter.after({
  "duration": 24632,
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
  "duration": 2350694019,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14273908884,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 7218643901,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_way_points_and_save()"
});
formatter.result({
  "duration": 5175913146,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1643478350,
  "status": "passed"
});
formatter.after({
  "duration": 245503,
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
  "duration": 2390922527,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14298648498,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 6293788103,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_delete_way_points_and_save()"
});
formatter.result({
  "duration": 5901133093,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1620611624,
  "status": "passed"
});
formatter.after({
  "duration": 29970,
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
  "duration": 2396566645,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 19325224464,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1781635678,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_add_styling_and_save()"
});
formatter.result({
  "duration": 8460659083,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1411280847,
  "status": "passed"
});
formatter.after({
  "duration": 37359,
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
  "duration": 2450228876,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14258290261,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1782857038,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_running_and_save()"
});
formatter.result({
  "duration": 3920639541,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1474791958,
  "status": "passed"
});
formatter.after({
  "duration": 35717,
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
  "duration": 2449952172,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14223379903,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 1755289206,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_cycling_and_save()"
});
formatter.result({
  "duration": 3890087486,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1356537250,
  "status": "passed"
});
formatter.after({
  "duration": 21348,
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
  "duration": 2325393606,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14284741011,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_navigate_to_my_routes_to_select_a_route_for_editing()"
});
formatter.result({
  "duration": 6914523711,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.i_click_on_edit_link_change_route_type_other_and_save()"
});
formatter.result({
  "duration": 3183813187,
  "status": "passed"
});
formatter.match({
  "location": "EditRoute_steps.route_is_saved_with_added_way_points()"
});
formatter.result({
  "duration": 1527582611,
  "status": "passed"
});
formatter.after({
  "duration": 55013,
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
  "duration": 2449707079,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 149848,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10207066232,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1627146206,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1793605823,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 464068626,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 317185659,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 726500425,
  "status": "passed"
});
formatter.after({
  "duration": 19706,
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
  "duration": 2439859842,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14224647243,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10202980938,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1585647074,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1696519023,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 402719013,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 319026936,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 686317488,
  "status": "passed"
});
formatter.after({
  "duration": 23812,
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
  "duration": 2359397079,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14468259018,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_A_B_Routing_window()"
});
formatter.result({
  "duration": 10206372418,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_start_location()"
});
formatter.result({
  "duration": 1621124390,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_enter_finish_location()"
});
formatter.result({
  "duration": 1745764242,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_car_icon()"
});
formatter.result({
  "duration": 458911409,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_on_GetDirections_button()"
});
formatter.result({
  "duration": 311933197,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_A_B_car_directions()"
});
formatter.result({
  "duration": 841174394,
  "status": "passed"
});
formatter.after({
  "duration": 19706,
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
  "duration": 2413543339,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 118646,
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
  "duration": 10355498582,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 69774326,
  "status": "passed"
});
formatter.after({
  "duration": 18064,
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
  "duration": 2359172513,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14170761266,
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
  "duration": 10313684154,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 62943333,
  "status": "passed"
});
formatter.after({
  "duration": 20938,
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
  "duration": 2336217111,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 14348064094,
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
  "duration": 10348505425,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_dropped_pin_in_that_searched_area()"
});
formatter.result({
  "duration": 61936686,
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
  "duration": 2388778682,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14259103132,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2583114036,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_and_share()"
});
formatter.result({
  "duration": 1731506563,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "duration": 2059913540,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Share complete!\u0027]\"}\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 28 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir6824_8754}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 72b0003fb2078418587d0b9a94eaf3dc\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027dialogText\u0027][text()\u003d\u0027Share complete!\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor16.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy18.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.IsElementDisplayed(Html5Page.java:676)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.shareRouteConfirm(Html5Page.java:1534)\r\n\tat uk.co.ordnancesurvey.stepdefs.ShareRoute_steps.application_should_send_email_with_route_details_and_default_message(ShareRoute_steps.java:38)\r\n\tat ✽.Then application should send email with route details and default message(Sharing/ShareRoute.feature:10)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 2303581970,
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
  "duration": 2375544891,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14507120014,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 5436440034,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (-150, 247)\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 15 milliseconds\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir6824_8754}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 72b0003fb2078418587d0b9a94eaf3dc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.GeneratedMethodAccessor23.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:332)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:345)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:629)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.navigateRoutesList(Html5Page.java:1373)\r\n\tat uk.co.ordnancesurvey.stepdefs.ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route(ShareRoute_steps.java:26)\r\n\tat ✽.And I navigate to my routes to select a route(Sharing/ShareRoute.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_multiple_email_addresses_and_share()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1219183352,
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
  "duration": 2354336340,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 14192528563,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_navigate_to_my_routes_to_select_a_route()"
});
formatter.result({
  "duration": 2923138094,
  "status": "passed"
});
formatter.match({
  "location": "ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share()"
});
formatter.result({
  "duration": 1441116097,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d45.0.2454.101)\n  (Driver info: chromedriver\u003d2.19.346078 (6f1f0cde889532d48ce8242342d0b84f94b114a1),platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 87 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.27\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir6824_8754}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d45.0.2454.101, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 72b0003fb2078418587d0b9a94eaf3dc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:273)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:94)\r\n\tat sun.reflect.GeneratedMethodAccessor29.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:332)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.sendKeys(EventFiringWebDriver.java:355)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.set_textBox(Html5Page.java:610)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.shareRouteEmailText(Html5Page.java:1530)\r\n\tat uk.co.ordnancesurvey.stepdefs.ShareRoute_steps.i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share(ShareRoute_steps.java:51)\r\n\tat ✽.And I clicked on Share icon, select email, enter email address, update text and share(Sharing/ShareRoute.feature:25)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ShareRoute_steps.application_should_send_email_with_route_details_and_default_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1793380436,
  "status": "passed"
});
});