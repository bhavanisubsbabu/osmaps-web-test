package uk.co.ordnancesurvey.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;

public class RouteList_steps {
	
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public RouteList_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	@When("^I navigate to my routes$")
	public void i_navigate_to_my_routes() throws Throwable {
		mainPage.navigateRoutesList();		
	}

	@Then("^I should be able to scroll to find a route$")
	public void i_should_be_able_to_view_all_routes() throws Throwable {
		mainPage.findRouteByScroll("import");
	}
	@Then("^I should be able to search to find a route$")
	public void i_should_be_able_to_search_to_find_a_route() throws Throwable {
	   mainPage.searchRoute("import");
	}

}
