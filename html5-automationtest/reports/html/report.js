$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features.functional/Route Ratings/RateDiscoverRoute.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "As a guest user\r\nIn order to view ratings\r\nI should have permissions to authored routes",
  "id": "",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Verify guest user can view a route rating",
  "description": "",
  "id": ";verify-guest-user-can-view-a-route-rating",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on getamap app",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I login as guest user",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click Discover under routes",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should see ratings for Discover routes",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 13517678652,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_guest_user()"
});
formatter.result({
  "duration": 7141699349,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 19390712093,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_ratings_for_Discover_routes()"
});
formatter.result({
  "duration": 181460,
  "status": "passed"
});
formatter.after({
  "duration": 85804,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify Registered user can view a route rating",
  "description": "",
  "id": ";verify-registered-user-can-view-a-route-rating",
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
  "name": "I should see ratings for Discover routes",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I should be able to rate authored routes",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 2853514115,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_login_as_registered_user()"
});
formatter.result({
  "duration": 17614946028,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_click_Discover_under_routes()"
});
formatter.result({
  "duration": 19353592324,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_see_ratings_for_Discover_routes()"
});
formatter.result({
  "duration": 180229,
  "status": "passed"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_rate_authored_routes()"
});
formatter.result({
  "duration": 2023500375,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element\n  (Session info: chrome\u003d44.0.2403.157)\n  (Driver info: chromedriver\u003d2.9.248315,platform\u003dWindows NT 6.1 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 20 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.42.2\u0027, revision: \u00276a6995d31c7c56c340d6f45a76976d43506cd6cc\u0027, time: \u00272014-06-03 10:52:47\u0027\nSystem info: host: \u0027ND28823\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_51\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\RKKUNA~1\\AppData\\Local\\Temp\\scoped_dir11296_22044}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d44.0.2403.157, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 7ffa5595d0faf82644c4820150cb7348\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat sun.reflect.GeneratedMethodAccessor24.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:101)\r\n\tat com.sun.proxy.$Proxy17.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:184)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.clickLinkByXpath(Html5Page.java:659)\r\n\tat uk.co.ordnancesurvey.stepdefs.ThenSteps.i_should_be_able_to_rate_authored_routes(ThenSteps.java:378)\r\n\tat ✽.And I should be able to rate authored routes(src/test/resources/features.functional/Route Ratings/RateDiscoverRoute.feature:18)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2101548943,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify Subscribed user can view a route rating",
  "description": "",
  "id": ";verify-subscribed-user-can-view-a-route-rating",
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
  "name": "I login as Subscribed user",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I should see ratings for Discover routes",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should be able to rate authored routes",
  "keyword": "And "
});
formatter.match({
  "location": "GivenSteps.i_am_on_getamap_app()"
});
formatter.result({
  "duration": 2781686935,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "ThenSteps.i_should_see_ratings_for_Discover_routes()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ThenSteps.i_should_be_able_to_rate_authored_routes()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31201,
  "status": "passed"
});
});