package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class CreateCustomRouteEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public CreateCustomRouteEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether "Create Custom Routes" is available
	@Then("^'Create Custom Route' should work as expected$")
	public void create_Custom_Route_should_work_as_expected() throws Throwable {
	    assertTrue(mainPage.IsElementDisplayed(obj.Create_Custom_Trail));
	}

//	Check whether "Create" is available in My Routes
//	Check whether "Create" is available in Discover Routes
	@Then("^'Create' should work as expected$")
	public void create_should_work_as_expected() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.createButton));
	}

//	Check whether "Create route" is available on "Dropped Pin" tool
	@When("^I click 'More info' on dropped pin$")
	public void i_click_More_info_on_dropped_pin() throws Throwable {
	    mainPage.click(obj.droppedPin);
	}

	@Then("^'Create route' should work as expected$")
	public void create_route_should_work_as_expected() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.createRouteDroppedPin));
	}
	
//	Check whether "Create a custom route" topic is available in Help Menu 
	@Then("^I should be able to see 'Create a custom route' topic$")
	public void i_should_be_able_to_see_Create_a_custom_route_topic() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.helpCreateRouteTopic));
	}

//	Check whether "Create Custom Route" description is available in "The Routes menu" topic in Help Menu
	@Then("^I should be able to see 'Create Custom Route' description$")
	public void i_should_be_able_to_see_Create_Custom_Route_description() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.helpCreateRouteDescription));
	}
}
