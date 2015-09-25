package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty","html:target/reports/reg-test-report"}, 
		features = {"src/test/resources/features.functional/DPN"},glue="uk.co.ordnancesurvey.stepdefs",tags={"@demo","~@ignore"})
public class RegressionTest {

}
