package uk.co.ordnancesurvey.accceptanceTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/reports/workingset"}, 
			//features = {"src/test/resources/features.functional/Mapstacks/RegisteredMapstack.feature"},glue="uk.co.ordnancesurvey.stepdefs")
            features = {"src/test/resources/features.functional/"},glue="uk.co.ordnancesurvey.stepdefs",tags={"@regression"})
public class WorkingFeature {
	
}
