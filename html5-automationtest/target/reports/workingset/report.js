$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("PlacesDisabled.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if user is NOT able to see \"Places\" functionality",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\"places\"-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@testDisabled"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Check whether \"Places\" is NOT available on top bar menu",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\"places\"-functionality;check-whether-\"places\"-is-not-available-on-top-bar-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#\t\tAnd \u0027Places\u0027 function is disabled"
    }
  ],
  "line": 7,
  "name": "\u0027Places\u0027 should NOT be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 28594117897,
  "status": "passed"
});
formatter.match({
  "location": "PlacesDisabled_steps.directions_should_NOT_be_visible()"
});
formatter.result({
  "duration": 35692436,
  "status": "passed"
});
formatter.after({
  "duration": 103970,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Check whether \"Places\" is available NOT in left slider menu",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\"places\"-functionality;check-whether-\"places\"-is-available-not-in-left-slider-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#\t\tAnd \u0027Places\u0027 function is disabled"
    }
  ],
  "line": 12,
  "name": "I select left slider menu",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "\u0027Places\u0027 in left burger menu should NOT be visible",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 28789781507,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_select_left_slider_menu()"
});
formatter.result({
  "duration": 284060267,
  "status": "passed"
});
formatter.match({
  "location": "PlacesDisabled_steps.directions_in_left_burger_menu_should_NOT_be_visible()"
});
formatter.result({
  "duration": 28578313,
  "status": "passed"
});
formatter.after({
  "duration": 48638,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Check whether \"The Places menu\" topic is NOT available in Help Menu",
  "description": "",
  "id": "verify-if-user-is-not-able-to-see-\"places\"-functionality;check-whether-\"the-places-menu\"-topic-is-not-available-in-help-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I log into OS maps as a guest/registered/subscribed user",
  "keyword": "Given "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#\t\tAnd \u0027Places\u0027 function is disabled"
    }
  ],
  "line": 18,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I should NOT be able to see \u0027The Places menu\u0027 topic",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_log_into_OS_maps_as_a_guest_registered_subscribed_user()"
});
formatter.result({
  "duration": 22452479770,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 287066021,
  "status": "passed"
});
formatter.match({
  "location": "PlacesDisabled_steps.i_should_NOT_be_able_to_see_The_Directions_menu_topic()"
});
formatter.result({
  "duration": 2105433873,
  "status": "passed"
});
formatter.after({
  "duration": 34806,
  "status": "passed"
});
});