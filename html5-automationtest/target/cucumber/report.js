$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/POIs/POI.feature");
formatter.feature({
  "line": 1,
  "name": "Map features",
  "description": "In order to choose and display POIs by one or more categories\r\nAs a getamap user \r\nI should be able to filter POI by Type",
  "id": "map-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 51,
  "name": "User should be able to pin POI to map and see when logs back to the applciation",
  "description": "",
  "id": "map-features;user-should-be-able-to-pin-poi-to-map-and-see-when-logs-back-to-the-applciation",
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
  "name": "select pin POI to map",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I should see POI on map after logging into the application as registered user",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 11116792451,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 20058629825,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 11393007856,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 3151555286,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.select_pin_POI_to_map()"
});
formatter.result({
  "duration": 1703041845,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_POI_on_map_after_logging_into_the_application()"
});
formatter.result({
  "duration": 14346728024,
  "status": "passed"
});
formatter.after({
  "duration": 91552,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "User should be able to unpin POI from map",
  "description": "",
  "id": "map-features;user-should-be-able-to-unpin-poi-from-map",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 63,
  "name": "I login as registered user",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "from Places I select POI Castles and Attractions",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "click on a POI and select more info",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "unpin POI from map",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "POI should be removed from map and when user refreshes POI shouldn\u0027t br visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 2629721926,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 23711849251,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.from_Places_I_select_POI_Castles_and_Attractions()"
});
formatter.result({
  "duration": 11365765782,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.click_on_a_POI_and_select_more_info()"
});
formatter.result({
  "duration": 3237291705,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.unpin_POI_from_map()"
});
formatter.result({
  "duration": 104976166,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.poi_should_be_removed_from_map_and_when_user_refreshes_POI_shouldn_t_br_visible()"
});
formatter.result({
  "duration": 3181018404,
  "status": "passed"
});
formatter.after({
  "duration": 32844,
  "status": "passed"
});
});