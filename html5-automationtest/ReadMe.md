Introduction:
===============

This document is intended to help in setting up and running OSMaps web application automation test scripts
 
Prerequisites:
===============

* Java JDK 
* Eclipse with Maven plugin installed 

Setup:
============

1. Checkout latest code from stash git clone http://yourusername@stash.ordsvy.gov.uk/scm/omw/osmaps-web-test.git
2. Launch Eclipse
3. click on File -> Import
4. Select Maven -> Existing Maven Projects and click on Next button
5. Click on Browse and navigate to git directory and select "OSMaps Web App" -> "html5-automationtest" folder
6. Select pom.xml and click on finish button.

OSMaps Web App folder is added to eclipse and 

Framework Description:
============

Our automation tests are designed in Page Object Model over the top of cucumber jvm.

src/test/resources:
------------------- 

Resources folder contains cucumber feature files, configuration files and browser drivers
 
* BDD scenarios are created in features folder and are organized with tags 
* Test Config-dev.properties file consists environment and accounts details for running tests on dev1 server
* Test Config-ci.properties file consists environment and accounts details for running tests on dev2 server
* Test Config-ite.properties file consists environment and accounts details for running tests on ITE server
* Test Config-prod.properties file consists environment and details for running tests on Prod server
 
src/main/java:
-----------------

This folder contains 2 packages pagemodel and utils. 
 * Pagemodel package we have Html5Page.java class, this class consists of reusable functions performing specific test logic like login, search, create route, etc.,
 * utils package we have AppProperties.java and ObjectRepository classes.
 
	1. AppProperties class reads test configuration properties files and sets up tests to run on that particular environment.
	2. ObjectRepository class contains all objects of all web elements in OSMaps web application.

src/test/java:
--------------	
This folder contains packages acceptanceTest and stepdefs

* acceptanceTest package contains driver classes for running specific test suites.

* stepdefs package contains glue code logically named after each feature files and SharedWebdriver classes. Some initial test's glue code where added in given, when and then classes.

Executing Tests:
================
OSMaps Web tests are organized by @regression and @smoke tags. 

To run regression test suite, 

1. select RegressionTest.java from acceptanceTest package under folder src/test/java
2. Click on Run menu option and select run as JUnit Tests

By default tests run on remote machine against ITE server. To run tests  on different servers, update configuration file name in method in AppProperties.java class under utils package.
You can change the configurations in Test Config-ite. properties file for account details, browser and test location


Adding tests:
===========
For creating new tests in the framework 

1. Add your feature files in src/test/resources/features
2. For the scenario steps add code in stepdefs package in src/test/java.
3. Use or update or create methods with test logic in Html5Page.java and call those methods in step definitions.

Test Reports:
============

For every test reports are generated in target -> reports in project directory

1. When running regression tests, check reports in reg-test-report folder
2. When running smoke tests, check reports in smoke-test-report folder
3. When running tests from workingFeature, check reports in workingset

Jenkins Daily builds:
====================

In [OSMaps jenkins server]("https://vmlin473:8080") there is a "Test" project. This project consists of two maven projects 

* OS Maps Web Regression Tests:  

	This project executes regression tests on ITE server and generates cucumber html reports. This regression test project is scheduled to run every day between 8 to 9 am.
	
* test-smoke

	This project runs smoke tests.


Note: Tests run using remote server on machine "osvm944". Make sure Selenium server and client running on this machine. 

To start selenium server and node

1. Login to remote desktop osvm944.
2. Navigate to c:\JAR
3. Double click start_hubV37 to start hub
4. Double click test_start_local_webdriver_nodeV37

Please ensure "environment" variable in properties file set as "Remote" in src/test/resources before merging your code to Master. Daily builds will fail if set to "Local" as it is configured to run on osvm944 machine.


 