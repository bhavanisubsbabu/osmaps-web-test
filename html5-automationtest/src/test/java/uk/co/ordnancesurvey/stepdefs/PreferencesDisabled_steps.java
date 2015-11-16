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

public class PreferencesDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public PreferencesDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether 'Preferences' are disabled in the system
	@Then("^I should NOT see 'Preferences' link$")
	public void i_should_NOT_see_Preferences_link() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.preferencesMenu) &&
				mainPage.IsElementDisplayed(obj.preferencesMenu));
	}

}
