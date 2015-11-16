package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ShareRouteDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public ShareRouteDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	//	Check whether "Share" functionality is NOT available in 'Discovered Routes'
	//	Check whether "Share" functionality is NOT available in 'My Routes'
	@Then("^'Share' button should NOT be visible$")
	public void share_button_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.shareRoute) &&
				mainPage.IsElementDisplayed(obj.shareRoute));
	}
	
}
