package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class SearchForLocationEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public SearchForLocationEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	//	Check if 'Search for Location' is visible in the top bar
	
	@Then("^I should see 'Search for Location' search box in top bar$")
	public void i_should_see_Search_for_Location_search_box_in_top_bar() throws Throwable {
			assertTrue(mainPage.IsElementPresent(obj.topBarSearchIcon));
	}
	
	@Then("^I should be able to search for location$")
	public void i_should_be_able_to_search_for_location() throws Throwable {
		mainPage.set_textBox(obj.searchBox, "London");
		Thread.sleep(6000);
		mainPage.hitEnterKey(obj.searchBox);
		Thread.sleep(4000);
		assertTrue(mainPage.IsElementPresent(obj.droppedPin));
	}
	
	
	

}
