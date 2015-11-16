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

public class CreateCustomRouteDisable_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public CreateCustomRouteDisable_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
//	Check whether "Create Custom Routes" is unavailable 
	@Then("^'Create Custom Route' should not be visible$")
	public void create_Custom_Route_should_not_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.Create_Custom_Trail) &&
				mainPage.IsElementDisplayed(obj.Create_Custom_Trail));
	}
	
//	Check whether "Create" is unavailable in My Routes
//	Check whether "Create" is unavailable in Discover Routes
	@Then("^'Create' should not be visible$")
	public void create_should_not_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.createButton) &&
				mainPage.IsElementDisplayed(obj.Create_Custom_Trail));
	}
	
//	Check whether "Create route" is unavailable on "Dropped Pin" tool
	@Then("^'Create route' should not be visible$")
	public void create_route_should_not_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.createRouteDroppedPin) &&
				mainPage.IsElementDisplayed(obj.createRouteDroppedPin));
	}
	
//	Check whether "Create a custom route" topic is unavailable in Help Menu 
	@Then("^I should not be able to see 'Create a custom route' topic$")
	public void i_should_not_be_able_to_see_Create_a_custom_route_topic() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.helpCreateRouteTopic) &&
				mainPage.IsElementDisplayed(obj.helpCreateRouteTopic));
	}
	
//	Check whether "Create Custom Route" description is unavailable in "The Routes menu" topic in Help Menu
	@Then("^I should not be able to see 'Create Custom Route' description$")
	public void i_should_not_be_able_to_see_Create_Custom_Route_description() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.helpCreateRouteDescription) &&
				mainPage.IsElementDisplayed(obj.helpCreateRouteDescription));
	}
	
}
