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

public class ImportGPXDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ImportGPXDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether 'Import GPX' is disabled in the system
	@Then("^'Import GPX' button should NOT be present$")
	public void import_GPX_button_should_NOT_be_present() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.importGPX) &&
				mainPage.IsElementDisplayed(obj.importGPX));
	}

//	Check whether 'Import GPX' description is NOT present in 'The Routes menu' help topic
	@Then("^I should NOT be able to see 'Import GPX' description$")
	public void i_should_NOT_be_able_to_see_Import_GPX_description() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.importGPXHelpDescription) &&
				mainPage.IsElementDisplayed(obj.importGPXHelpDescription));
	}
	
}
