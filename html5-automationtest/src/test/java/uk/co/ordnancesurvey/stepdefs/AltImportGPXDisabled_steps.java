package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class AltImportGPXDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public AltImportGPXDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether alternative 'Import GPX' functionality is NOT available in 'Create Route'
	@Then("^alternative 'Import GPX' button should NOT be visible$")
	public void alternative_Import_GPX_button_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.routeEditImport) &&
				mainPage.IsElementDisplayed(obj.routeEditImport));
	}
	
}
