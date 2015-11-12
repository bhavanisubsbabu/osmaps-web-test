package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class RatingDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public RatingDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Rating" functionality is NOT available in 'Discover Routes'
	@Then("^'Rating' should NOT be visible on 'Discover Routes' panel$")
	public void rating_should_NOT_be_visible_on_Discover_Routes_panel() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.ratingInDiscoverRoutes));
	}

	// Check whether "Rating" functionality is NOT available in 'My Routes'
	@Then("^'Rating' should NOT be visible in 'My Routes' panel$")
	public void rating_should_NOT_be_visible_in_My_Routes_panel() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.ratingInMyRoutes));
	}

	// Check whether "Rating" functionality is NOT available in 'Discover Routes'
	// and 'My Routes' popup
	@Then("^'Rating' should NOT be visible in popup$")
	public void rating_should_NOT_be_visible_in_popup() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.popupRating));
	}

	// Check whether "Rating" functionality is NOT available in 'Discover Routes'
	// and 'My Routes' details panel
	@Then("^'Rating' should NOT be visible in 'Route Details' panel$")
	public void rating_should_NOT_be_visible_in_Route_Details_panel() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.ratingInRoutesDetails));
	}

	// Check whether "Sort by Rating" is NOT available in 'Discover Routes'
	 @Then("^'Sort by Rating' should NOT be possible in 'Discover Routes' panel$")
	 public void sort_by_Rating_should_NOT_be_possible_in_Discover_Routes_panel() throws Throwable {
		 assertFalse(mainPage.IsElementPresent(obj.sortDiscoverRoutesByRating));
	 }
	 
	
	// Check whether "Rating" description is NOT available in 'Discovering routes' help topic
	 @Then("^I should NOT see 'Rating' description in content$")
	 public void i_should_NOT_see_Rating_description_in_content() throws Throwable {
		 assertFalse(mainPage.IsElementDisplayed(obj.sortByRatingHelpDescription));
		 
	 }

}
