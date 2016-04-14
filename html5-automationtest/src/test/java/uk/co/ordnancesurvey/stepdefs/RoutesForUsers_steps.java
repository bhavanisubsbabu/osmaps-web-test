package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class RoutesForUsers_steps {
	
	private  WebDriver driver;
	Html5Page mainPage;
	ObjectRepository obj = new ObjectRepository();
	
	String platform= AppProperties.get("platform");
	
	
	public RoutesForUsers_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
	}
	
	@When("^I login as \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_login_as_and(String arg1, String arg2) throws Throwable {
	    mainPage.signIn(arg1,arg2);
	}

	@Then("^I should create (\\d+) routes$")
	public void i_should_create_routes(int arg1) throws Throwable {
	    mainPage.plot_newRoutes(arg1);
	}

}
