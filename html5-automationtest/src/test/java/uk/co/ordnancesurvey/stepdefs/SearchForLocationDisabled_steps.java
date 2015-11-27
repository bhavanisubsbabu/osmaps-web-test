package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class SearchForLocationDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public SearchForLocationDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	//	Check if 'Search for Location' is NOT visible in the top bar
	@Then("^I should NOT see 'Search for Location' search box in top bar$")
	public void i_should_NOT_see_Search_for_Location_search_box_in_top_bar() throws Throwable {
		assertFalse(mainPage.IsElementPresent(obj.topBarSearchIcon));
	}
	
	
	
	

}
