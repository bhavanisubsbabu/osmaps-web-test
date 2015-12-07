package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class AltExportGPXEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public AltExportGPXEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	//	Check whether alternative 'Export GPX' functionality is available in 'Create Route'
	@When("^I click 'Export GPX' button$")
	public void i_click_Export_GPX_button() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.routeEditExport));
		mainPage.click(obj.routeEditExport);
	}

	@Then("^I should see a 'Save route' message$")
	public void i_should_see_a_Save_route_message() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.exportRouteSaveMessage));
	}

	//	Check whether alternative 'Export GPX' functionality is available in 'Edit Route'
	@Then("^alternative 'Export GPX' button should be visible$")
	public void alternative_Export_GPX_button_should_be_visible() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.routeEditExport));
	}
	
}
