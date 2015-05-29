package uk.co.ordnancesurvey.steps.routes;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pages.LoginPageObj;
import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.SharedDriver;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateRouteSteps {
	private final WebDriver driver;
	BusinessImplementation bImpl;
	LoginPageObj login;
	 
	public CreateRouteSteps(SharedDriver driver){
		this.driver=driver;
		bImpl = PageFactory.initElements(driver,
	            BusinessImplementation.class);
		
		login = PageFactory.initElements(driver,
	            LoginPageObj.class);
		
	}
	@Given("^I am on getamap app$")
	public void i_am_on_getamap_app() throws Throwable {
		bImpl.launch_app();
		
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}


	@Then("^I should be able to create route$")
	public void i_should_be_able_to_create_route() throws Throwable {
		bImpl.plot_newRoute();
		bImpl.save_route();
	    // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}

	@Then("^Save the route\\.$")
	public void save_the_route() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}


}
