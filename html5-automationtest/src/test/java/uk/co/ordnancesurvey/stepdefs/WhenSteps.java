package uk.co.ordnancesurvey.stepdefs;

import static org.junit.Assert.assertTrue;

import java.util.List;

import net.sourceforge.htmlunit.corejs.javascript.ast.SwitchCase;

import org.apache.bcel.generic.SWITCH;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class WhenSteps {
	
	
	private  WebDriver driver;
	Html5Page mainPage;
	ObjectRepository obj = new ObjectRepository();
	
	String platform= AppProperties.get("platform");
	
	
	public WhenSteps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver,
	            Html5Page.class);
	}
	
	//Logout the user from the application
	public void logOutApplication() throws InterruptedException
	
	{
		if(platform.equals("Mobile"))
		{
			driver.findElement(By.cssSelector("#Window_1_Burger_Btn_Img")).click();
			Thread.sleep(2000);
			driver.findElement(By.cssSelector("#BurgerProfileLoginLogout")).click();
		}
		else{
		Thread.sleep(2000);
		driver.findElement(By.xpath(".//*[@id='main-top-bar-sign-in']")).click();
		driver.findElement(By.xpath(".//*[@id='main-top-bar-user-menu']/div[5]")).click();
		//driver.findElement(By.xpath(".//*[@id='Window_1_SettingsText']")).click();
Thread.sleep(4000);

		}
	}
	
	
	//Login to the Application
	public void loginToApplication(String userName, String Password) throws InterruptedException 
	{
		
		
		if(platform.equalsIgnoreCase("Mobile")){
			mainPage.set_textBox(obj.login_email_address, userName);

			mainPage.set_textBox(obj.login_pwd,Password);
			mainPage.click(obj.login_button);			
			Thread.sleep(3000);
			
		}
		else{
		/*mainPage.clickLinkByXpath(obj.Settings);
		mainPage.clickLinkByXpath(obj.settings_Login);*/
		
		mainPage.set_textBox(obj.login_email_address, userName);

		mainPage.set_textBox(obj.login_pwd,Password);
		mainPage.clickLinkByXpath(obj.login_button);
		
		Thread.sleep(3000);
			
		mainPage.waitForElementPresent(obj.mapfeatures,20000);
		}
	}
	public void loginToApplicationAfterLogout(String userName, String Password) throws InterruptedException 
	{
		
		/*mainPage.clickLinkByXpath(obj.Settings);
		mainPage.clickLinkByXpath(obj.settings_Login);*/
		if(platform.equalsIgnoreCase("Mobile")){
			mainPage.set_textBox(obj.login_email_address, userName);

			mainPage.set_textBox(obj.login_pwd,Password);
			mainPage.click(obj.login_button);
				
			Thread.sleep(10000);
			
		}
		mainPage.open_login_window();
		mainPage.set_textBox(obj.login_email_address, userName);

		mainPage.set_textBox(obj.login_pwd,Password);
		mainPage.clickLinkByXpath(obj.login_button);
			
		Thread.sleep(10000);
		mainPage.waitForElementPresent(obj.mapfeatures, 20000);
	}
	
	
	@When("^I login as registered user$")
	public void i_login_as_registered_user() throws Throwable {
		//login.open_login_window();
		mainPage.close_carousel();	
		mainPage.open_login_window();
			Thread.sleep(2000);
			if (mainPage.IsElementDisplayed(obj.login_email)){
				
				loginToApplication(AppProperties.get("regUname"),AppProperties.get("regPwd"));
				Thread.sleep(5000);
			}
			else{
				
				logOutApplication();
				 
				 loginToApplicationAfterLogout(AppProperties.get("regUname"),AppProperties.get("regPwd"));
				 Thread.sleep(5000);
			}
		
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}
	
	


	@When("^I login as subscriber user$")
	public void i_login_as_subscriber_user() throws Throwable {
		Thread.sleep(3000);	
		mainPage.close_carousel();
		mainPage.open_login_window();
		Thread.sleep(2000);
		if (mainPage.IsElementDisplayed(obj.login_email)){
			
			loginToApplication(AppProperties.get("subUname"),AppProperties.get("subPwd"));
			Thread.sleep(5000);
		}
		else{
			
			logOutApplication();
			loginToApplicationAfterLogout(AppProperties.get("subUname"),AppProperties.get("subPwd"));
			Thread.sleep(5000);
		}
	}
	
	@When("^I login as guest user$")
	public void i_login_as_guest_user() throws Throwable {
		Thread.sleep(3000);
		mainPage.close_carousel();
		Thread.sleep(2000);
//		if (mainPage.IsElementDisplayed(obj.login_email_address)){
//		mainPage.clickLinkByXpath(obj.close_login);
//		}
//else{
//			
//			logOutApplication();
//			loginToApplicationAfterLogout(AppProperties.get("subUname"),AppProperties.get("subPwd"));
//		}
	}
	
	
	@When("^I login as subscriber user smoke$")
	public void i_login_as_subscriber_user_smoke() throws Throwable {
		Thread.sleep(3000);	
		mainPage.close_carousel();
		if (mainPage.IsElementDisplayed(obj.login_email)){
			
			loginToApplication(AppProperties.get("subUname"),AppProperties.get("subPwd"));
			Thread.sleep(3000);
		}}
	
	//Discover routes
	
	@When("^I click Discover under routes$")
	public void i_click_Discover_under_routes() throws Throwable {
		
		mainPage.set_textBox(obj.searchBox, "London");
		mainPage.hitEnterKey(obj.searchBox);
		Thread.sleep(2000);
		mainPage.click_discoverRoutes();
		Thread.sleep(2000);
	}
	
	@When("^I open routes menu$")
	public void i_open_routes_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  mainPage.clickLinkByXpath(obj.RoutesTab);
	  Thread.sleep(2000);
	}

	
	@When("^I open my routes$")
	public void i_open_my_routes() throws Throwable {
	    mainPage.open_myRoutes();
	    
	}
	@When("^I open places menu$")
	public void i_open_places_menu() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		mainPage.open_Mapfeatures();
	}
	
	
	@When("^I open Map features menu$")
	public void i_open_Map_features_menu() throws Throwable {
	    //mainPage.close_login_window();
		mainPage.open_Mapfeatures();
	}
	
	
	
	@When("^I Select POI \"(.*?)\"$")
	public void i_select_poi(String Arg1) throws Throwable {
		
	Thread.sleep(3000);
	mainPage.clickLinkByXpath(obj.mapfeatures);
		Thread.sleep(3000);		
//mainPage.clickLinkByXpath(obj.poi_Attractions);
	

	Thread.sleep(3000);
		mainPage.clickLinkByXpath(obj.poi_CastlesAndAttractions);
	Thread.sleep(3000);
	
	mainPage.clickLinkByXpath(obj.mapfeatures);
	Thread.sleep(3000);
	//mainPage.clickLinkByXpath(".//*[@id='Window_1_Content']/div[10]/div[@class='sidePaneClose']");
	
	}

	// to click on the view link from the poi summary
	@When("^I click on view info link from POI \"(.*?)\"$")
	public void i_click_on_view_info_link(int poiIndex) {
	    
		try {
			mainPage.locatePOI(poiIndex);
			//Thread.sleep(2000);
			mainPage.clickLinkByXpath(".//*[@class='Link_Proxy'][1]");
			//mainPage.click(".//*[@id='Window_1_Content']/div[11]/div[1]/div/div[4]");
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
	
		
	}	
		
		
		@When("^I click on POI Cluster with index \"(.*?)\"$")
		public void i_click_on_POI_with_index(String arg1)  {
			
			try {
				mainPage.locatePOI(Integer.parseInt(arg1));
			} catch (NumberFormatException | InterruptedException e) {
			
				e.printStackTrace();
			}
			
			
		
		}

		
		@When("^I am on mapstack\"(.*?)\"$")
		public void i_am_on_mapstack(String arg1) throws Throwable {
			for(int i=1;i<=Integer.parseInt(arg1);i++)
		    {
		    	mainPage.zoomIn();
		    }
		}
		
		@When("^I search \"(.*?)\"$")
		public void i_search(String arg1) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			mainPage.set_textBox(obj.searchBox, arg1);
			Thread.sleep(6000);
			mainPage.hitEnterKey(obj.searchBox);
			Thread.sleep(4000);
		   
		}
	

	
	// to click on POI Cluster using the index
	@When("^I click on POI Cluster with index (\\d+)$")
	public void i_click_on_POI_Cluster_with_index(int arg1)  {
		
		
		try {
			System.out.println(arg1);
			mainPage.clickOnPOICluster(arg1);
		} catch (InterruptedException e) {

			e.printStackTrace();
		}
		
	}
		// to click on POI  using the index
		@When("^I click on POI with index (\\d+)$")
		public void i_click_on_POI_with_index(int arg1)  {
			
			
			try {
				System.out.println(arg1);
				mainPage.locatePOI(arg1);
			} catch (InterruptedException e) {

				e.printStackTrace();
			}

	}

		@When("^I Select the Route Type as \"(.*?)\"$")
		public void i_Select_the_Route_Type_as(String arg1) throws InterruptedException  {
		
		switch(arg1)
		{
		case "Cycle":mainPage.clickLinkByXpath(obj.DiscoverRoutes_routeType_Cycle);break;
		case "Walk":mainPage.clickLinkByXpath(obj.DiscoverRoutes_routeType_Walk);break;
		case "Run":mainPage.clickLinkByXpath(obj.DiscoverRoutes_routeType_Run);break;
		case "Other":mainPage.clickLinkByXpath(obj.DiscoverRoutes_routeType_Other);break;
		case "All":mainPage.clickLinkByXpath(obj.DiscoverRoutes_routeType_All);break;
		}
			
		}
		
		
		@When("^I Select the Distance as \"(.*?)\"$")
		public void i_Select_the_distance_as(String arg1) throws InterruptedException  {
			
		List<WebElement> we=driver.findElements(By.xpath(obj.DiscoverRoutes_routeFiler_Distance_List));
		for (WebElement option : we) {
		
		if(arg1.equals(option.getText()))
		{
		 option.click(); break;
		}
		}
			
		}

		@Then("^I Should see the Route \"(.*?)\"$")
		public void i_Should_see_the_Route(String arg1) throws Throwable {

		}
//*****************************Get Directions Step definitions**************************************////////////////////////
		@When("^I open A-B Routing window$")
		public void i_open_A_B_Routing_window() throws Throwable {
			mainPage.openABwindow();
			Thread.sleep(3000);
		    // Write code here that turns the phrase above into concrete actions
		    //throw new PendingException();
		}

		@When("^I enter start location$")
		public void i_enter_start_location() throws Throwable {
			mainPage.set_textBox(obj.ab_startLocation, "London");
			mainPage.hitEnterKey(obj.ab_startLocation);
		    // Write code here that turns the phrase above into concrete actions
		   // throw new PendingException();
		}

		@When("^I enter finish location$")
		public void i_enter_finish_location() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		  mainPage.set_textBox(obj.ab_finishLocation,"Southampton");
		  mainPage.hitEnterKey(obj.ab_finishLocation);
		}

		@When("^I select car icon$")
		public void i_select_car_icon() throws Throwable {
			mainPage.clickLinkByXpath(obj.ab_carIcon);
		    // Write code here that turns the phrase above into concrete actions
		  //  throw new PendingException();
		}

		@When("^I click on GetDirections button$")
		public void i_click_on_GetDirections_button() throws Throwable {
			mainPage.clickLinkByXpath(obj.ab_getDirectionBttn);
			Thread.sleep(2000);
		    // Write code here that turns the phrase above into concrete actions
		  //  throw new PendingException();
		}
		// A-B walking route
		@When("^I select Walk icon$")
		public void i_select_Walk_icon() throws Throwable {
			mainPage.clickLinkByXpath(obj.ab_walkIcon);
		    // Write code here that turns the phrase above into concrete actions
		    //throw new PendingException();
		}
		
		
		//Pin a POI
		
		@When("^I pin a POI$")
		public void i_pin_a_POI() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    mainPage.locatePOI(14);
		    Thread.sleep(2000);
		    if(mainPage.IsElementPresent("//div[contains(@class,'PopUp_Link PopUp_Share_Link')][text()='Unpin']"))
		    	mainPage.clickLinkByXpath("//div[contains(@class,'PopUp_Link PopUp_Share_Link')][text()='Unpin']");
		    
		      	mainPage.clickLinkByXpath("//div[contains(@class,'PopUp_Link PopUp_Share_Link')][text()='Pin to Map']");
		      	Thread.sleep(3000);
		      	//mainPage.clickLinkByXpath("//div[@id='Window_1_ExternalContentFrame_Close']");
		   mainPage.PageRefresh();   
		   
		}
		@When("^I logout from aplication$")
		public void i_logout_from_aplication() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   Thread.sleep(3000);
			mainPage.signOUt();
		}
	
		@When("^I navigate on the home page or try to access functionality which is specific to a registered user$")
		public void I_navigate_on_the_home_page_or_try_to_access_functionality_which_is_specific_to_a_registered_user() throws Throwable {
			mainPage.click_discoverRoutes();
			driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]")).click();
			Thread.sleep(2000);
			assertTrue("Failed: More details link not found on route pop-up",driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[5]")).getText().contains("More Details"));
			driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[5]")).click();
			Thread.sleep(2000);
			driver.findElement(By.cssSelector(".CTA_Register")).click();
			Thread.sleep(2000);
			
		}

		
		@When("^I navigate on the home page or try to access functionality which is specific to a subscribed user$")
		public void I_navigate_on_the_home_page_or_try_to_access_functionality_which_is_specific_to_a_subscribed_user() throws Throwable {
			mainPage.click_discoverRoutes();
			driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]")).click();
			Thread.sleep(2000);
			assertTrue("Failed: More details link not found on route pop-up",driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[5]")).getText().contains("More Details"));
			driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[5]")).click();
			Thread.sleep(2000);
			//mainPage.clickLinkByXpath("obj.Sign_up_for_paid_subscription");
			driver.findElement(By.xpath(".//*[@id='users-only-common-box']/div/div[3]/div[6]")).click();
			Thread.sleep(2000);
			assertTrue("Failed: OS getamap subscription link not found on pop-up",driver.findElement(By.xpath(".//*[@id='subscription-common-box-products']/div[1]")).getText().contains("£ 19.99"));
			driver.findElement(By.xpath(".//*[@id='subscription-common-box-products']/div[1]")).click();
		
		}
			
			@When("^I get to the login box$")
			public void I_get_to_the_login_box() throws Throwable {
				Thread.sleep(4000);
				if(mainPage.IsElementDisplayed(".//*[@id='login-form']/div/div[2]/div[9]"))
				{
					driver.findElement(By.xpath(".//*[@id='login-form']/div/div[2]/div[9]")).click();
				}
				else {
					
				//mainPage.signOUt();				
				mainPage.open_login_window();
				driver.findElement(By.xpath(".//*[@id='login-form']/div/div[2]/div[9]")).click();
				}
				
			}
		
				
// User Registration
		
		@When("^I close carousel$")
		public void i_close_carousel() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
			mainPage.close_carousel();
		   // throw new PendingException();
		}

		@When("^I choose to register$")
		public void i_choose_to_register() throws Throwable {
		    mainPage.choose_toRegisternewUser();
		    
		}		
		
		
}
