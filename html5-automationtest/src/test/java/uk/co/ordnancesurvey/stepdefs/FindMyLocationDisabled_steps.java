package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class FindMyLocationDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public FindMyLocationDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Find My Location" functionality is NOT available
	@Then("^'Find My Location' button is NOT visible$")
	public void find_My_Location_button_is_NOT_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.findMyLocationButton) &&
				mainPage.IsElementDisplayed(obj.findMyLocationButton));
	}
	
}
