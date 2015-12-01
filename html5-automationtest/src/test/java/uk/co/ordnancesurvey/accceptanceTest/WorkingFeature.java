package uk.co.ordnancesurvey.accceptanceTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/reports/workingset"}, 
			features = {"src/test/resources/features.functional/DPN/getRouteName.feature"},glue="uk.co.ordnancesurvey.stepdefs", tags="@wip")

public class WorkingFeature {
	
}
