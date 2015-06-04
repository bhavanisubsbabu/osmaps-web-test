package uk.co.ordnancesurvey.stepdefs;


import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;


public class GivenSteps {
	Html5Page mainPage;
	private  WebDriver driver;
	
	public GivenSteps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);
	}

	
	@Given("^I am on getamap app$")
	public void i_am_on_getamap_app()  throws Throwable {
		mainPage.launch_app();
		Thread.sleep(2000);
		
		 // Write code here that turns the phrase above into concrete actions
	    //throw new PendingException();
	}
	
	@Given("^I am on OSMaps$")
	public void i_am_on_OSMaps() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		mainPage.launch_app();
		Thread.sleep(2000);
	}
	
	
	
	@Given("^I can access OS maps as a guest user$")
	public void i_can_access_OS_maps_as_a_guest_user()  throws Throwable {
		mainPage.launch_app();
		Thread.sleep(2000);
		mainPage.close_carousel();
		mainPage.signOUt();
		Thread.sleep(2000);
		//mainPage.close_login_window();
		Thread.sleep(2000);
		
	}
		
		@Given("^I can access OS maps as a guest user to register$")
		public void i_can_access_OS_maps_as_a_guest_user_to_register()  throws Throwable {
			mainPage.launch_app();
			Thread.sleep(2000);
			mainPage.close_carousel();
			Thread.sleep(2000);
		
	
	
	}
		@After
		public void takeScreenshot( Scenario sc)
		{
			
	   if (sc.isFailed()==true)
	   {
		byte[] screenshot=takescreen();
		sc.embed(screenshot, "image/png");
	    }
			
		}


		private byte[] takescreen() {


			byte[] screenshot = null;
			
			screenshot= ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			
			return screenshot;
		}
		


@Given("^I can access OS maps as a guest user to subscribe$")
public void i_can_access_OS_maps_as_a_guest_user_to_subscribe()  throws Throwable {
	mainPage.launch_app();
	Thread.sleep(2000);
	mainPage.close_carousel();			
	Thread.sleep(2000);



}

@Given("^I can access OS maps as a guest user to subscribe via upsell$")
public void i_can_access_OS_maps_as_a_guest_user_to_subscribe_via_upsell()  throws Throwable {
	mainPage.launch_app();
	Thread.sleep(2000);
	mainPage.close_carousel();
	Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='login-form']/div/div[3]/div[1]/div")).click();
	Thread.sleep(2000);

}

@Given("^I am on Mapshop app$")
public void i_am_on_Mapshop_app() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	mainPage.launch_app();

}

}