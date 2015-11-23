package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class DiscoverRoutesEnable_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public DiscoverRoutesEnable_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	//Check whether "Discovering routes" topic is available in Help Menu
	@Then("^I should be able to see 'Discovering routes' topic$")
	public void i_should_be_able_to_see_Discovering_routes_topic() throws Throwable {
	    assertTrue(mainPage.IsElementPresent(obj.helpDiscoverRouteTopic));
	}
	
	//Check whether "Discover Routes" description is available in "The Routes menu" topic in Help Menu
	@Then("^I should be able to see 'Discover Routes' description$")
	public void i_should_be_able_to_see_Discover_Routes_description() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.helpDiscoverRouteDescription));
	}
}