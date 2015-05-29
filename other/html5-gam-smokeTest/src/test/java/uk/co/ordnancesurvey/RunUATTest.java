package uk.co.ordnancesurvey;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = { "pretty", "html:target/cucumber", "json:target/cucumber.json" }, 
		features = {"src/test/resources/features/LandingPage.feature"})
public class RunUATTest {
    // empty class that executes all features as JUnit tests using Cucumber
}
