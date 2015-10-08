package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/reports/workingset"}, 
			features = {"src/test/resources/features.functional/ImportExportRoute/ImportRoute.feature"},glue="uk.co.ordnancesurvey.stepdefs")

public class WorkingFeature {
	
}
