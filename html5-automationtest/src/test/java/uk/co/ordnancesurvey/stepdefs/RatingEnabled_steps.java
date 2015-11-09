package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.apache.xerces.util.SynchronizedSymbolTable;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class RatingEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public RatingEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Rating" functionality is available in 'Discover Routes'
	@Then("^'Rating' should be visible on 'Discover Routes' panel$")
	public void rating_should_be_visible_on_Discover_Routes_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.ratingInDiscoverRoutes));
	}

	// Check whether "Rating" functionality is available in 'My Routes'
	@Then("^'Rating' should be visible in 'My Routes' panel$")
	public void rating_should_be_visible_in_My_Routes_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.ratingInMyRoutes));
	}

	// Check whether "Rating" functionality is available in 'Discover Routes'
	// and 'My Routes' popup
	@Then("^'Rating' should be visible in popup$")
	public void rating_should_be_visible_in_popup() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.popupRating));
	}

	// Check whether "Rating" functionality is available in 'Discover Routes'
	// and 'My Routes' details panel
	@Then("^'Rating' should be visible in 'Route Details' panel$")
	public void rating_should_be_visible_in_Route_Details_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.ratingInRoutesDetails));
	}

	 // Check whether "Sort by Rating" is available in 'Discover Routes'
	 @Then("^'Sort by Rating' should be possible in 'Discover Routes' panel$")
	 public void sort_by_Rating_should_be_possible_in_Discover_Routes_panel() throws Throwable {
		 assertTrue(mainPage.IsElementPresent(obj.sortDiscoverRoutesByRating));
	 }
	
	 // Check whether "Rating" description is available in 'Discovering routes' help topic
	 @When("^I click 'Discovering routes' help topic$")
	 public void i_click_Discovering_routes_help_topic() throws Throwable {
	 mainPage.click(obj.helpDiscoverRouteTopic);
	 }
	
	 @Then("^I should see 'Rating' description in content$")
	 public void i_should_see_Rating_description_in_content() throws Throwable {
		 assertTrue(mainPage.IsElementDisplayed(obj.sortByRatingHelpDescription));
	 }

}
