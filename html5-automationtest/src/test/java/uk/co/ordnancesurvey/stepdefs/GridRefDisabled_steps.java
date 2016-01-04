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

public class GridRefDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public GridRefDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether 'GridRef' is NOT available on toolbar
	@Then("^'GridRef' button should NOT be visible$")
	public void gridref_button_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementVisible(obj.gridRef));
	}

	// Check whether 'GridRef' description is NOT available in 'Help' menu
//	@Then("^I should NOT see 'GridRef' description in content$")
//	public void i_should_NOT_see_GridRef_description_in_content() throws Throwable {
//		assertFalse(mainPage.IsElementPresent(obj.gridRefHelpDescription) &&
//				mainPage.IsElementDisplayed(obj.gridRefHelpDescription));
//	}

}
