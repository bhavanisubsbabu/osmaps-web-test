package uk.co.ordnancesurvey.steps;

import java.util.logging.Logger;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pages.LoginPageObj;
import uk.co.ordnancesurvey.pages.MainPageObj;
import uk.co.ordnancesurvey.pages.POIPageObj;
import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.ObjectRepository;
import uk.co.ordnancesurvey.utils.SharedDriver;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class POISteps {
private static final Logger LOGGER = Logger.getLogger(SubscriberTestSteps.class.getName());
	
	private final WebDriver driver;
	POIPageObj page;
	LoginPageObj login;
	BusinessImplementation bImpl;
	ObjectRepository obj;
	
	public POISteps(SharedDriver driver){
	page = PageFactory.initElements(driver,POIPageObj.class);	
		bImpl = PageFactory.initElements(driver,
	            BusinessImplementation.class);
		login= PageFactory.initElements(driver,LoginPageObj.class);
		
		this.driver=driver;
	}

	
	
	@When("^I open Map features menu$")
	public void i_open_Map_features_menu() throws Throwable {
		page.openMapfeatures();
		
		
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}



@Then("^I should be able to see the POI Categories$")
public void i_should_be_able_to_see_the_POI_Categories() throws Throwable {
	page.verify_POI_CategoriesExist();
	bImpl.close_app();

	// Write code here that turns the phrase above into concrete actions
 //   throw new PendingException();
	
	
}


}
