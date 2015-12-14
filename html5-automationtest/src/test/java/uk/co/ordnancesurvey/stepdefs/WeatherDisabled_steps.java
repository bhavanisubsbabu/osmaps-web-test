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

public class WeatherDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public WeatherDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check if 'Weather' is NOT available in 'Route Details'
	@Then("^I should NOT be able to see 'Weather' icon in 'Route Details'$")
	public void i_should_NOT_be_able_to_see_Weather_icon_in_Route_Details() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.weatherInRouteDetails) &&
				mainPage.IsElementDisplayed(obj.weatherInRouteDetails));
	}

	// Check if 'Weather' is NOT available in 'Places'
	@Then("^'Weather' checkbox in 'Places' panel should NOT be present$")
	public void weather_checkbox_in_Places_panel_should_NOT_be_present() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.weatherInPlaces) &&
				mainPage.IsElementDisplayed(obj.weatherInPlaces));
	}

	// Check if 'Weather' is NOT available in dropped pin's 'More info'
	@Then("^I should NOT be able to see 'Weather' icon in 'Dropped Pin' panel$")
	public void i_should_NOT_be_able_to_see_Weather_icon_in_Dropped_Pin_panel() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.weatherInDroppedPin) &&
				mainPage.IsElementDisplayed(obj.weatherInDroppedPin));
	}

	// Check if 'Weather' is NOT available in POI's 'More info'
	@Then("^I should NOT be able to see 'Weather' icon in 'POI' panel$")
	public void i_should_NOT_be_able_to_see_Weather_icon_in_POI_panel() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.weatherInPOI) &&
				mainPage.IsElementDisplayed(obj.weatherInPOI));
	}

	// Check if 'Weather' is NOT available in 'The Places menu' help description
	@Then("^I should NOT see 'Weather' description$")
	public void i_should_NOT_see_Weather_description() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.weatherHelpDescription) &&
				mainPage.IsElementDisplayed(obj.weatherHelpDescription));
	}

}
