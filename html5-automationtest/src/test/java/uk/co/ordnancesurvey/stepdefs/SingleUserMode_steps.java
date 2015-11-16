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

public class SingleUserMode_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public SingleUserMode_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
//	Check whether 'Single User Mode' is enabled in the system
	@Then("^'Sign in' button should be replaced by 'Exit' button$")
	public void sign_in_button_should_be_replaced_by_Exit_button() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.exitButton));
	}
	
//	Check whether 'My Routes' are disabled in 'Routes' menu in Single User Mode
	@Then("^'My Routes' should NOT be present$")
	public void my_Routes_should_NOT_be_present() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.My_Routes) &&
				mainPage.IsElementDisplayed(obj.My_Routes));
	}
	
//	Check whether 'Save' button is NOT present in 'Get Direction' functionality in 'Single User Mode'
	@Then("^'Save' button should NOT be present$")
	public void save_button_should_NOT_be_present() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.routeABResultsSaveBtn) &&
				mainPage.IsElementDisplayed(obj.routeABResultsSaveBtn));
	}

//	Check whether 'Print' message is changed in 'Single User Mode'
	@When("^I click on 'Print' button$")
	public void i_click_on_Print_button() throws Throwable {
		mainPage.selectPrint();
	}

	@Then("^additional 'Print' text is not displayed$")
	public void additional_Print_text_is_not_displayed() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.printAdditionalText) &&
					mainPage.IsElementDisplayed(obj.printAdditionalText));
	}

//	Check whether 'My Routes' description is NOT present in 'Help' topic in 'Single User Mode'
	@Then("^I should NOT be able to see 'My Routes' description$")
	public void i_should_NOT_be_able_to_see_My_Routes_description() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.myRoutesHelpDescription) &&
					mainPage.IsElementDisplayed(obj.myRoutesHelpDescription));
	}

}
