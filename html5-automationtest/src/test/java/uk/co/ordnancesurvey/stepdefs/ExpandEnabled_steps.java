package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ExpandEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ExpandEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether 'Expand' button is available on toolbar
	@Then("^'Expand' button should be visible$")
	public void expand_button_should_be_visible() throws Throwable {
			assertTrue(mainPage.IsElementVisible(obj.expand));
	}

	// Check whether 'Expand' description is available in 'Create custom route' help topic
//	@Then("^I should see 'Expand' description in content$")
//	public void i_should_see_Expand_description_in_content() throws Throwable {
//		assertTrue(mainPage.IsElementDisplayed(obj.expandHelpDescription));
//	}

}
