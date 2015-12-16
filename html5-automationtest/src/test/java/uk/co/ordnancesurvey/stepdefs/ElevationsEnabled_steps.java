package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ElevationsEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ElevationsEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check if 'Elevation' is available in 'Route Details'
	@Then("^I should see and open 'Elevation' on 'Route Details'$")
	public void i_should_see_and_open_Elevation_on_Route_Details() throws Throwable {
		Thread.sleep(1000);
		assertTrue(mainPage.IsElementPresent(obj.elevationButtonInRouteDetails));
		mainPage.click(obj.elevationButtonInRouteDetails);
		Thread.sleep(1000);
		assertTrue(mainPage.IsElementPresent(obj.elevationGraphInRouteDetails));
	}

	// Check if 'Elevation' is available in 'Create Route'
	// Check if 'Elevation' is available in 'Edit Route'
	@Then("^I should see 'Elevation' graph in left panel$")
	public void i_should_see_Elevation_graph_in_left_panel() throws Throwable {
		Thread.sleep(1000);
		assertTrue(mainPage.IsElementPresent(obj.elevationGraphInCreateRoute));
	}

	// Check if 'Elevation' is available in 'Directions'
	@Then("^I should be able to see and click 'Elevations' button$")
	public void i_should_be_able_to_see_and_click_Elevations_button() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.elevationButtonInDirections));
		mainPage.click(obj.elevationButtonInDirections);
		Thread.sleep(2000);
	}

	@Then("^I should see 'Elevation' graph in 'Directions' panel$")
	public void i_should_see_Elevation_graph_in_Directions_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.elevationGraphInDirections));
	}

}
