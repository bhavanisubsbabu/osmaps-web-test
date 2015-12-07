package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.*;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

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

	//	Check if DofE 'Route Card' is created
	@When("^I click 'Route Card' button in top bar$")
	public void i_click_Route_Card_button_in_top_bar() throws Throwable {
		Thread.sleep(2000);
		assertTrue(mainPage.IsElementPresent(obj.dofeRouteCardButton));
		mainPage.click(obj.dofeRouteCardButton);
		Thread.sleep(1000);
	}

	@Then("^I should see a 'Route Card' for selected route created$")
	public void i_should_see_a_Route_Card_for_selected_route_created() throws Throwable {
		assertTrue(mainPage.IsElementPresent(obj.routeCardDetails) &&
				mainPage.IsElementPresent(obj.routeCardBreakdown));
	}

	//	Check if DofE 'Route Card' is editable
	@Then("^I should be able to edit 'Expedition details'$")
	public void i_should_be_able_to_edit_Expedition_details() throws Throwable {
		
		WebElement aimOfExpeditionInput = driver.findElement(By.xpath(".//*[@id='aim_of_expedition']"));
		WebElement namesOfTeamMembersInput = driver.findElement(By.xpath(".//*[@id='names_of_team_members']"));
		WebElement dofeGroupNameInput = driver.findElement(By.xpath(".//*[@id='names_of_dofe_group_and_contact_details']"));
		WebElement supervisorsNamesInput = driver.findElement(By.xpath(".//*[@id='supervisiors_names_and_contact_details']"));
		WebElement teamNameInput = driver.findElement(By.xpath(".//*[@id='team_name']"));
		WebElement settingOutTimeHours = driver.findElement(By.xpath(".//*[@id='setting_out_time_hours']"));
		WebElement settingOutTimeMinutes = driver.findElement(By.xpath(".//*[@id='setting_out_time_mins']"));
		WebElement startDate = driver.findElement(By.xpath(".//*[@id='date']"));
		WebElement dayNumberFirst = driver.findElement(By.xpath(".//*[@id='day_number_of_total_days']"));
		WebElement dayNumberSecond = driver.findElement(By.xpath(".//*[@id='day_number_of_total_days_max']"));
		WebElement expeditionLevel = driver.findElement(By.xpath(".//*[@id='expedition_level']"));
		WebElement speedInkmInput = driver.findElement(By.xpath(".//*[@id='speed_in_km']"));
		
//		Fill Aim of expedition/Names of team members/Name of DofE group/Supervisor names/Team name fields		
		aimOfExpeditionInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "AUTOTEST EXPEDITION");
		namesOfTeamMembersInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "A,B,C,D,E,F,...");
		dofeGroupNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "Test A, TestB, TestC, ...");
		supervisorsNamesInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "Test A, TestB, TestC, ...");
		teamNameInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "TeamName");
//		Setting out time from dropdown		
		Select hoursDropdown = new Select(settingOutTimeHours);
		hoursDropdown.selectByValue("8");
		Select minutesDropdown = new Select(settingOutTimeMinutes);
		minutesDropdown.selectByValue("0");
//		Setting date and day number of total days
		startDate.sendKeys(Keys.chord(Keys.CONTROL, "a"), "2016-01-01", Keys.chord(Keys.ENTER));
		dayNumberFirst.sendKeys(Keys.chord(Keys.CONTROL, "a"), "1");
		dayNumberSecond.sendKeys(Keys.chord(Keys.CONTROL, "a"), "4");
//		Selecting Expedition level from dropdown
		Select dropdown = new Select(expeditionLevel);
		dropdown.selectByValue("3");
		Thread.sleep(2000);
//		Setting Speed in km		
		mainPage.click(".//*[@id='route-card-details']/div[@class='form-section']/form/div/div[10]/label");
		speedInkmInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "5", Keys.chord(Keys.ENTER));
		Thread.sleep(2000);
	}
	
	@Then("^I should be able to edit 'Route breakdown' table$")
	public void i_should_be_able_to_edit_Route_breakdown_table() throws Throwable {

		WebElement bearingInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='bearing']/input"));
		WebElement journeyTime = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='journey-time changed']"));
		WebElement projectWorkInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='project-time']/input"));
		WebElement restTimeInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='rest-time']/input"));
		WebElement totalLegDuration = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='total-time']"));
		WebElement escapeNotesInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='escape-notes']/textarea"));
		WebElement activityInput = driver.findElement(By.xpath(".//*[@id='checkpoint-leg-1']/td[@class='activity']/textarea"));

//		Fill editable fields in Route breakdown table 
		bearingInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "100");
		projectWorkInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "10", Keys.chord(Keys.ENTER));
		restTimeInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "20", Keys.chord(Keys.ENTER));
		escapeNotesInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "...Test Escape Note...");
		activityInput.sendKeys(Keys.chord(Keys.CONTROL, "a"), "...Test Activity Input...");

//		Check if Total leg duration is calculated correctly		
		int journeyTimeValue = Integer.parseInt(journeyTime.getAttribute("data-time"));
		int inputValueA = Integer.parseInt(projectWorkInput.getAttribute("value"));
		int inputValueB = Integer.parseInt(restTimeInput.getAttribute("value"));
		int totalLegDurationValue = Integer.parseInt(totalLegDuration.getAttribute("data-time"));
		int totalTimeValue = journeyTimeValue + inputValueA + inputValueB;
		assertEquals(totalTimeValue, totalLegDurationValue);

	}
	
	@Then("^I should be able to 'Save' route card$")
	public void i_should_be_able_to_Save_route_card() throws Throwable {
		mainPage.click(obj.routeSaveButton);
		Thread.sleep(5000);
		assertTrue(mainPage.IsElementPresent(".//*[@id='Window_1_Content']/div[@class='FullScreen']/div/div[@class='dialogText' and contains(.,'Saved')]")); 
	}

}
