package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class HelpAndInformationEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public HelpAndInformationEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether 'Help and Information' in burger menu is enabled
	@When("^I click 'Help and Information'$")
	public void i_click_Help_and_Information() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.burgerHelpAndInformation));
		mainPage.click(obj.burgerHelpAndInformation);
		Thread.sleep(500);
	}

	@Then("^I should see 'Information' panel with all six items available$")
	public void i_should_see_Information_panel_with_all_six_items_available() throws Throwable {
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationAbout']"));
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationFAQ']"));
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationHelp']"));
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationContact']"));
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationTerms']"));
		assertTrue(mainPage.IsElementPresent(".//*[@id='InformationPrivacy']"));
	}

}
