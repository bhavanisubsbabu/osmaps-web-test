package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class EditWaypointEnabled_Disabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public EditWaypointEnabled_Disabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	// Check whether 'Start' waypoint is editable
	@When("^I create and open 'Start' waypoint$")
	public void i_create_and_open_Start_waypoint() throws Throwable {
		Actions action = new Actions(driver);
		Thread.sleep(1000);
		mainPage.zoomIn();
		mainPage.zoomIn();
		WebElement waypoint = driver.findElement(By.xpath(".//*[@id='create-route-draw']"));
		Thread.sleep(500);
		action.moveToElement(waypoint, -150, 150).click().build().perform();
		action.moveToElement(waypoint, -150, 150).click().build().perform();
		Thread.sleep(500);
	}

	@Then("^I should see 'Clear' and 'Edit' in waypoint popup$")
	public void i_should_see_Clear_and_Edit_in_waypoint_popup() throws Throwable {
		assertTrue(mainPage.IsElementPresent(".//*[@id='more-info-dropped-pin' and contains(., 'Clear')]")
				&& mainPage.IsElementPresent(".//*[@id='directions-dropped-pin' and contains(., 'Edit')]"));
	}

	// Check whether 'Start' waypoint is NOT editable
	@Then("^I should NOT see 'Clear' and 'Edit' in waypoint popup$")
	public void i_should_NOT_see_Clear_and_Edit_in_waypoint_popup() throws Throwable {
		assertFalse(mainPage.IsElementPresent(".//*[@id='more-info-dropped-pin' and contains(., 'Clear')]")
				&& mainPage.IsElementPresent(".//*[@id='directions-dropped-pin' and contains(., 'Edit')]"));
	}

}
