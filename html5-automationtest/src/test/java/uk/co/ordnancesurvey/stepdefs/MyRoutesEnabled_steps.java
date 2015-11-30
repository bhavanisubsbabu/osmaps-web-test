package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class MyRoutesEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public MyRoutesEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	//	Check whether 'My Routes' are enabled in the system
	@Then("^I should see 'My Routes' in left menu$")
	public void i_should_see_My_Routes_in_left_menu() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.My_Routes));
	}
	
	//	Check whether 'My Routes' is available in 'My Routes' panel
	@Then("^'My Routes' should be present in 'My Routes' panel$")
	public void my_Routes_should_be_present_in_My_Routes_panel() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.showMyRoutes));
	}
	
	//	Check whether 'Who can see my route' is present in 'Create Custom Route'
	@Then("^I should see 'Who can see your route' option$")
	public void i_should_see_Who_can_see_your_route_option() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.whoCanSeeYourRoutePanel));
	}

	//	Check whether 'My Routes' description is present in 'Help' topic
	@Then("^I should see 'My Routes' description in content$")
	public void i_should_see_My_Routes_description_in_content() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.myRoutesHelpDescription));
	}
	
}
