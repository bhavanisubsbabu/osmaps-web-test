package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Routes1001_steps {
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public Routes1001_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@Then("^I should be able to create (\\d+) routes$")
	public void i_should_be_able_to_create_routes(int arg1) throws Throwable {
	    mainPage.plot_newRoutes(250);
	}
}
