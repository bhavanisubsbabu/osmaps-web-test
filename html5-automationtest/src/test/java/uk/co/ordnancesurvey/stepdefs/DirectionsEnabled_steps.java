package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class DirectionsEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public DirectionsEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether "Directions" is available on top bar menu
	@When("^I select 'Directions' tab in top menu$")
	public void i_select_Directions_tab_in_top_menu() throws Throwable {
		mainPage.click(obj.DirectionsTab);
	}

	// Check whether "Directions" is available in left slider menu
	@When("^I click 'Directions' button in burger menu$")
	public void i_click_Directions_button_in_burger_menu() throws Throwable {
		mainPage.click(obj.burgerDirections);
	}

	// Check whether "Get Directions" is available in 'Routes' top menu
	@When("^I select 'Routes' tab in top menu$")
	public void i_select_Routes_tab_in_top_menu() throws Throwable {
		mainPage.click(obj.Routes_Tab);
	}

	@When("^I click 'Get Directions' button in left menu$")
	public void i_click_Get_Directions_button_in_left_menu() throws Throwable {
		mainPage.click(obj.ab_Directionstab);
	}
	
	// Check whether "Get Directions" is available in 'Routes' side menu
	@When("^I click 'Routes' button in burger menu$")
	public void i_click_Routes_button_in_burger_menu() throws Throwable {
		mainPage.click(obj.burgerRoutes);
	}

	// Check whether "Get me here" link is available on "Dropped Pin" tool
	@When("^I click 'Get me here' link on dropped pin$")
	public void i_click_Get_me_here_link_on_dropped_pin() throws Throwable {
		mainPage.click(obj.POIGetMeHere);
//		mainPage.click(obj.routeGetDirection);
	}

	// Check whether "Get me here" link is available within "Discover Routes"
	@When("^I click 'Discover Routes' in left menu$")
	public void i_click_Discover_Routes_in_left_menu() throws Throwable {
		mainPage.click(obj.RoutesTab_DiscoverRoutes);
		Thread.sleep(3000);
	}

	@When("^I select one of available routes$")
	public void i_select_one_of_available_routes() throws Throwable {
		mainPage.click(obj.discoveredRoutes);
	}

	// Check whether "Get me here" link is available within "My routes"
	@When("^I click 'My Routes' in left menu$")
	public void i_click_My_Routes_in_left_menu() throws Throwable {
		mainPage.click(obj.My_Routes);
	}

	// Check whether "Get Directions" description is available in Help Menu in "The Routes menu" topic

	@Then("^I should be able to see 'Get Directions' description$")
	public void i_should_be_able_to_see_Get_Directions_description() throws Throwable {
		assertTrue(driver.findElement(By.xpath("html/body/div[5]/div[1]/div/div[1]/div[3]/span[5]")).isDisplayed());
	}

	// Check whether "The directions menu" topic is available in Help Menu
	@Then("^I should be able to see 'The Directions menu' topic$")
	public void i_should_be_able_to_see_The_Directions_menu_description() throws Throwable {
		assertTrue(mainPage.IsElementDisplayed(obj.helpDirectionsMenuTopic));
	}

}
