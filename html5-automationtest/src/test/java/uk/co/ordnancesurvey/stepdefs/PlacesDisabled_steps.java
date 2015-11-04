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

public class PlacesDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public PlacesDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Places" is NOT available on top bar menu and in left burger menu
	@Then("^'Places' should NOT be visible$")
	public void directions_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.mapfeatures));
	}

	@Then("^'Places' in left burger menu should NOT be visible$")
	public void directions_in_left_burger_menu_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.menuPlaces));
	}
	
	// Check whether "The Places menu" topic is NOT available in Help Menu
	@Then("^I should NOT be able to see 'The Places menu' topic$")
	public void i_should_NOT_be_able_to_see_The_Directions_menu_topic() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementDisplayed(obj.helpPlacesMenuTopic));
	}

}
