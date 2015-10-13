package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty","html:target/reports/smoke-test-report", "json:target/reports/smoke-test-report/report.json"}, 
		features = {"src/test/resources/features.functional/"},glue="uk.co.ordnancesurvey.stepdefs",tags={"@Smoke","~@ignore"})


public class SmokeTest {

}
