package uk.co.ordnancesurvey.steps.routes;
import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pages.LoginPageObj;
import uk.co.ordnancesurvey.pages.MainPageObj;
import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.SharedDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DiscoverRoutesSteps {
	private final WebDriver driver;
	BusinessImplementation bImpl;
	LoginPageObj login;
	MainPageObj mainpage;
	
	private static final Logger LOGGER = Logger.getLogger(DiscoverRoutesSteps.class.getName());
	
	
	public DiscoverRoutesSteps(SharedDriver driver)
	{
		this.driver=driver;
		bImpl = PageFactory.initElements(driver,
	            BusinessImplementation.class);	
		mainpage=PageFactory.initElements(driver,MainPageObj.class);
		
	}
	
	
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();


	
	
	@When("^I click Discover under routes$")
	public void i_click_Discover_under_routes() throws Throwable {
		mainpage.click_discoverRoutes();
		
	    // Write code here that turns the phrase above into concrete actions
	  //  throw new PendingException();
	}

	@Then("^I should available public routes in that map view area$")
	public void i_should_available_public_routes_in_that_map_view_area() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		LOGGER.info("Verifying Public routes exist on map");
	    mainpage.verify_routeExist();	    
	    mainpage.close_app();
	  //  bImpl.close_app();
	}

}
