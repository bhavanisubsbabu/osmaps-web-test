package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class WeatherEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public WeatherEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check if 'Weather' is available in 'Route Details'
	@Then("^I should be able to see and open 'Weather' icon in 'Route Details'$")
	public void i_should_be_able_to_see_and_open_Weather_icon_in_Route_Details() throws Throwable {
//		mainPage.waitForElementPresent(obj.weatherInRouteDetails, 3);
		assertTrue(mainPage.IsElementPresent(obj.weatherInRouteDetails));
//		mainPage.click(obj.weatherInRouteDetails);
//		mainPage.waitForElementPresent(obj.weatherPanel, 3);
//		assertTrue(mainPage.IsElementPresent(obj.weatherPanel));
	}
	
//	Check if 'Weather' is available in 'Places'
	@Then("^'Weather' checkbox in 'Places' panel should be present$")
	public void weather_checkbox_in_Places_panel_should_be_present() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.weatherInPlaces));
	}

	@Then("^I should be able to select 'Weather' checkbox$")
	public void i_should_be_able_to_select_Weather_checkbox() throws Throwable {
		mainPage.click(".//*[@id='poiContainer']/div[1]/div/div[@class='POI_Parent_Buttons']/div");
		assertTrue(mainPage.IsElementPresent(".//*[@id='poiContainer']/div[1]/div/div[@class='POI_Parent_Buttons']/div[@class='placesChecked']"));
	}
	
//	Check if 'Weather' is available in dropped pin's 'More info'
	@Then("^I should be able to see and open 'Weather' icon in 'Dropped Pin' panel$")
	public void i_should_be_able_to_see_and_open_Weather_icon_in_Dropped_Pin_panel() throws Throwable {
//		mainPage.waitForElementPresent(obj.weatherInDroppedPin, 5);
		assertTrue(mainPage.IsElementPresent(obj.weatherInDroppedPin));
//		mainPage.click(obj.weatherInDroppedPin);
//		mainPage.waitForElementPresent(obj.weatherPanel, 5);
//		assertTrue(mainPage.IsElementPresent(obj.weatherPanel));
	}
	
//	Check if 'Weather' is available in POI's 'More info'
	@Then("^I should be able to see and open 'Weather' icon in 'POI' panel$")
	public void i_should_be_able_to_see_and_open_Weather_icon_in_POI_panel() throws Throwable {
//		mainPage.waitForElementPresent(obj.weatherInPOI, 3);
		assertTrue(mainPage.IsElementPresent(obj.weatherInPOI));
//		mainPage.click(obj.weatherInPOI);
//		mainPage.waitForElementPresent(obj.weatherPanel, 3);
//		assertTrue(mainPage.IsElementPresent(obj.weatherPanel));
	}
	
//	Check if 'Weather' is available in 'The Places menu' help description
	@When("^I click 'The Places menu' topic$")
	public void i_click_The_Places_menu_topic() throws Throwable {
		mainPage.click(obj.helpPlacesMenuTopic);
	}
	
	@Then("^I should see 'Weather' description$")
	public void i_should_see_Weather_description() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.weatherHelpDescription));
	}

}
