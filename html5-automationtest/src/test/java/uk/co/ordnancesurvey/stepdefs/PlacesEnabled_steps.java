package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class PlacesEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public PlacesEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Places" is available on top bar menu
	@When("^I select 'Places' tab in top menu$")
	public void i_select_Places_tab_in_top_menu() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.mapfeatures));
		mainPage.click(obj.mapfeatures);
	}

	// Check whether "Places" is available in left slider menu

	@When("^I click 'Places' button in burger menu$")
	public void i_click_Directions_button_in_burger_menu() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.menuPlaces));
		mainPage.click(obj.menuPlaces);
	}

	// Check whether "The Places menu" topic is available in Help Menu
	@Then("^I should be able to see 'The Places menu' topic$")
	public void i_should_be_able_to_see_The_Places_menu_topic() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.helpPlacesMenuTopic));
	}
}
