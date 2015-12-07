package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class AltImportGPXEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public AltImportGPXEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether alternative 'Import GPX' functionality is available in 'Create Route'
	@When("^I click 'Import GPX' button on left panel$")
	public void i_click_Import_GPX_button_on_left_panel() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.routeEditImport));
		mainPage.click(obj.routeEditImport);
		Thread.sleep(1000);
	}

	@Then("^I should see 'Import warning' message$")
	public void i_should_see_Import_warning_message() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.importRouteOverwriteMessage));
		mainPage.click(".//*[@id='Window_1_Content']/div[@class='FullScreen']/div/div[@class='dialogButtonGroup']/div");
	}
	
}
