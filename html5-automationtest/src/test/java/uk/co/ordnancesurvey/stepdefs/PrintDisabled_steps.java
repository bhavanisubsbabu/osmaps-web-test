package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class PrintDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public PrintDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
//	Check whether "Print" is NOT available in left burger menu and on toolbar
	@Then("^'Print' in left burger menu should NOT be visible$")
	public void print_in_left_burger_menu_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.burgerPrint) &&
				mainPage.IsElementDisplayed(obj.burgerPrint));
	}
	
	@Then("^'Print' button on toolbar should NOT be visible$")
	public void print_button_on_toolbar_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.print_toolbar) &&
				mainPage.IsElementDisplayed(obj.print_toolbar));
	}
	
//	Check whether "Print" is NOT mentioned is 'Help'
//	@When("^I click 'The Directions menu' topic$")
//	public void i_click_The_Directions_menu_topic() throws Throwable {
//
//	}
//
//	@Then("^I should NOT be able to see Print mention in description$")
//	public void i_should_NOT_be_able_to_see_Print_mention_in_description() throws Throwable {
//
//	}

}
