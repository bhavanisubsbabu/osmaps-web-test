$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("create_route.feature");
formatter.feature({
  "line": 1,
  "name": "Create Route",
  "description": "As a getamap registered user\r\nIn order to navigate\r\nI want to create route on map",
  "id": "create-route",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 41,
      "value": "# @TODO:JT disabled failing test - needs fixing!"
    }
  ],
  "line": 44,
  "name": "Create Route and Save and Edit as subscriber user",
  "description": "",
  "id": "create-route;create-route-and-save-and-edit-as-subscriber-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 43,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I login as subscriber user",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I should be able to create route",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Save the route.",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should be able to edit route",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 10146884524,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 12361638170,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 6399137693,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 15879957681,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_edit_route()"
});
formatter.result({
  "duration": 1132025284,
  "error_message": "org.openqa.selenium.InvalidElementStateException: invalid element state: Failed to execute \u0027querySelector\u0027 on \u0027Document\u0027: \u0027//*[contains(text(),\u0027Edit\u0027)]\u0027 is not a valid selector.\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 38 milliseconds\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.201\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir9076_31429}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 2008617f56c518b48fa138bc25a739c6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat sun.reflect.GeneratedMethodAccessor21.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:184)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.eidt_saved_route(Html5Page.java:311)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_edit_route(ThenSteps.java:111)\r\n\tat ✽.And I should be able to edit route(create_route.feature:49)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2003341830,
  "status": "passed"
});
});