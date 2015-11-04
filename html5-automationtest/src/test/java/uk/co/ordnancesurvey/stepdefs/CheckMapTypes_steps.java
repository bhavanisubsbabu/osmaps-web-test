package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class CheckMapTypes_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public CheckMapTypes_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// @SingleMap Check whether only one map type is available-'Change Map Type' functionality is disabled
	@Then("^'Change map' button should NOT be available$")
	public void change_map_button_should_not_be_available() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementDisplayed(obj.mapStackButton));
	}

	// @SingleMap Check whether 'Initial Map Type' in 'Preferences' is NOT available
	@Then("^'Initial Map Type' selection should NOT be available$")
	public void initial_Map_Type_selection_should_NOT_be_available() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.preferencesStandardMapType));
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.preferencesOSLeisureMapType));
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.preferencesAerialMapType));
	}

	// @TwoMaps Check whether two types of map are available
	@When("^I click 'Change map' button$")
	public void i_click_Change_map_button() throws Throwable {
		mainPage.click(obj.mapStackButton);
	}

	@Then("^I should see \"([^\"]*)\" maps available$")
	public void i_should_see_maps_available(String arg1) throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.standardMap));
		assertTrue(mainPage.IsElementDisplayed(obj.AerialMap));
	}

	// @TwoMaps Check whether 'Initial Map Type' in 'Preferences' is available
	@Then("^'Initial Map Type' should contain \"([^\"]*)\" selection$")
	public void initial_Map_Type_should_contain_selection(String arg1) throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesStandardMapType));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesAerialMapType));
	}
	
	
	
}
