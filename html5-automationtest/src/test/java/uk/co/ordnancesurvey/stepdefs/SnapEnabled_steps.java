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

public class SnapEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public SnapEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Snap" is available during route creation
	
	@When("^I zoom in map on National Park location$")
	public void i_zoom_in_map() throws Throwable {
		mainPage.searchMap("Hill Top");
	}

	@Then("^'Snap' button should be visible and enabled$")
	public void snap_button_should_be_visible_and_enabled() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.snapButton) &&
					mainPage.IsElementEnabled(obj.snapButton));
	}

	// Check whether "Snap" description is available in 'Create custom route' help topic

	@Then("^I should see 'Snap' description in content$")
	public void i_should_see_Snap_description_in_content() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.snapHelpDescription));
	}

}
