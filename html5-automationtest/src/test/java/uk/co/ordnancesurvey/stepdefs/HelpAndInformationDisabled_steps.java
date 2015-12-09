package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class HelpAndInformationDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public HelpAndInformationDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

//	Check whether 'Help and Information' in burger menu is disabled
	@Then("^'Help and Information' in left burger menu should NOT be visible$")
	public void help_and_Information_in_left_burger_menu_should_NOT_be_visible() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.burgerHelpAndInformation));
	}
	
}
