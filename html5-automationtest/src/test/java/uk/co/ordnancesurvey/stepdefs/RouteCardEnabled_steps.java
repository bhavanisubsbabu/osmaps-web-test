package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class RouteCardEnabled_steps {

	Html5Page mainPage;
	private WebDriver driver;
	ObjectRepository obj;

	public RouteCardEnabled_steps(SharedWebDriver driver) {
		this.driver = driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	@When("^I click 'Route Card' button in top bar$")
	public void i_click_Route_Card_button_in_top_bar() throws Throwable {
		Thread.sleep(2000);
		assertTrue(mainPage.IsElementPresent(obj.dofeRouteCardButton));
		mainPage.click(obj.dofeRouteCardButton);
		Thread.sleep(1000);
	}

	@Then("^I should see a 'Route Card' for selected route created$")
	public void i_should_see_a_Route_Card_for_selected_route_created() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.routeCardDetails) && mainPage.IsElementPresent(obj.routeCardBreakdown));
	}

	@Then("^I should be able to edit editable fields on 'Route Card'$")
	public void i_should_be_able_to_edit_editable_fields_on_Route_Card() throws Throwable {

		WebElement journeyTime = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='journey-time changed']"));
		WebElement projectWorkInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='project-time']/input"));
		WebElement restTimeInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='rest-time']/input"));
		WebElement totalLegDuration = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='total-time']"));
		
		projectWorkInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "10");
		projectWorkInput.sendKeys(Keys.ENTER);
		restTimeInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "20");
		restTimeInput.sendKeys(Keys.ENTER);

		int journeyTimeValue = Integer.parseInt(journeyTime.getAttribute("data-time"));
		int inputValueA = Integer.parseInt(projectWorkInput.getAttribute("value"));
		int inputValueB = Integer.parseInt(restTimeInput.getAttribute("value"));
		int totalLegDurationValue = Integer.parseInt(totalLegDuration.getAttribute("data-time"));
		int totalTimeValue = journeyTimeValue + inputValueA + inputValueB;

		assertEquals(totalTimeValue, totalLegDurationValue);
	
	}
}
