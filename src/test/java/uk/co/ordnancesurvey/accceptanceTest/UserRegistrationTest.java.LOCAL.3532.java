package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		format = { "pretty", "html:target/cucumber", "json:target/cucumber.json" }, 
		features = {"src/test/resources/features.functional/Register/UserRegistration.feature"},glue="uk.co.ordnancesurvey.stepdefs",tags="@regression")
public class UserRegistrationTest {

}
