package uk.co.ordnancesurvey.stepdefs;

import java.util.Hashtable;
import java.util.List;

import static org.junit.Assert.assertTrue;
import junit.framework.Assert;
//import junit.framework.Assert;
import net.sourceforge.htmlunit.corejs.javascript.ast.SwitchCase;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class ThenSteps {
	Html5Page mainPage;
	private  WebDriver driver;
	String platform= AppProperties.get("platform");
	ObjectRepository obj = new ObjectRepository();
	

	public ThenSteps(SharedWebDriver driver){
		
		this.driver=driver;
		mainPage = PageFactory.initElements(driver,
	            Html5Page.class);
			
		
	}

	
	@Then("^I should be able to create route$")
	public void i_should_be_able_to_create_route()   {
		
			try {
				
				if(platform.equalsIgnoreCase("Mobile")){
					mainPage.plot_newRoute_onMobile();
					
					
				}
				else {
					
				
				//mainPage.OpenRoutesmenu();
				
				
				mainPage.plot_newRoute();
				}
			} catch (InterruptedException e) {
		
				e.printStackTrace();
			}
			
					

	

	}
	
	
	@Then("^I should be able to create route on mapstack\"(.*?)\"$")
	public void i_should_be_able_to_create_route_on_mapstack(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		try {
			
			if(platform.equalsIgnoreCase("Mobile")){
				mainPage.plot_newRoute_onMobile();
				
				
			}
			else {
				
			
			mainPage.plot_newRoute_MapStack();
			
			
			//mainPage.plot_newRoute();
			}
		} catch (InterruptedException e) {
	
			e.printStackTrace();
		}
		
	    
	}
	
	@Then("^I should be able to create route in \"(.*?)\"$")
	public void i_should_be_able_to_create_route_in(String arg1) throws Throwable {
      try {
			
			if(platform.equalsIgnoreCase("Mobile")){
				mainPage.plot_newRoute_onMobile();
				
				
			}
			else {
				
			
			mainPage.plot_newRoute_MapStack();
			
			
			//mainPage.plot_newRoute();
			}
		} catch (InterruptedException e) {
	
			e.printStackTrace();
		}
		
	    
	}
	
	
	@Then("^Save the route\\.$")
	public void save_the_route()  {
		try {
			if(platform.equalsIgnoreCase("Mobile")){
				
				
			}
			else {
			mainPage.save_route("default");
			}
		} catch (InterruptedException e) {
	
			e.printStackTrace();
		}
	}

		@Then("^Save as customed route$")
		public void save_as_customed_route() throws Throwable {
			try {
				if(platform.equalsIgnoreCase("Mobile")){
					
					
				}
				else {
				mainPage.save_route("custom");
				}
			} catch (InterruptedException e) {
		
				e.printStackTrace();
			}
		    // Write code here that turns the phrase above into concrete actions
		    //throw new PendingException();
		}

		
	
	//save and edit route.
	@Then("^I should be able to edit route$")
	public void i_should_be_able_to_edit_route() throws Throwable {
		if(platform.equalsIgnoreCase("Mobile")){
			
			
		}
		else {
	    mainPage.eidt_saved_route();
		}
	}
	
	//save as private route
	
	@Then("^Save the route as private$")
	public void save_the_route_as_private() throws Throwable {
		mainPage.save_route_run("no");
	}

	
	//-verify route exist on the map
	@Then("^I should see available public routes in that map view area$")
	public void i_should_see_available_public_routes_in_that_map_view_area() throws Throwable {
	   mainPage.IsElementPresent(obj.Route_list);
	}
	@Then("^I should be able to create route on \"(.*?)\"km Map$")
	public void i_should_be_able_to_create_route_on_k_Map(int arg1)  {	
	
		try {
			if (arg1==25)
			{
				Thread.sleep(2000);
				mainPage.clickLinkByXpath("html/body/div[2]/div[2]/div[12]/div[3]");
				mainPage.clickLinkByXpath(obj.map125);
				
			
			}
		else
		
		if (arg1==50)
		{
			Thread.sleep(2000);
			mainPage.clickLinkByXpath("html/body/div[2]/div[2]/div[12]/div[3]");	
			mainPage.clickLinkByXpath(obj.map150);
		}
				
				mainPage.OpenRoutesmenu();
				mainPage.zoomIn();
				mainPage.zoomIn();
				mainPage.zoomIn();
				mainPage.zoomIn();
				mainPage.zoomIn();	
				Thread.sleep(3000);
				
				mainPage.plot_newRoute();
	} catch (InterruptedException e) {
			
				e.printStackTrace();
			}	
			

	}

	
	
	@Then("^I should be able to verify \"(.*?)\" on \"(.*?)\"$")
	public void i_should_be_able_to_verify(String Arg1,int Arg2) throws Throwable {
			for (int j = 0; j < 6; j++) {
				
				mainPage.zoomIn();
			}
			
			 mainPage.locatePOI(Arg2);
			String poiInfo= mainPage.getText(".//*[@id='Window_1_Content']/div[15]/div[1]/div/div[3]");
			assertTrue(poiInfo.contains(Arg1));
			
			for (int k = 0; k < 6; k++) {
				
				mainPage.zoomout();
			}

	} 
	@Then("^I should be able to verify POI with \"(.*?)\" and \"(.*?)\" on Zoomstack\"(.*?)\"$")
	public void i_should_be_able_to_verify_POI_on_Zoomstack(int poiIndex,String poiText, int zoomstack) {
			
		 try {
			 mainPage.locatePOI(3);
			 
			 for (int i = 1; i <= zoomstack; i++) {
				 mainPage.zoomIn();
				
			}
			 mainPage.locatePOI(poiIndex);
			String poiInfo= mainPage.getText(".//*[@id='Window_1_Content']/div[15]/div[1]/div/div[3]");
			
			assertTrue(poiInfo.contains(poiText));
	
		} catch (InterruptedException e) {
			
			e.printStackTrace();
		}
		
	}


	@Then("^I should be able to see side bar with POI detail information \"(.*?)\" \"(.*?)\" \"(.*?)\" \"(.*?)\"$")
	public void i_should_be_able_to_see_side_bar_with_POI_detail_information(String arg1,String arg2,String arg3,String arg4) throws InterruptedException  {
		Thread.sleep(2000);
	String AddressLines=mainPage.getText(".//*[@id='Window_1_Content']/div[12]/div[1]/div");

	assertTrue(AddressLines.contains(arg1));
	assertTrue(AddressLines.contains(arg2));
	assertTrue(AddressLines.contains(arg3));
	assertTrue(AddressLines.contains(arg4));

		
	}
	//find POI Categories on the POI side panel
		@Then("^I should be able to see the POI Categories$")
		public void i_should_be_able_to_see_the_POI_Categories() throws Throwable {
		  
			mainPage.verify_poi_categories_exist();
			
		}
	

@Then("^I should see \"(.*?)\" POIs and clustered POIs$")
public void i_should_see_POIs_and_clustered_POIs(String arg1) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
 int total_pois=mainPage.filter_POIbyType();
 assertTrue("Failed: Total POIs returned" + total_pois + " doesn't match to expected"+arg1+" value",(Integer.parseInt(arg1)==total_pois ));
   
}


		@Then("^by sub category \"(.*?)\"$")
		public void by_sub_category(String arg1) throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   
		}
		
		
		
		@Then("^I should be able to verify the (\\d+) POI present on the page$")
		public void i_should_be_able_to_verify_the_POI_present_on_the_page(int arg1)  {

			
			int ActualPOICount=mainPage.filter_POIbyType();
			
			assertTrue("Expected POI Count"+arg1+"doesn't match with" +ActualPOICount ,ActualPOICount==arg1);
		}

		@Then("^I should be able to close summary box by clicking on x button$")
		public void i_should_be_able_to_close_summary_box_by_clicking_on_x_button() {
		  
			try {
				mainPage.clickLinkByXpath(obj.poi_Closebutton);
				Thread.sleep(2000);
				assertTrue(!mainPage.IsElementPresent(obj.poi_window));
				
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		
		}
	
		
		@Then("^Save the route as run$")
		public void save_the_route_as_run() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    mainPage.save_route_run("yes");
		}

		@Then("^Save the route as cycle$")
		public void save_the_route_as_cycle() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		    mainPage.save_route_cycle();
		}

		
		@Then("^Save the route as any \"(.*?)\"$")
		public void save_the_route_as_any(String arg1) throws Throwable {
			
			System.out.println(arg1);
			mainPage.save_routetype(arg1);
		    
		   
		}
		
		
		@Then("^I should be able to verify POI \"(.*?)\"$")
		public void i_should_be_able_to_verify(String arg1) throws Throwable {
			
			String poiInfo= mainPage.getText(".//*[@id='Window_1_Content']/div[11]/div[1]/div/div[3]");
			assertTrue(poiInfo.contains(arg1));
	
		}

		@Then("^I should not be able to see on POI \"(.*?)\"$")
		public void i_should_not_be_able_to_see_on_POI(String arg1) throws Throwable {

			String poiInfo= mainPage.getText(".//*[@id='Window_1_Content']/div[11]/div[1]/div/div[3]");
			assertTrue(!poiInfo.contains(arg1));
		}
		

//		@Then("^I Should see the Route \"(.*?)\" on the sidebar$")
//		public void i_should_see_the_route_on_the_sidebar(String arg1) throws Throwable {
//
//			mainPage.clickLinkByXpath(obj.DiscoverRoutes_route_List_FirstRoute);
//			String RouteName=mainPage.getText(obj.DiscoverRoutes_route_List_FirstRoute);
//			assertTrue("The Exepcted Route Name"+arg1+"is not found in side bar Routes First List Item"+RouteName, RouteName.contains(arg1));
//			System.out.println(RouteName+ "   And" + arg1);
//			mainPage.signOUt();
//		
//		}
		
		
		@Then("^I Should see the Route \"(.*?)\" on the Map$")
		public void i_should_see_the_route_on_the_map(String arg1) throws Throwable {

		mainPage.clickLinkByXpath(obj.DiscoverRoutes_route_List_FirstRoute_ViewLink);
		
		String poiInfo= mainPage.getText(obj.DiscoverRoutes_route_POI_RouteName);
		
		System.out.println(poiInfo);
		System.out.println(arg1);
		
		assertTrue("The Exepcted Route Name"+arg1+"is not found in POI info"+poiInfo,poiInfo.contains(arg1));
		mainPage.signOUt();
		}
		
	//To test map stack test
		
		@Then("^I should see (\\d+)k mapstack$")
		public void i_should_see_k_mapstack(int arg1) throws Throwable {
		   mainPage.openMapstack();
		   mainPage.verifyMapstackButtons_Subscriber();
		}

		
		@Then("^I should see Aerial map stack$")
		public void i_should_see_Aerial_map_stack() throws Throwable {
			mainPage.openMapstack();
			mainPage.verifyMapstackButtons_registered();
		    
		}

		@Then("^I should  see Zoom map stack$")
		public void i_should_see_Zoom_map_stack() throws Throwable {
			mainPage.verifyMapstackButtons_registered();
		    
		}
		
		@Then("^I should not be able to see leisuremapstack$")
		public void i_should_not_be_able_to_see_leisuremapstack() throws Throwable {
			mainPage.verify_subscriptionUpsell();
		}

		
		@Then("^I Should see the Route \"(.*?)\" on the sidebar$")
		public void i_should_see_the_route_on_the_sidebars(String arg1) throws Throwable {

			mainPage.clickLinkByXpath(obj.DiscoverRoutes_route_List_FirstRoute);
			String RouteName=mainPage.getText(obj.DiscoverRoutes_route_List_FirstRoute);
			assertTrue("The Exepcted Route Name"+arg1+"is not found in side bar Routes First List Item"+RouteName, RouteName.contains(arg1));
			System.out.println(RouteName+ "   And" + arg1);
			mainPage.signOUt();
    
}
	

		@Then("^I should see ratings for Discover routes$")
		public void i_should_see_ratings_for_Discover_routes() throws Throwable {
			//mainPage.zoomIn();
			Thread.sleep(3000);
			String ratings_onrouteList=mainPage.getText(".//*[@id='discoveredRoutesList']/div[1]/div[1]/div[1]/div[2]");
			if (ratings_onrouteList.equals("(1)")){
			mainPage.zoomIn();
			mainPage.clickLinkByXpath(obj.DiscoverRoutes_route_List_FirstRoute);
			}
			
		    else {
		    	mainPage.clickLinkByXpath(obj.DiscoverRoutes_route_List_FirstRoute);
				mainPage.Verify_StarRatings_Popup();
			}}


	
//***************************A-B routing Step definitions*********************************//

		

		@Then("^I should be able to rate authored routes$")
		public void i_should_be_able_to_rate_authored_routes() throws Throwable {
		    mainPage.clickLinkByXpath(".//*[@id='discPopupContent']/div[5]");
		    Thread.sleep(3000);
		    mainPage.Verify_StarRatings_SidePanel();
		    mainPage.clickLinkByXpath(".//*[@id='routeDetailRating']/div/div[1]/div[1]");
		    mainPage.Verify_StarRate_SidePanel();
		    String ratings=mainPage.getText(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[2]");
		    
		    
		    //System.out.print("Ratings:"+ ratings);
		    //if(ratings.equals("(1)"))
		    //{
		    	//System.out.print("Rating is already done for this route");
		    //}
		    	
		    //else{
		    
		    //assertTrue("The Exepcted ratings"+ ratings +"is not found in side bar ", ratings.contains("(1)"));
//		    mainPage.IsElementPresent(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[2]");
		    mainPage.clickLinkByXpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[9]");
		    mainPage.clickLinkByXpath(".//*[@id='routeDetailRating']/div/div[2]/div[3]/div[1]");
		    Thread.sleep(3000);
		   
		    }
		    
		
		  		    
		    	

		@Then("^I should be able to see A-B car directions$")
		public void i_should_be_able_to_see_A_B_car_directions() throws Throwable {
			mainPage.waitForElementPresent(obj.ab_resultPopup, 10);
			mainPage.IsElementDisplayed(obj.ab_resultPopup);
		    // Write code here that turns the phrase above into concrete actions
		    //throw new PendingException();
		}
		
		
		@Then("^I should be able to see A-B walk directions$")
		public void i_should_be_able_to_see_A_B_walk_directions() throws Throwable {
		    // Write code here that turns the phrase above into concrete actions
		   // throw new PendingException();
			assertTrue("Failed: A-B route not found, please check manually",mainPage.IsElementDisplayed(obj.ab_resultPopup));
		}		
		
		@Then("^I should be able to save A-B directions$")
		public void i_should_be_able_to_save_A_B_directions() throws Throwable {
		   mainPage.save_ABroute();
		   
		}
		
		
		//**************************BASIC SMOKE TEST *******************************

		@Then("^I should be able to access all pages$")
		public void i_should_be_able_to_access_all_pages() throws Throwable {
					Thread.sleep(4000);
					//Map Features
					mainPage.clickLinkByXpath(obj.mapfeatures);
					Thread.sleep(2000);
					mainPage.Verify_Live_Map_including_weather_panel();
					//Routes Tab
					mainPage.clickLinkByXpath(obj.Routes_Tab);
					Thread.sleep(2000);
					mainPage.Verify_all_elements_present_ROUTES();
					//Discover Routes
					mainPage.clickLinkByXpath(obj.Discover_Routes);
					Thread.sleep(2000);
					mainPage.Verify_Discover_Routes();
					Thread.sleep(2000);
					//Create Custom Trail
					mainPage.clickLinkByXpath(obj.Create_Custom_Trail);
					Thread.sleep(2000);
					mainPage.Verify_Create_Custom_Trail();
					mainPage.clickLinkByXpath(obj.My_Routes);
					Thread.sleep(2000);
					mainPage.Verify_My_Routes();
					mainPage.clickLinkByXpath(obj.Get_Directions);
					Thread.sleep(2000);
					mainPage.Verify_Get_Directions();

					
		}
//Pin POI on the map
					
					@Then("^I should see POI remains persisted after I turn off POI Category$")
					public void i_should_see_POI_remains_persisted_after_I_turn_off_POI_Category() throws Throwable {
						//mainPage.clickLinkByXpath(obj.mapfeatures);
					Thread.sleep(2000);
					//mainPage.clickLinkByXpath(obj.poi_CastlesAndAttractions);
					Thread.sleep(3000);
					//mainPage.clickLinkByXpath(obj.mapfeatures);
					mainPage.verify_pinnedPOIexist();
						
						// Write code here that turns the phrase above into concrete actions
					    
					}
								
					@Then("^I should see pinned POI on the map\\.$")
					public void i_should_see_pinned_POI_on_the_map() throws Throwable {
					    // Write code here that turns the phrase above into concrete actions
					    mainPage.verify_pinnedPOIexist();
					}
					
					
					@Then("^I should not see POI  persisted after I turn off POI Category$")
					public void i_should_not_see_POI_persisted_after_I_turn_off_POI_Category() throws Throwable {
					    // Write code here that turns the phrase above into concrete actions
						Thread.sleep(3000);
						mainPage.close_login_window();
						mainPage.verify_pinnedPOIDoesntExist();
					    
					}
					
						
	@Then("^I should be given an option to upgrade to a Registered user by completing the registration process within the application$")
	public void i_should_be_given_an_option_to_upgrade_to_a_Registered_user_by_completing_the_registration_process_within_the_application() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	mainPage.registernewUser();
	Thread.sleep(2000);

						
}
						
	@Then("^I should be able to register by completing the registration process within the application$")
	public void i_should_be_able_to_register_by_completing_the_registration_process_within_the_application() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	mainPage.registernewUser();
	Thread.sleep(2000);
}
							
	@Then("^I should be getting errors when entering incorrect details in the registration process within the application$")
	public void I_should_be_getiing_errors_when_entering_incorrect_details_in_the_registration_process_within_the_application() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	mainPage.registernewUser2();
	Thread.sleep(2000);
								
}
							
	@Then("^I should be given an option to upgrade to subscribed user by completing the subscription process within the application$")
	public void i_should_be_given_an_option_to_upgrade_to_subscribed_user_by_completing_the_subscription_process_within_the_application() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	mainPage.subscribenewUser();
	Thread.sleep(2000);
	


}
	@Then("^I should be able to upgrade to a subscribed user by completing the subscription process within the application$")
	public void i_should_be_able_to_upgrade_to_a_subscribed_user_by_completing_the_subscription_process_within_the_application() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	//driver.findElement(By.cssSelector(".productItem")).click();
	Thread.sleep(2000);
	mainPage.registernewUser();
	Thread.sleep(2000);
		
}
	
	@Then("^I should be able to delete any route from my routes$")
	public void i_should_be_able_to_delete_any_route_from_my_routes() throws Throwable {
	// Write code here that turns the phrase above into concrete actions
	mainPage.clickLinkByXpath(obj.RoutesTab);
	Thread.sleep(2000);
	mainPage.Delete_route_from_my_routes();

}
	
	
	
//smoke test functions

	@Then("^I should be able to see all options on top menu bar$")
	public void i_should_be_able_to_see_all_options_on_top_menu_bar() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    mainPage.verify_topMenuBar();
	}

	
	
	
	@Then("^I should be able to find all route options$")
	public void i_should_be_able_to_find_all_route_options() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    mainPage.verify_routesMenu();
	}

	
	
	@Then("^I should see \"(.*?)\" top right corner$")
	public void i_should_see_top_right_corner(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 mainPage.verify_UserLogin(arg1);   
	}
	
	@Then("^I should be able to see my details in my account page$")
	public void i_should_be_able_to_see_my_details_in_my_account_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	
	}
	
