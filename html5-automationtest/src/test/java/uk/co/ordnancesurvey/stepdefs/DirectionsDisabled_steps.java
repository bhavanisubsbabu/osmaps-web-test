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

public class DirectionsDisabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public DirectionsDisabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Directions" is NOT available on top bar menu and in left burger menu
	@Then("^'Directions' should NOT be visible$")
	public void directions_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementDisplayed(obj.DirectionsTab));
	}

	@Then("^'Directions' in left burger menu should NOT be visible$")
	public void directions_in_left_burger_menu_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.burgerDirections));
	}
	
	// Check whether "Get Directions" is NOT available in 'Routes' top menu and left burger menu
	@Then("^'Get Directions' should NOT be visible$")
	public void get_Directions_should_NOT_be_visible() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.ab_Directionstab));
	}

	// Check whether "Get me here" link is NOT available on "Dropped Pin" tool
	@Then("^'Get me here' link should NOT be visible$")
	public void get_me_here_link_should_NOT_be_visible() throws Throwable {
	//	assertFalse("Element is present on page", mainPage.IsElementPresent(obj.POIGetMeHere));
		assertFalse("Element is present on page", mainPage.IsElementPresent(obj.routeGetDirection));
	}

	// Check whether "Get Directions" description is NOT available in Help Menu
	// in "The Routes menu" topic
	@When("^I select 'The Routes menu' topic$")
	public void i_select_The_Routes_menu_topic() throws Throwable {
		mainPage.click(obj.helpRoutesMenuTopic);
	}
	
	@Then("^I should NOT be able to see 'Get Directions' description$")
	public void i_should_NOT_be_able_to_see_Get_Directions_description() throws Throwable {
		assertFalse("Element is present on page", driver.findElement(By.xpath("html/body/div[5]/div[1]/div/div[1]/div[3]/span[5]")).isDisplayed());
	}

	// Check whether "The directions menu" topic is NOT available in Help Menu
	@Then("^I should NOT be able to see 'The Directions menu' topic$")
	public void i_should_NOT_be_able_to_see_The_Directions_menu_topic() throws Throwable {
		assertFalse("Element is present on page", mainPage.IsElementDisplayed(obj.helpDirectionsMenuTopic));
	}

}
