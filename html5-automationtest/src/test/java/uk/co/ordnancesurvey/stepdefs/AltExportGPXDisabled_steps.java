package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class AltExportGPXDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public AltExportGPXDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether alternative 'Export GPX' functionality is NOT available in 'Create Route'
	@Then("^alternative 'Export GPX' button should NOT be visible$")
	public void alternative_Export_GPX_button_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.routeEditExport) &&
				mainPage.IsElementDisplayed(obj.routeEditExport));
	}
	
//	Check whether alternative 'Export GPX' functionality is NOT available in 'Edit Route'
	@When("^I click Edit route in 'My Routes'$")
	public void i_click_Edit_route_in_My_Routes() throws Throwable {
		mainPage.click(obj.editMyRoute);
		Thread.sleep(2000);
	}
	
}
