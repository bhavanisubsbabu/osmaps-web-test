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

public class MyRoutesDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public MyRoutesDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	//	Check whether 'Who can see my route' is NOT present in 'Create Custom Route'
	@Then("^I should NOT see 'Who can see your route' option$")
	public void i_should_NOT_see_Who_can_see_your_route_option() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.whoCanSeeYourRoutePanel) &&
				mainPage.IsElementDisplayed(obj.whoCanSeeYourRoutePanel));
	}

}
