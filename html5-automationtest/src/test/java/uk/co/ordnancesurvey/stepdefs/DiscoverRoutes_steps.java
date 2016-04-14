package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class DiscoverRoutes_steps {
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public DiscoverRoutes_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}	
	@When("^I select a authored route$")
	public void i_select_a_authored_route() throws Throwable {
	    mainPage.navToDiscoverRoutes();
	    mainPage.searchAuthoredRoute();
	}
	@When("^click on view route$")
	public void click_on_view_route() throws Throwable {
	    mainPage.clickAuthoredRoute();
	}
	@Then("^app should display upsell screen$")
	public void app_should_display_upsell_screen() throws Throwable {
	    mainPage.assertUpsellScreen();
	}	
	@Then("^app should display authored route on map$")
	public void app_should_display_authored_route_on_map() throws Throwable {
	    mainPage.assertAuthoredRoute();
	}
}
