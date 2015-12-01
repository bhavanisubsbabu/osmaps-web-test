package uk.co.ordnancesurvey.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;

public class GetRouteNames_steps {
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public GetRouteNames_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@Then("^I should be get all routes$")
	public void i_should_be_get_all_routes() throws Throwable {
	    mainPage.getRoutes();
	}
}
