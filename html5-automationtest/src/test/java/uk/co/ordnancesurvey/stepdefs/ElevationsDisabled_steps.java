package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ElevationsDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ElevationsDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check if 'Elevation' is NOT available in 'Route Details'
	@Then("^I should NOT see 'Elevation' on 'Route Details'$")
	public void i_should_NOT_see_Elevation_on_Route_Details() throws Throwable {
		Thread.sleep(1000);
		assertFalse(mainPage.IsElementPresent(obj.elevationButtonInRouteDetails) &&
				mainPage.IsElementDisplayed(obj.elevationButtonInRouteDetails));
		assertFalse(mainPage.IsElementPresent(obj.elevationGraphInRouteDetails) &&
				mainPage.IsElementDisplayed(obj.elevationGraphInRouteDetails));
	}

	// Check if 'Elevation' is NOT available in 'Create Route' &&
	// Check if 'Elevation' is NOT available in 'Edit Route'
	@Then("^I should NOT see 'Elevation' graph in left panel$")
	public void i_should_NOT_see_Elevation_graph_in_left_panel() throws Throwable {
		Thread.sleep(1000);
		assertFalse(mainPage.IsElementPresent(obj.elevationGraphInCreateRoute));
	}

	// Check if 'Elevation' is NOT available in 'Create Route' expanded view &&
	// Check if 'Elevation' is NOT available in 'Edit Route' expanded view
	@Then("^I should NOT see 'Elevation' graph in expanded view$")
	public void i_should_NOT_see_Elevation_graph_in_expanded_view() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.elevationGraphExpanded));
	}
	
	// Check if 'Elevation' is NOT available in 'Directions'
	@Then("^I should NOT be able to see 'Elevations' button$")
	public void i_should_NOT_be_able_to_see_Elevations_button() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.elevationButtonInDirections));
	}

}
