package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class PreferencesEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public PreferencesEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether 'Preferences' are enabled in the system
	@Then("^I see 'Preferences' link$")
	public void i_should_see_Preferences_link() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.preferencesMenu));
	}

	// Check whether user is able to access and modify 'Preferences'
	@Then("^I should see 'Preferences' panel with all settings$")
	public void i_should_see_Preferences_panel_with_all_settings() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelShowDistance));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelCalculateRoute));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelInitialMapView));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelInitialMapType));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelCreateRoutes));
		assertTrue(mainPage.IsElementDisplayed(obj.preferencesPanelHelpSettings));
	}

}
