package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class QuickStartGuideEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public QuickStartGuideEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
//	Check whether "Quick Start Guide" is available in left slider menu
	@Then("^'Quick Start Guide' in left burger menu should be visible$")
	public void quick_Start_Guide_in_left_burger_menu_should_be_visible() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.quickStartGuide));
	}
}
