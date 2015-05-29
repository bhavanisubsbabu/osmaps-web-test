package uk.co.ordnancesurvey.steps;

import static org.junit.Assert.assertTrue;

import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class LandingPage {
 public  WebDriver driver;
 
	
	
	@Given("^I have ITE env url$")
	public void I_have_ITE_env_url() throws Throwable {
	    
	}

	@When("^I Open this url$")
	public void I_Open_this_url() throws Throwable {		
		// Use a local WebDriver
		//driver=new FirefoxDriver();
		
		// Use a remote Selenium Grid instance
		// TODO: this needs to be refactored into a separate utility class away from the step definitions
		// TODO: need the URLs in a configuration file that is specific to an environment to enable Jenkins automation on a per-environment basis
		DesiredCapabilities cap = DesiredCapabilities.firefox();
		cap.setBrowserName("firefox");				
		cap.setPlatform(org.openqa.selenium.Platform.ANY);
		//driver = new RemoteWebDriver(new URL("http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);
		driver = new RemoteWebDriver(new URL("http://osvm767.ordsvy.gov.uk:4444/wd/hub"), cap);
		
		driver.navigate().to("http://www.ordnancesurveyite.co.uk/osmaps/");	
	}

	@Then("^I should see OS landing page$")
	public void I_should_see_OS_landing_page() throws Throwable {
		String expected_title="getamap";
	    assertTrue("Failed:Landing page is incorrect,please check manually",driver.getTitle().equals(expected_title));
	    driver.quit();
	}


}
