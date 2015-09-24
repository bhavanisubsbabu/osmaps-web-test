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
  "line": 8,
  "name": "Create Route and Save as registered user",
  "description": "",
  "id": "create-route;create-route-and-save-as-registered-user",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@wiproute"
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
  "duration": 11234194699,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 7236042567,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 5889809470,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 7015914813,
  "status": "passed"
});
formatter.after({
  "duration": 261928,
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
  "duration": 2506789814,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 1057437429,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 359 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.125\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir3092_6252}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8e0604473c633191657d3d37f5d9bebc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:320)\r\n\tat sun.reflect.GeneratedMethodAccessor22.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:331)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.isDisplayed(EventFiringWebDriver.java:385)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.IsElementDisplayed(Html5Page.java:577)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:69)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.signOUt(Html5Page.java:242)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.open_login_window(Html5Page.java:502)\r\n\tat uk.co.ordnancesurvey.stepdefs.WhenSteps.i_login_as_subscriber_user(WhenSteps.java:111)\r\n\tat ✽.When I login as subscriber user(src/test/resources/features.functional/Routing/create_route.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 373866534,
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
  "duration": 1421973075,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 11585295230,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 6021934649,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route()"
});
formatter.result({
  "duration": 6678010872,
  "status": "passed"
});
formatter.after({
  "duration": 41055,
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
  "duration": 1296113238,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 13156917637,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 6231487971,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_run()"
});
formatter.result({
  "duration": 12259027802,
  "status": "passed"
});
formatter.after({
  "duration": 33254,
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
  "duration": 1019835117,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 10931935999,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 8167666551,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (467, 30). Other element would receive the click: \u003cspan id\u003d\"login-form-guest\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.125\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir3092_6252}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8e0604473c633191657d3d37f5d9bebc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat sun.reflect.GeneratedMethodAccessor27.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:331)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:344)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:545)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.plot_newRoute(Html5Page.java:183)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route(ThenSteps.java:46)\r\n\tat ✽.Then I should be able to create route(src/test/resources/features.functional/Routing/create_route.feature:36)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ThenSteps.save_the_route_as_cycle()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 728925137,
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
  "duration": 1261580166,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_subscriber_user()"
});
formatter.result({
  "duration": 6021234668,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_create_route()"
});
formatter.result({
  "duration": 8137532889,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (467, 30). Other element would receive the click: \u003cspan id\u003d\"login-form-guest\"\u003e...\u003c/span\u003e\n  (Session info: chrome\u003d45.0.2454.85)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31 milliseconds\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u002710.160.144.125\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir3092_6252}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d45.0.2454.85, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 8e0604473c633191657d3d37f5d9bebc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat sun.reflect.GeneratedMethodAccessor27.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement$1.invoke(EventFiringWebDriver.java:331)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$EventFiringWebElement.click(EventFiringWebDriver.java:344)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:545)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.plot_newRoute(Html5Page.java:183)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_create_route(ThenSteps.java:46)\r\n\tat ✽.Then I should be able to create route(src/test/resources/features.functional/Routing/create_route.feature:43)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 725077912,
  "status": "passed"
});
});