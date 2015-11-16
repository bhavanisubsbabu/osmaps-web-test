package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ImportGPXEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ImportGPXEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether 'Import GPX' is enabled in the system
	@When("^I click 'Import GPX' button$")
	public void i_click_Import_GPX_button() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.importGPX));
		mainPage.click(obj.importGPX);
	}
	
	@Then("^I should see 'Import GPX' panel$")
	public void i_should_see_Import_GPX_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.importGPXPanel));
	}
	
//	Check whether 'Import GPX' description is present in 'The Routes menu' help topic
	@Then("^I should be able to see 'Import GPX' description$")
	public void i_should_be_able_to_see_Import_GPX_description() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.importGPXHelpDescription));
	}

}
