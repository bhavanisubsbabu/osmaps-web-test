package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = { "html:target/cucumber-reports/html", "json:target/cucumber-reports/cucumber.json" }, 
		features = {"src/test/resources/features.functional/"},glue="uk.co.ordnancesurvey.stepdefs",tags={"@regression","~@ignore"})
public class RegressionTest {

}
