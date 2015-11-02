package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class FindMyLocationEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public FindMyLocationEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Find My Location" functionality is available
	@When("^'Find My Location' button is enabled$")
	public void find_My_Location_button_is_enabled() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.findMyLocationButton));
	}

	@Then("^'Find My Location' works as expected$")
	public void find_My_Location_works_as_expected() throws Throwable {
		mainPage.click(obj.findMyLocationButton);
		Thread.sleep(5000);
	}

}
