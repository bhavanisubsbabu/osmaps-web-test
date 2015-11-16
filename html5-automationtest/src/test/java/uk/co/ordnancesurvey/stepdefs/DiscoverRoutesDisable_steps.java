package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class DiscoverRoutesDisable_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public DiscoverRoutesDisable_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	//Check whether "Discover Routes" is unavailable
	@Then("^'Discover Routes' should not be visible$")
	public void discover_Routes_should_not_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.Discover_Routes) &&
				mainPage.IsElementDisplayed(obj.Discover_Routes));
	}

	//Check whether "Discovering routes" topic is unavailable in Help Menu
	@Then("^I should not be able to see 'Discovering routes' topic$")
	public void i_should_not_be_able_to_see_Discovering_routes_topic() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.helpDiscoverRouteTopic) &&
				mainPage.IsElementDisplayed(obj.helpDiscoverRouteTopic));
	}

	//Check whether "Discover Routes" description is unavailable in "The Routes menu" topic in Help Menu
	@Then("^I should not be able to see 'Discover Routes' description$")
	public void i_should_not_be_able_to_see_Discover_Routes_description() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.helpDiscoverRouteDescription) &&
				mainPage.IsElementDisplayed(obj.helpDiscoverRouteDescription));
	}
}