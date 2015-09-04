package uk.co.ordnancesurvey.accceptanceTest;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		format = {"pretty", "html:target/reports/workingset"}, 
			features = {"src/test/resources/features.functional/Route Ratings/RateDiscoverRoute.feature"},glue="uk.co.ordnancesurvey.stepdefs")


public class WorkingFeature {

}
