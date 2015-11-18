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

public class RoutesDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public RoutesDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether 'Routes' button is disabled in the system
	@Then("^I should NOT see 'Routes' button in burger menu and in top bar$")
	public void i_should_NOT_see_Routes_button_in_burger_menu_and_in_top_bar() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.burgerRoutes) &&
				mainPage.IsElementDisplayed(obj.burgerRoutes));
		assertFalse(mainPage.IsElementPresent(obj.RoutesTab) &&
				mainPage.IsElementDisplayed(obj.RoutesTab));
	}

//	Check whether 'The Routes menu' is NOT available in 'Help'
	@Then("^I should NOT be able to see 'The Routes menu' topic$")
	public void i_should_NOT_be_able_to_see_The_Routes_menu_topic() throws Throwable {
		Thread.sleep(1000);
		assertFalse(mainPage.IsElementPresent(obj.helpRoutesMenuTopic) &&
				mainPage.IsElementDisplayed(obj.helpRoutesMenuTopic));
	}
	
}
