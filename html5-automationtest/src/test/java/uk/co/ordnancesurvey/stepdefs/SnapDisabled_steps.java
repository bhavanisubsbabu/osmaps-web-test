package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class SnapDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public SnapDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Snap" is NOT available during route creation
	
	@Then("^'Snap' button is NOT visible$")
	public void snap_button_is_NOT_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.snapButton) &&
				mainPage.IsElementDisplayed(obj.snapButton));
	}

	// Check whether "Snap" description is NOT available in 'Create custom route' help topic

	@When("^I click 'Create custom route' help topic$")
	public void i_click_Create_custom_route_help_topic() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.helpCreateRouteTopic));
		mainPage.click(obj.helpCreateRouteTopic);
	}

	@Then("^I should NOT be able to see 'Snap' description in content$")
	public void i_should_NOT_be_able_to_see_Snap_description_in_content() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.snapHelpDescription) &&
				mainPage.IsElementDisplayed(obj.snapHelpDescription));
	}

}
