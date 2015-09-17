$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("POI.feature");
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
  "duration": 10587456395,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 9164989525,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 4059767854,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 40617606,
  "status": "passed"
});
formatter.after({
  "duration": 131374,
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
  "duration": 1232524876,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17885654393,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 4046256021,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 40512096,
  "status": "passed"
});
formatter.after({
  "duration": 32023,
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
  "duration": 965387424,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 30204431333,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Map_features_menu()"
});
formatter.result({
  "duration": 4066788161,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_see_the_POI_Categories()"
});
formatter.result({
  "duration": 56704783,
  "status": "passed"
});
formatter.after({
  "duration": 44339,
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
  "duration": 1105118214,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 25082326029,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_search_for_location()"
});
formatter.result({
  "duration": 6310871089,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_selected_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 8094221549,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_list_of_clustered_POIs_for_that_location()"
});
formatter.result({
  "duration": 67618691,
  "status": "passed"
});
formatter.after({
  "duration": 43108,
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
  "duration": 1173463158,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 25012821707,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 14399682896,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 4134824375,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_a_right_side_panel_view_with_details()"
});
formatter.result({
  "duration": 4032247019,
  "status": "passed"
});
formatter.after({
  "duration": 29148,
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
      "name": "@wip"
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
  "duration": 905437700,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 25186127627,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 14270881205,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 4146205483,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 1127725655,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 22133878892,
  "status": "passed"
});
formatter.after({
  "duration": 31612,
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
  "duration": 1286132924,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17967655271,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 14328401329,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 4137118907,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 1110668773,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "duration": 2878347527,
  "status": "passed"
});
formatter.after({
  "duration": 54192,
  "status": "passed"
});
});