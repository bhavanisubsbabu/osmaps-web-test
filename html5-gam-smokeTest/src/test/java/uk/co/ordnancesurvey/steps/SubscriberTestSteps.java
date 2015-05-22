package uk.co.ordnancesurvey.steps;

import java.util.logging.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.junit.Assert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pages.LoginPageObj;
import uk.co.ordnancesurvey.pages.MainPageObj;
import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.ObjectRepository;
import uk.co.ordnancesurvey.utils.SharedDriver;


public class SubscriberTestSteps {
	private static final Logger LOGGER = Logger.getLogger(SubscriberTestSteps.class.getName());
	
	private final WebDriver driver;
	MainPageObj page;
	LoginPageObj login;
	BusinessImplementation bImpl;
	ObjectRepository obj;
	
	public SubscriberTestSteps(SharedDriver driver)
	{
		
		page = PageFactory.initElements( driver,
	            MainPageObj.class);	
		bImpl = PageFactory.initElements( driver,
	            BusinessImplementation.class);
		login= PageFactory.initElements(driver,LoginPageObj.class);
		
		this.driver= driver;
		
	}
	
	@When("^I login as subscriber$")
	public void i_login_as_subscriber() throws Throwable {
		LOGGER.info("Entering: Login as Subscriber");		
		login.enter_emailAddress("GAMRR_test_subscribed@ordnancesurvey.co.uk");
		login.enter_password("Pa55w0rd");
		login.submitLogin();
		Thread.sleep(5000);
	}

	@Then("^I should be able to see (\\d+):(\\d+)K maps$")
	public void i_should_be_able_to_see_K_maps(int arg1, int arg2) throws Throwable {
		
	
		page.click_125Map();
		page.close_app();
		//bImpl.close_app();
		Thread.sleep(3000);
	//assertTrue("Failed: subscriber doesn have access to 1:25maps",driver.findElement(By.xpath(obj.map125)).isDisplayed());
		 
			
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}



}
