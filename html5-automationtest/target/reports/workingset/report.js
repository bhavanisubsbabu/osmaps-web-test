$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SingleUserMode.feature");
formatter.feature({
  "line": 2,
  "name": "Verify if \u0027Single User Mode\u0027 is enabled",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test1"
    }
  ]
});
formatter.scenario({
  "line": 26,
  "name": "Check whether \u0027My Routes\u0027 description is NOT present in \u0027Help\u0027 topic in \u0027Single User Mode\u0027",
  "description": "",
  "id": "verify-if-\u0027single-user-mode\u0027-is-enabled;check-whether-\u0027my-routes\u0027-description-is-not-present-in-\u0027help\u0027-topic-in-\u0027single-user-mode\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 27,
  "name": "I open OS maps in SingleUserMode",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I open \u0027Help\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I select \u0027The Routes menu\u0027 topic",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should NOT be able to see \u0027My Routes\u0027 description",
  "keyword": "Then "
});
formatter.match({
  "location": "GivenSteps.i_open_OS_maps_in_SingleUserMode()"
});
formatter.result({
  "duration": 13839838289,
  "status": "passed"
});
formatter.match({
  "location": "WhenSteps.i_open_Help()"
});
formatter.result({
  "duration": 278756914,
  "status": "passed"
});
formatter.match({
  "location": "DirectionsDisabled_steps.i_select_The_Routes_menu_topic()"
});
formatter.result({
  "duration": 10559306749,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 10 seconds waiting for element to be clickable: By.xpath: html/body/div[5]/div[1]/div/div[1]/div[3]/span[1]\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027WS-HSZVHP1\u0027, ip: \u0027192.168.107.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: uk.co.ordnancesurvey.stepdefs.SharedWebDriver\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:80)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:229)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:71)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:625)\r\n\tat uk.co.ordnancesurvey.stepdefs.DirectionsDisabled_steps.i_select_The_Routes_menu_topic(DirectionsDisabled_steps.java:55)\r\n\tat ✽.And I select \u0027The Routes menu\u0027 topic(SingleUserMode.feature:29)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"html/body/div[5]/div[1]/div/div[1]/div[3]/span[1]\"}\nCommand duration or timeout: 57 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027WS-HSZVHP1\u0027, ip: \u0027192.168.107.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d42.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 77e3359f-85b4-4602-9087-7c7687decb37\n*** Element info: {Using\u003dxpath, value\u003dhtml/body/div[5]/div[1]/div/div[1]/div[3]/span[1]}\r\n\tat sun.reflect.GeneratedConstructorAccessor17.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:445)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:358)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat sun.reflect.GeneratedMethodAccessor18.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver$2.invoke(EventFiringWebDriver.java:102)\r\n\tat com.sun.proxy.$Proxy19.findElement(Unknown Source)\r\n\tat org.openqa.selenium.support.events.EventFiringWebDriver.findElement(EventFiringWebDriver.java:185)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.findElement(ExpectedConditions.java:861)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:41)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:655)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:648)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:209)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.waitForElementClickable(Html5Page.java:71)\r\n\tat uk.co.ordnancesurvey.pagemodel.Html5Page.click(Html5Page.java:625)\r\n\tat uk.co.ordnancesurvey.stepdefs.DirectionsDisabled_steps.i_select_The_Routes_menu_topic(DirectionsDisabled_steps.java:55)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:675)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"html/body/div[5]/div[1]/div/div[1]/div[3]/span[1]\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027WS-HSZVHP1\u0027, ip: \u0027192.168.107.40\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///C:/Users/PAWEL~1.KOR/AppData/Local/Temp/anonymous8889932629622372545webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10667)\r\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///C:/Users/PAWEL~1.KOR/AppData/Local/Temp/anonymous8889932629622372545webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10676)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///C:/Users/PAWEL~1.KOR/AppData/Local/Temp/anonymous8889932629622372545webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12643)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///C:/Users/PAWEL~1.KOR/AppData/Local/Temp/anonymous8889932629622372545webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12648)\r\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///C:/Users/PAWEL~1.KOR/AppData/Local/Temp/anonymous8889932629622372545webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12590)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "SingleUserMode_steps.i_should_NOT_be_able_to_see_My_Routes_description()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 419268775,
  "status": "passed"
});
});