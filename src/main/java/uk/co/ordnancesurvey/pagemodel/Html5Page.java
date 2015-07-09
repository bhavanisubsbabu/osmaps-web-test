package uk.co.ordnancesurvey.pagemodel;

import static org.junit.Assert.assertTrue;

import java.awt.Point;
import java.util.Iterator;

import junit.framework.Assert;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.gargoylesoftware.htmlunit.javascript.host.Document;
import com.steadystate.css.parser.Locatable;

import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class Html5Page {
	private static final boolean Exception = false;
	private final WebDriver driver;
	public String route_type_radioBttn;
	
	
	 public String route_name="AutoTestRoute" + System.currentTimeMillis() ;
	 public String email_address="AutoTest"+System.currentTimeMillis() + "@test.com";
	 public String email_address_2="AutoTesttest.com";
	 
	
	 ObjectRepository obj;
	 
	 
	 public Html5Page(WebDriver driver){
		// JavascriptExecutor js = (JavascriptExecutor) driver;
		 this.driver=(WebDriver) driver;
		 obj= new ObjectRepository();
		
		 
	 }
	 
	 
	 public void waitForElementPresent(String xpath,long sec){
		  (new WebDriverWait(driver, sec)).until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
		}


	
	 public  void ClickAt( WebDriver driver, String selector, int x, int y)
	 {
	 	
		 
		Object rootElement = driver.findElement(By.xpath(selector));

	 	new Actions(driver)
	 		.moveToElement((WebElement) rootElement, 0, 0)
	 		.moveByOffset(x, y)
	 		.click()
	 		.build()
	 		.perform();
	 	
	 	 }
	 
	 
	 // Open Routes top nav
	 public void OpenRoutesmenu() throws InterruptedException{
		 Thread.sleep(5000);
    driver.findElement(By.xpath(obj.RoutesTab)).click();
    Thread.sleep(3000);
		 this.zoomIn();this.zoomIn();
		 this.zoomIn();
		 this.zoomIn();
		 this.zoomIn();
			 
		 driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click();
		 
	 }
	
	
	 //Open Discover Routes mode
	 
	 public void click_discoverRoutes() throws InterruptedException{
		 Thread.sleep(5000);
			driver.findElement(By.xpath(obj.RoutesTab)).click();
			Thread.sleep(2000);
			
			clickLinkByXpath(obj.RoutesTab_DiscoverRoutes);
			//driver.findElement(By.xpath(".//*[@id='MyRouteDiscover']")).click();
			Thread.sleep(3000);
		}
	 
	 public void open_myRoutes() throws InterruptedException{
		 Thread.sleep(5000);
			driver.findElement(By.xpath(obj.RoutesTab)).click();
			Thread.sleep(2000);
			
			clickLinkByXpath(obj.My_Routes);			
			Thread.sleep(3000);
		 
	 }
	 
//Generic Functions performed on the map
	 
	 
	 
	 public void zoomout(){
		 driver.findElement(By.xpath(obj.ZoomOut)).click();
	 }
	 
	 public void zoomIn(){
		 driver.findElement(By.xpath(obj.ZoomIn)).click();
	 }
	 
	 public void rightClick_onMap() throws InterruptedException{
		 this.zoomIn();
		 Thread.sleep(3000);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 Actions action = new Actions(driver);
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');");
		action.clickAndHold(waypoint).build().perform();
		//Action a = new Action();
		
	  
		 
	 }
	 
	 public void open_25kmap(){
		 driver.findElement(By.xpath("")).click();
	 }
	 
	 /* Plot waypoints on the map */
	 
	 public void plot_newRoute_onMobile() throws InterruptedException{
		 driver.findElement(By.cssSelector("#layers_icon")).click();
	    	Thread.sleep(2000);
	    	driver.findElement(By.cssSelector("#Window_1_Btn_Leisure50k")).click();
	    	Thread.sleep(2000);
			driver.findElement(By.cssSelector("#Window_1_Burger")).click();
			Thread.sleep(2000);
			driver.findElement(By.id("BurgerRouteCreate")).click();
			Thread.sleep(3000);	
			//driver.findElement(By.cssSelector("#Window_1_ZoomIn")).click();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');");
			
			// defines the webelement on the map to click
			
			//WebElement burger_menu=driver.findElement(By.cssSelector("#Window_1_Burger"));
			 Actions action = new Actions(driver);
		//	TouchAction action1 = new TouchAction(driver);
					
			action.moveToElement(waypoint,-20,10).click(waypoint).build().perform();
			Thread.sleep(3000);
			System.out.print("Waypoint1");
			action.moveToElement(waypoint,40,20).click(waypoint).build().perform();
			Thread.sleep(3000);
			System.out.print("Waypoint2");
			action.moveToElement(waypoint,60,30).click(waypoint).build().perform();
			System.out.print("Waypoint3");	
			
			Thread.sleep(3000);
		 
	 }
	 
	 public void plot_newRoute() throws InterruptedException{
		 Thread.sleep(3000);
		 Actions action = new Actions(driver);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		    Thread.sleep(3000);
				 this.zoomIn();
				 this.zoomIn();
				 this.zoomIn();
				 this.zoomIn();	 
				 
		 Thread.sleep(3000);	
		 driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click();
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		// defines the webelement on the map to click 
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');"); 
	 	//action.dragAndDropBy(waypoint, 100,200).build().perform();
	 	
		 System.out.print(waypoint);
		
		 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); //performs the click on the map to a specific x,y coordinates
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
		 //System.out.println("Waypoint created");
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();
	 }
	 
	 public void plot_newRoute_MapStack() throws InterruptedException{
		 Actions action = new Actions(driver);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		    Thread.sleep(3000);
		    driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click();	 			 
		  JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');"); // defines the webelement on the map to click 
	 	System.out.print(waypoint);
		
		 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); //performs the click on the map to a specific x,y coordinates
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
		 //System.out.println("Waypoint created");
		 Thread.sleep(4000);
		 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();
	 }
	 
	 
	 public void delete_route(){
		 driver.findElement(By.xpath("//div[@id='myRouteListShow']")).click();
		 if(IsElementDisplayed("//div[contains(@class,'discoveredListDelete Basic_Btn')]")){
			 driver.findElement(By.xpath("//div[contains(@class,'discoveredListDelete Basic_Btn')]")).click();
			 
		 }
	 }
	 
	 
	//log out from application
	 
	 public void signOUt() throws InterruptedException{
		 Thread.sleep(2000);
		 driver.findElement(By.xpath(".//*[@id='main-top-bar-user']")).click();
			driver.findElement(By.xpath(".//*[@id='main-top-bar-user-menu']/div[5]")).click();
		 Thread.sleep(2000);
		 
		 
	 }
	
	 
	 //--Saves routes in the db
	 
	 public void save_route(String routeStyle) throws InterruptedException{
		 Thread.sleep(2000);
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
			Thread.sleep(3000);
		    driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); //enter route name
			 Thread.sleep(2000);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("Test");
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys(Keys.ENTER);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("Test");
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys(Keys.ENTER);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("12345##//");
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_difficulty =(WebElement)js.executeScript("return document.getElementById('btn_difficulty_intermediate');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 WebElement route_color =(WebElement)js.executeScript("return document.getElementsByClassName('save-route-color-picker')[0].children[2];");
			// WebElement route_surface =(WebElement)js.executeScript("return document.getElementById('document.getElementById('btn_surface_concrete')');");
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).click();
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).sendKeys(Keys.ARROW_DOWN);
			 
			Thread.sleep(3000);
			action.moveToElement(route_save).perform();
			action.moveToElement(route_public,0,800).click(route_public).build().perform();
			Thread.sleep(3000);
			if(routeStyle.equals("custom"))
			 {
				action.moveToElement(route_difficulty).perform();
				action.moveToElement(route_difficulty).click().build().perform();
				Thread.sleep(4000);
				
			  action.moveToElement(route_color).perform();			
			  action.moveToElement(route_color).click(route_color).build().perform();
			  Thread.sleep(3000);
				 
				 
			 }
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save,0,900).click(route_save).build().perform();
			//clickLinkByXpath(obj.CustomRoute_RouteSave);
			// driver.findElement(By.xpath(".//*[@id='saveRouteBtn']")).click();
			 Thread.sleep(5000);
			 //handling confirmation dialogue box
			 this.close_routecreateDialog();	
			 //System.out.print(driver.findElement(By.xpath(".//*[@id='routeDetailName']")).getText());
			 Thread.sleep(3000);
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			// assertTrue("Failed:Route is not created properly, please check manaully",driver.findElement(By.xpath(".//*[@id='routeDetailName']")).getText().contains(route_name));
			 Thread.sleep(4000);
			//this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 public void eidt_saved_route() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 
		driver.findElement(By.xpath(obj.CustomrRoute_Edit)).click();
		Thread.sleep(4000);
		this.waitForElementPresent(obj.CustomRoute_Save, 5);
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
			//Thread.sleep(20000);
			//defining all dom elements
			 
			// System.out.println(route_save);
			// System.out.println(route_name1);
			
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(Keys.END);;
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys("-AutoEdited"); //enter route name
			 Thread.sleep(2000);
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).click();
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).sendKeys(Keys.ARROW_DOWN);
			 
			
			Thread.sleep(3000);
			action.moveToElement(route_save).perform();
			action.moveToElement(route_public,0,800).click(route_public).build().perform();
			Thread.sleep(3000);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save,0,900).click(route_save).build().perform();
			//clickLinkByXpath(obj.CustomRoute_RouteSave);
			// driver.findElement(By.xpath(".//*[@id='saveRouteBtn']")).click();
			 Thread.sleep(5000);
			 //handling confirmation dialogue box
			 this.close_routecreateDialog();
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			// assertTrue("Failed:Route is not created, please check manaully",driver.findElement(By.xpath(".//*[@id='routeDetailName']")).getText().contains("AutoTestRoute14"));
			 Thread.sleep(4000);
			this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 //* The purpose of this funciton is to save ab route in backend.
	 
	 public void save_ABroute() throws InterruptedException{
		  Thread.sleep(4000);
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 
		 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('routeABResultsSaveBtn');");
		 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save).click(route_save).build().perform();
		
		 this.close_ABroutecreateDialog();
		 
	 }
	 
	 public void scroll_sidePane()
	 {
		 driver.findElement(By.xpath("//div[contains(@class,'sidePaneGradient')]")).sendKeys(Keys.ARROW_DOWN);
		 driver.findElement(By.xpath("//div[contains(@class,'sidePaneBody')]")).sendKeys(Keys.ARROW_DOWN);
	 }
	 
	 
	 public void scroll_sidePane_New()
	 {
		// driver.findElement(By.xpath("//div[contains(@class,'sidePaneBodyContainer')]")).sendKeys(Keys.ARROW_DOWN);
		 //driver.findElement(By.xpath("//div[contains(@class,'sidePaneBody')]")).sendKeys(Keys.ARROW_DOWN);
		 Actions action = new Actions(driver);
		 action.clickAndHold(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[15]/div[1]/div[3]/div")));
		 action.sendKeys(Keys.DOWN);
		 action.release();
		 action.build().perform();
		// driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[15]/div[1]/div[3]/div")).click();
		 
	
	 }
		 
 
	 
	 //save as cycle route
	 public void save_route_cycle() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
			//Thread.sleep(20000);
			//defining all dom elements
			 
			// System.out.println(route_save);
			// System.out.println(route_name1);
			
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); //enter route name
			 Thread.sleep(2000);
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).click();
			 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).sendKeys(Keys.ARROW_DOWN);
			 
			driver.findElement(By.xpath(".//*[@id='save-route-route-type-select']/div[4]")).click();
			action.moveToElement(route_save).perform();
			action.moveToElement(route_public,0,800).click(route_public).build().perform();
			Thread.sleep(3000);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			action.moveToElement(route_save,0,900).click(route_save).build().perform();
			//clickLinkByXpath(obj.CustomRoute_RouteSave);
			// driver.findElement(By.xpath(".//*[@id='saveRouteBtn']")).click();
			 Thread.sleep(5000);
			 //handling confirmation dialogue box
			 this.close_routecreateDialog();	
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			// assertTrue("Failed:Route is not created, please check manaully",driver.findElement(By.xpath(".//*[@id='routeDetailName']")).getText().contains("AutoTestRoute14"));
			 Thread.sleep(4000);
			 this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	//save as run route
		 public void save_route_run(String flag) throws InterruptedException{
			 Actions action = new Actions(driver);
			 JavascriptExecutor js = (JavascriptExecutor) driver;
			 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
				 
			 {
				 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
				//Thread.sleep(20000);
				//defining all dom elements
				 
				// System.out.println(route_save);
				// System.out.println(route_name1);
				
				 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
				 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); //enter route name
				 Thread.sleep(2000);
				 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
				 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
				 WebElement route_run =(WebElement)js.executeScript("return document.getElementById('btn_activity_running');");
				 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
				 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
				 WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
				 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).click();
				 //driver.findElement(By.xpath(".//*[@id='saveParent']/div")).sendKeys(Keys.ARROW_DOWN);
				 driver.findElement(By.xpath(".//*[@id='save-route-route-type-select']/div[3]")).click();
			
				Thread.sleep(3000);
				action.moveToElement(route_save).perform();
				if(flag.equals("yes"))
				{
				action.moveToElement(route_public,0,800).click(route_public).build().perform();
				Thread.sleep(3000);
				}
				action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
				action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
						
				action.moveToElement(route_save,0,900).click(route_save).build().perform();
				
				//clickLinkByXpath(obj.CustomRoute_RouteSave);
				// driver.findElement(By.xpath(".//*[@id='saveRouteBtn']")).click();
				 Thread.sleep(5000);
				 //handling confirmation dialogue box
				 this.close_routecreateDialog();	
				 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
				 //assertTrue("Failed:Route is not created, please check manaully",driver.findElement(By.xpath(".//*[@id='routeDetailName']")).getText().contains("AutoTestRoute14"));
				 Thread.sleep(4000);
				 this.signOUt();
			 }
			 else{
				 System.out.println("Save button not enabled");
			 }
		 }
		 
	 
	 public void save_route_asPrivate() throws InterruptedException{
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
		 {
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
			 Thread.sleep(2000);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); //enter route name
			 Thread.sleep(2000);
			 driver.findElement(By.xpath(obj.CustomRoute_Type_Running)).click(); // set route type as running
			 Thread.sleep(2000);
			 //driver.findElement(By.xpath(".//*[@id='saveRouteViewSettingsRadioEveryone']")).click();    // set route as public 
			 Thread.sleep(2000);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteSave)).click();
			 Thread.sleep(4000);
			 driver.findElement(By.xpath(".//*[@id='Window_1_UserIcon']")).click();
			 Thread.sleep(4000);
			 driver.findElement(By.xpath(".//*[@id='Window_1_CU_Action']")).click();
			 Thread.sleep(4000);
			 
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 
	 public void close_routecreateDialog() throws InterruptedException{
		 Thread.sleep(5000);
		 for (String winHandle : driver.getWindowHandles()) {
		     driver.switchTo().window(winHandle); // switch focus of WebDriver to the next found window handle (that's your newly opened window)
		 }
if(IsElementPresent(".//*[@id='Window_1_Content']/div[18]/div/div[3]/div[2]"))
		 driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[18]/div/div[3]/div[2]")).click();
else {
	driver.findElement(By.cssSelector(".Basic_Btn.dialogButton.dialogButtonAlt")).click();
}
	

		 
		 
	 }
	 public void close_ABroutecreateDialog() throws InterruptedException{
		 Thread.sleep(5000);
		 for (String winHandle : driver.getWindowHandles()) {
		     driver.switchTo().window(winHandle); // switch focus of WebDriver to the next found window handle (that's your newly opened window)
		 }
	if(IsElementPresent(".//*[@id='Window_1_Content']/div[20]/div/div[2]/div"))
		 driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[20]/div/div[2]/div")).click();
	else {
		assertTrue("Failed:Cannot save AB Route,please check manually",IsElementPresent(".//*[@id='Window_1_Content']/div[20]/div/div[2]/div"));
	//driver.findElement(By.cssSelector(".Basic_Btn.dialogButton.dialogButtonAlt")).click();
	}
	 }
	 
	 public void close_registrationDialog() throws InterruptedException{
		 Thread.sleep(5000);
		
		 
		 for (String winHandle : driver.getWindowHandles()) {
		     driver.switchTo().window(winHandle); // switch focus of WebDriver to the next found window handle (that's your newly opened window)
		 }
if(IsElementPresent("//div[contains(@class,'dialogTitle')]"))
		 driver.findElement(By.cssSelector(".Basic_Btn.dialogButton")).click();
Thread.sleep(3000);
		 
	 }	 
	 
		 
	 
	 public void save_routetype(String type) throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 
		 
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
		 {
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 
			 Thread.sleep(2000);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement  route_type_run =(WebElement)js.executeScript("return document.getElementById('btn_activity_running');");
			 WebElement route_type_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_type_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 WebElement route_type_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
			 
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); //enter route name
			 Thread.sleep(2000);
			 switch(type){
			 case "Running" :	
				 action.moveToElement(route_type_cycle).perform();
				 action.moveToElement( route_type_run,0,500).click(route_type_run).build().perform();
				
				 break;
				 
			 case "Walking" :
				 action.moveToElement(route_type_run).perform();
				 action.moveToElement( route_type_walk,0,400).click(route_type_walk).build().perform();
				 break;
				 
			 case "Cycling" :
				 action.moveToElement(route_type_other).perform();
				 action.moveToElement( route_type_cycle,0,600).click(route_type_cycle).build().perform();
				 break;
			default :
				action.moveToElement(route_type_other).click().build().perform();
			 }
			 
			// driver.findElement(By.xpath(route_type_radioBttn)).click(); // set route type as running
			 Thread.sleep(2000);
			 
			
			// driver.findElement(By.xpath(".//*[@id='saveRouteViewSettingsRadioEveryone']")).click();    // set route as public 
			 Thread.sleep(2000);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
				action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 Thread.sleep(4000);
			 this.close_routecreateDialog();
			// Thread.sleep(4000);
		 driver.findElement(By.xpath(".//*[@id='Window_1_UserIcon']")).click();
	      Thread.sleep(4000);		
	      driver.findElement(By.xpath(".//*[@id='SettingsLogin']")).click();
			 Thread.sleep(4000);
			 this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 
	 
	 //----- Launches application with the given url --//
	 public void launch_app(){		
		 String envurl= AppProperties.get("envurl");
		 driver.get(envurl);
	 }
	 
	 
	 public void click_Discover(){
		obj.discoverRoute.click();
	 
}
	 
	 //* Login Functions //
	 
	 public void open_login_window() throws InterruptedException{
		  Thread.sleep(3000);
		  if (IsElementDisplayed(".//*[@id='main-top-bar-sign-in']"))			  
			 driver.findElement(By.xpath(".//*[@id='main-top-bar-sign-in']")).click();
		  else {
			  this.signOUt();
			  Thread.sleep(2000);
			  driver.findElement(By.xpath(".//*[@id='main-top-bar-sign-in']")).click();
		  }
			 Thread.sleep(2000);
			 
			 
 
	 }
	 
	 //Closing the Login Window Popup
	 public void close_login_window() throws InterruptedException{
		  Thread.sleep(3000);	 
			 if(this.IsElementPresent(obj.login_email_address))
			 {
			
				 this.driver.findElement(By.xpath(".//*[@id='Window_1_Login_Close']")).click();
			 }

			 Thread.sleep(3000);
			  
	  }
	 
	//Open Map Features
	 
		 public void open_Mapfeatures() throws InterruptedException{
			 Thread.sleep(3000);
			 this.clickLinkByXpath(obj.mapfeatures); //opening map features menu
			 Thread.sleep(3000);
		 }
	 
	 
	 
	 public void verify_poi_categories_exist() throws InterruptedException{
		 Thread.sleep(4000);
			
		 assertTrue("Failed:, Category Live update not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Parent_Name')]")).getText().contains("Weather"));
		// assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Parent_Name')]")).getText().contains("Attractions"));
		 Thread.sleep(2000);
		// assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//*[@class='sidePaneBodyContainer']/div[1]/div[5]/div[1]")).getText().contains("Eating and drinking"));
		// assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//*[@class='sidePaneBodyContainer']/div[1]/div[6]/div[1]")).getText().contains("Entertainment"));
		// assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//*[@class='sidePaneBodyContainer']/div[1]/div[7]/div[1]")).getText().contains("National Parks"));
}
	   //-- sets any text box on application with given location and  value  
	public void set_textBox(String locator,String value){
		this.driver.findElement(By.xpath((locator))).clear();
		this.driver.findElement(By.xpath((locator))).sendKeys(value);
	}
	
	public void hitEnterKey(String locator) throws InterruptedException{
		this.driver.findElement(By.xpath(locator)).sendKeys(Keys.ENTER);
		Thread.sleep(3000);
		
	}
	//--click link by xpath
	public void clickLinkByXpath(String locator) throws InterruptedException{
		Thread.sleep(2000);
		System.out.print(locator);
		this.driver.findElement(By.xpath(locator)).click();
		
		
	}
	
	//--click link by id
		public void click(String locator){
			this.driver.findElement(By.id(locator)).click();
			
		}
	
	 public void enter_emailAddress(String uname){	
	this.driver.findElement(By.id(obj.login_email_address)).sendKeys(uname);

	}
	
	public void submitLogin(){
		this.driver.findElement(By.id(obj.login_button)).click();
	}
	 public boolean IsElementPresent(String xpath)
	 {
	 		 	
	  try
	  {
	   driver.findElement(By.xpath(xpath));

	    return true;
	  }
	  catch(Exception e)
	  {
	 	 
	 	 // System.out.println("Logo not found");
	 	// captureScreen(this.getClass().getSimpleName(), this.testName.getMethodName());
	 	 //System.out.println("Element not found on the page");
	 	 return false;
	  }
	 }
	 
	 public boolean IsElementDisplayed(String xpath){
		  boolean flag;
		  if (driver.findElement(By.xpath(xpath)).isDisplayed())
		flag= true;
		 
		 else{
		 flag= false;
		 }
	return flag;
	 }
	 
	 
	 //filter POI by Type
	 public  int filter_POIbyType(){
		 int number_POIs=0;
		 int number_clusteredPOIs=0;
		 
		 JavascriptExecutor js = (JavascriptExecutor) driver;
			 number_POIs= Integer.parseInt(js.executeScript("return document.getElementsByTagName('image').length").toString());
			  number_clusteredPOIs= Integer.parseInt(js.executeScript("return document.getElementsByTagName('circle').length").toString());
										 
 
		
		 return number_POIs + number_clusteredPOIs;
			 
			 
		 }
		 
	 //Verify Pinned POI present on the map
	 
	 public void verify_pinnedPOIexist(){
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('image').item(0)");
		 assertTrue("Failed POI Not found,",POI.isDisplayed());
		 
	 }
	 
	 public void verify_pinnedPOIDoesntExist(){
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('image').item(0)");
		if(POI==null){
			assertTrue("Found few POI persisted for guest user",POI==null);
		}
		 
	 }
	 
	// Locating a  First POI from results
	 public void locatePOI(int arg2) throws InterruptedException{
		 
		 
		 Actions action = new Actions(driver);
		 
		 Thread.sleep(3000);		 
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('image').item"+"("+arg2+")"); // defines the webelement on the map to click 
	 	
		
		 action.moveToElement(POI).click(POI).build().perform();
		 Thread.sleep(4000);

	 }

	public void PageRefresh(){
		driver.navigate().refresh();
	}
	 
		// Locating a  First POI from results
	 public void clickOnPOICluster(int arg2) throws InterruptedException {
		 
		 
		 Actions action = new Actions(driver);
		 Thread.sleep(3000);		 
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('circle').item"+"("+arg2+")"); // defines the webelement on the map to click 
	 	int total=Integer.parseInt(js.executeScript("return document.getElementsByTagName('circle').length").toString());
		 System.out.println(total);
		 action.moveToElement(POI).click(POI).build().perform();
		 Thread.sleep(4000);

	 }
	 
	 

	 

// reading the text from the WebElement using Xpath
	public String getText(String xpathLocator) {

		return driver.findElement(By.xpath(xpathLocator)).getText();
		
	}
	
	
	// reading the Attribute value  from the WebElement using Xpath and the attribute name
	public String getAttribute(String xpathLocator,String Attribute) {

		return driver.findElement(By.xpath(xpathLocator)).getAttribute(Attribute);
		
	}
	 
	// to open mapstack and verify the map stack objects
	
	public void openMapstack() throws InterruptedException{
		Thread.sleep(6000);
		driver.findElement(By.xpath(obj.mapStackButton)).click();
		driver.findElement(By.xpath(".//*[@id='Window_1_Btn_Leisure50k']")).click();
		Thread.sleep(2000);
		
	}
	
	public void Verify_droppedPin() throws InterruptedException{
		//verify dropped pin
		
		assertTrue("Failed:Dropped pin not found",driver.findElement(By.xpath(obj.SearchBoxPopUp)).isDisplayed());
		assertTrue("Failed,Dropped pin no options given",driver.findElement(By.xpath("//div[contains(@class,'PopUp_Link')]")).getText().contains("Directions to here"));
		assertTrue("Failed: weather info not displayed on dropped pin",IsElementPresent("//div[contains(@style,'cursor: pointer;')]"));
		driver.findElement(By.xpath(obj.searchBoxPopUpClose)).click();;
		Thread.sleep(4000);
		//verify options in dropped pin
		
	}
	
	
public void verifyMapstackButtons_Subscriber() throws InterruptedException{
	Thread.sleep(2000);
	//Verify 25k map
	assertTrue("Failed:, MapStack 25k not found",IsElementPresent(".//*[@id='zoom-level-two']"));
	//zoom in to 25k level 
	driver.findElement(By.xpath(".//*[@id='zoom-slider-plus']")).click();
	driver.findElement(By.xpath(".//*[@id='zoom-slider-plus']")).click();	
     Thread.sleep(4000);
	//Verify 50k map stack
	assertTrue("Failed:, MapStack 25k not found",IsElementPresent(".//*[@id='zoom-level-one']"));
	
	 Thread.sleep(4000);
}
public void verify_subscriptionUpsell() throws InterruptedException{
	Thread.sleep(4000);
	 assertTrue("Failed:subscription upsel not displayed", IsElementPresent(".//*[@id='users-only-common-box']/div/div[2]/div[6]"));
	
}



public void Verify_StarRatings_Popup(){
	
	assertTrue("Failed:, Star Rating on route pop-up not found",driver.findElement(By.xpath(obj.star_rating_pop_up)).isDisplayed());
	assertTrue("Failed:, Star Rating on route discover routes not found",driver.findElement(By.xpath(obj.star_rating_discover_routes)).isDisplayed());
	
}

public void Verify_StarRatings_SidePanel(){
	
	
	assertTrue("Failed:, Star Rating on route info side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[1]/img[1]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[1]/img[3]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[1]/img[5]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[1]/img[7]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[1]/div[2]/div[1]/img[9]")).isDisplayed());

}

public void verifyMapstackButtons_registered(){
	
	assertTrue("Failed:, MapStack zoom Map not found",driver.findElement(By.xpath(obj.zoomMap)).isDisplayed());
	assertTrue("Failed:, MapStack Aerial not found",driver.findElement(By.xpath(obj.AerialMap)).isDisplayed());

}


public void verify_carouselPanelandClose() throws InterruptedException{
	Thread.sleep(3000);
	assertTrue("Failed: On board Carousel not displayed,pls check manually",IsElementPresent("//div[contains(@class,'carouselSlide')]/div[1]"));
	driver.findElement(By.xpath("//div[@id='carouselCheckbox']")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//div[@id='closeCarousel']")).click(); //close carousel
	
}

public void close_carousel() throws InterruptedException{
	
if(driver.findElement(By.xpath("//div[contains(@class,'carouselSlide')]/div[1]")).isDisplayed())
{
	driver.findElement(By.xpath("//div[@id='carouselCheckbox']")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//div[@id='closeCarousel']")).click(); //close carousel
}
	
else{
	//do nothing--continue 
}
}

public void Verify_StarRate_SidePanel(){
	
	
	assertTrue("Failed:, Star Rating on route info rate side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[2]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info rate side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[4]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info rate side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[6]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info rate side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[8]")).isDisplayed());
	assertTrue("Failed:, Star Rating on route info rate side panel not found",driver.findElement(By.xpath(".//*[@id='routeDetailRating']/div/div[2]/div[2]/div[1]/img[9]")).isDisplayed());

	
}

//MAP FEATURES
public void Verify_Live_Map_including_weather_panel() throws InterruptedException{
	
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[15]/div/div[1]/div[3]/div[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[15]/div/div[1]/div[3]/div[3]/div/div")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='liveMapSlider']")).isDisplayed());
	driver.findElement(By.xpath(obj.Live_Map)).click();
//	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[3]/div[2]/img[2]")).isDisplayed());
//	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[3]/div[3]/div/div")).isDisplayed());
	driver.findElement(By.xpath(obj.Turn_On_Weather)).click();
	Thread.sleep(3000);
	JavascriptExecutor js = (JavascriptExecutor) driver;
	WebElement weather = (WebElement)js.executeScript("return document.getElementsByTagName('image').item(2)");
	Actions action = new Actions(driver);
	action.moveToElement(weather).click(weather).build().perform();				 
	Thread.sleep(3000);
	assertTrue(driver.findElement(By.xpath(".//*[@id='weatherHeadInfoName']")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='weatherHeadMaxTemp']")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='weatherHeadUV']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='weatherHeadWind']/div/div")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='weatherDataTable']")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='day0Btn']")).isDisplayed());
	///Select different forecast days from weather side panel
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_1)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_2)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_3)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_4)).click();
	Thread.sleep(1000);
	//Close weather panel
	clickLinkByXpath(".//*[@id='Window_1_Content']/div[17]/div/div[1]/div[1]");
	//driver.findElement(By.xpath(obj.Close_Weather_Panel)).click();
	Thread.sleep(1000);
	//Attractions
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[2]/img[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[2]/img[2]")).isDisplayed());
	driver.findElement(By.xpath(obj.Attractions)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Adventure_Theme_Parks)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Brewery_Distillery_Vineyard)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Castles_And_Historic_Houses)).click();
	Thread.sleep(4000);
	
			//	//scroll function <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< below
	WebElement conf_poicat= (WebElement)js.executeScript("return document.getElementsByClassName('POI_Category_Child_Name').item(7);");
	action.moveToElement(conf_poicat).perform();
	Thread.sleep(2000);
			
	driver.findElement(By.xpath(obj.Countryside)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.History)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Museums)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Parks_And_Gardens)).click();
	Thread.sleep(2000);
	
	WebElement conf_poicat2= (WebElement)js.executeScript("return document.getElementsByClassName('POI_Category_Child_Name').item(13);");
	action.moveToElement(conf_poicat2).perform();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Shopping)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Tours)).click();
	Thread.sleep(2000);
	//Eating&Drinking
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[2]/img[2]")).isDisplayed());
	driver.findElement(By.xpath(obj.Eating_And_Drinking)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Picnic_Site)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Pub)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Restuarant)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Coffee_Shop)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Eating_And_Drinking)).click();
	//WebElement conf_poicat3= (WebElement)js.executeScript("return document.getElementsByClassName('POI_Category_Child_Name').item(0);");
	WebElement conf_poicat3= (WebElement)js.executeScript("return document.getElementsByClassName('Basic_Btn Allow_Select sidePaneClose').item(0);");
	action.moveToElement(conf_poicat3).perform();
	Thread.sleep(2000);
	
	driver.findElement(By.xpath(obj.Attractions)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Live_Map)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Close_Map_Features_Panel)).click();
	Thread.sleep (1000);

}



//ROUTES
public void Verify_all_elements_present_ROUTES() throws InterruptedException{
	
	assertTrue(driver.findElement(By.xpath(obj.Routes_Tab_Close_Button)).isDisplayed());
	assertTrue(driver.findElement(By.xpath(obj.Discover_Routes)).isDisplayed());
	assertTrue(driver.findElement(By.xpath(obj.Create_Custom_Trail)).isDisplayed());
	assertTrue(driver.findElement(By.xpath(obj.My_Routes)).isDisplayed());
	assertTrue(driver.findElement(By.xpath(obj.Get_Directions)).isDisplayed());


}

//DISCOVER ROUTES

public void Verify_Discover_Routes() throws InterruptedException{
	
	Actions action = new Actions(driver);
	 JavascriptExecutor js = (JavascriptExecutor) driver;
	 
	 
	//Close
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[16]/div[1]/div[1]/div[1]")).isDisplayed());
	//Create
	assertTrue(driver.findElement(By.xpath(".//*[@id='discCreateRouteBtn']")).isDisplayed());
	//Filter Routes - ALL
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectRouteTypeAll']")).isDisplayed());
	//Walk
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectRouteTypeWalk']")).isDisplayed());
	//Run
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectRouteTypeRun']")).isDisplayed());
	//Cycle
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectRouteTypeCycle']")).isDisplayed());
	//Other
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectRouteTypeOther']")).isDisplayed());
	//Select Distance
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectDistance']")).isDisplayed());
	//Select Duration
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectDuration']")).isDisplayed());
	//Sort By
	assertTrue(driver.findElement(By.xpath(".//*[@id='discSelectSort']")).isDisplayed());
	//Star Rating
	//assertTrue(driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]/div[1]/div[1]/div[2]")).isDisplayed());
	//Route Name
	assertTrue(driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]/div[1]/div[2]")).isDisplayed());
	//Authored By
	assertTrue(driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]/div[2]/div[1]/img")).isDisplayed());
	//Route Type Image
	assertTrue(driver.findElement(By.cssSelector(".discoveredListPartnerImage>img")).isDisplayed());
	//Select a Route
	driver.findElement(By.xpath(".//*[@id='discoveredRoutesList']/div[1]")).click();
	Thread.sleep(2000);
	//verify Pop up box
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[16]/div[1]/div/div")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[2]/div[1]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopupContent']/img")).isDisplayed());
	
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[2]/div[2]")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopUpDetail']/div[1]/img")).isDisplayed());
	//assertTrue(driver.findElement(By.xpath(".//*[@id='discPopUpDetail']/div[2]/div/div")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='discPopupContent']/img")).isDisplayed());
	//More details
	assertTrue("Failed: More details link not found on route pop-up",driver.findElement(By.xpath(".//*[@id='discPopupContent']/div[5]")).getText().contains("More Details"));
	//Directions to here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	//assertTrue("Failed: Directions to here link not found in route pop-up"driver.findElement(By.cssSelector(".PopUp_Link.PopUp_Share_Link")).getText().contains("Directions to here"));
	//assertTrue("Failed: Directions from here link not found in route pop-up",driver.findElement(By.cssSelector(".PopUp_Link.PopUp_Share_Link")).getText().contains("Directions from here"));
	//assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[16]/div[1]/div/div/div[3]/div[1]")).isDisplayed());
	//Directions from here <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	//assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[16]/div[1]/div/div/div[3]/div[2]")).isDisplayed());
	//pop up close 'X'	
	driver.findElement(By.xpath(".//*[@id='discPopupContent']/img")).click();
	Thread.sleep(1000);
	//Close discover routes panel
	//WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
	//WebElement close_link =(WebElement)js.executeScript("return document.getElementsByClassName('Basic_Btn Allow_Select sidePaneClose').item(2);");
	//action.moveToElement(close_link).perform();
	//action.moveToElement(close_link,0,0).click(close_link).build().perform();
	//driver.findElement(By.xpath(obj.Close_Discover_Routes_Panel)).click();
	//scroll_sidePane_New();<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	driver.findElement(By.xpath(obj.Routes_Tab)).click();
	



}
//CREATE CUSTOM TRAIL

public void Verify_Create_Custom_Trail() throws InterruptedException{
	
	//POI
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRoutePOIToggleImage']")).isDisplayed());
	//Elevation Graph
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteElevDiagCanvas']")).isDisplayed());
	//Cancel
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteDelete']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteDelete']/p")).isDisplayed());
	//Undo
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteUndo']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteUndo']/p")).isDisplayed());
	//Save
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteSave']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteSave']/p")).isDisplayed());
	//Route Image
	assertTrue(driver.findElement(By.xpath(".//*[@id='createRouteTypeImage']/img")).isDisplayed());
	//Close Create Custom Trail Panel
	driver.findElement(By.xpath(obj.Close_Create_Custom_Trail_Panel)).click(); 
	Thread.sleep (2000);
	
	
}


//MY ROUTES

public void Verify_My_Routes() throws InterruptedException{

	//Filter - All
	
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[2]/div[1]")).isDisplayed());
	//Walk
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[2]/div[2]")).isDisplayed());
	//Run
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[2]/div[3]")).isDisplayed());
	//Cycle
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[2]/div[4]")).isDisplayed());
	//Other
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[2]/div[5]")).isDisplayed());
	//A-Z
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[3]/div[2]")).isDisplayed());
	//Newest first
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteParent']/div/div[2]/div/div[3]/div[3]")).isDisplayed());
	//My Trails
	assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteListShow']")).isDisplayed());
	driver.findElement(By.xpath(".//*[@id='myRouteListShow']")).click();
	Thread.sleep(4000);
	//My Trails - Expanded <<<<<<<<<<<<<<<<<<<<<<<<<<
	//assertTrue(driver.findElement(By.xpath(".//*[@id='myRouteList']/div/div[1]")).isDisplayed());
	driver.findElement(By.xpath(".//*[@id='myRouteListShow']")).click();
	//Directions
	//assertTrue(driver.findElement(By.xpath(".//*[@id='myDirectionListShowBtn']")).isDisplayed());
	//driver.findElement(By.xpath(".//*[@id='myDirectionListShowBtn']")).click();
	Thread.sleep(2000);
	
	//Directions - Expanded <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	//assertTrue(driver.findElement(By.xpath(".//*[@id='myDirectionList']/div/div")).isDisplayed());
	//driver.findElement(By.xpath(".//*[@id='myDirectionListShowBtn']")).click();
	//Search box
	//assertTrue(driver.findElement(By.xpath(".//*[@id='MyRoutesSearchBox']")).isDisplayed());
	//Enter text in search box and clear
	set_textBox(".//*[@id='MyRoutesSearchBox']", "Test Message");
	Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='MyRoutesSearchBox']")).clear();
	Thread.sleep(2000);
	//Close My Routes Pane <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
	//driver.findElement(By.cssSelector(".Basic_Btn.Allow_Select.sidePaneClose")).click();
	driver.findElement(By.xpath(obj.Routes_Tab)).click();
	
	

}



//GET DIRECTIONS

public void Verify_Get_Directions() throws InterruptedException{
	
	//Start:Current Location
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Search_Input']")).isDisplayed());
	System.out.println(getText(".//*[@id='Window_1_Search_Input']"));
	//mainPage.getAttribute(".//*[@id='Window_1_Search_Input']", Attribute);
	
	//Finish: Destination
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABSearchInput1']")).isDisplayed());
	set_textBox(".//*[@id='routeABSearchInput1']", "London");
	Thread.sleep (2000);
	driver.findElement(By.xpath(".//*[@id='routeABSearchResults1']/div[1]/div[1]/span")).click();
	//Add Destination
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABAddDest']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABAddDest']")).isDisplayed());
	//Reverse Destination
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABReverse']/img")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABReverse']")).isDisplayed());
	//Icons
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABTypeDrive']")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeABTypeWalk']")).isDisplayed());
	//Avoid
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeOptionsMotorway']")).isDisplayed());
	assertTrue(driver.findElement(By.xpath(".//*[@id='routeOptionsToll']")).isDisplayed());
	//Get Route Directions
	driver.findElement(By.xpath(".//*[@id='routeABGetBtn']")).click();
	Thread.sleep (2000);
	driver.findElement(By.xpath(obj.Routes_Tab)).click();
	//driver.findElement(By.xpath(obj.Close_AB_Panel)).click();
	//driver.findElement(By.xpath(obj.Close_Get_Directions_Panel)).click();<<<<<<<<<<<<<<
	Thread.sleep (1000);
	
	
}

// lib funtions related AB routing

public void openABwindow() throws InterruptedException{
	Thread.sleep(5000);
	driver.findElement(By.xpath(obj.DirectionsTab)).click();

}

public void choose_toRegisternewUser() throws InterruptedException{
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.register)).click();
	Thread.sleep(2000);
	
}

public void registernewUser() throws InterruptedException{
	
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions action = new Actions(driver);
	Thread.sleep(4000);
	//driver.findElement(By.xpath(obj.register)).click();
	//WebElement email_address1= (WebElement)js.executeScript("return document.getElementById('registerFormNickname');");
	//action.moveToElement(email_address1).perform();	
	driver.findElement(By.cssSelector("#register-form-name")).sendKeys("AutotestFirstName");	
	driver.findElement(By.xpath(obj.reg_lastName)).sendKeys("AutotestLastName");
	driver.findElement(By.xpath(obj.reg_emailAddress)).sendKeys(email_address);
	WebElement conf_pwd= (WebElement)js.executeScript("return document.getElementById('register-form-password-repeat');");
	action.moveToElement(conf_pwd).perform();
	
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.reg_password)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_confirmpassword)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_nickName)).sendKeys("TestNickname");
	driver.findElement(By.xpath(obj.reg_nickName)).sendKeys(Keys.PAGE_DOWN);
	driver.findElement(By.xpath(obj.reg_subButton)).click();
	Thread.sleep(5000);
	
	this.waitForElementPresent("//div[contains(@class,'dialogTitle')]", 35);
	for (String winHandle : driver.getWindowHandles()) {
	     driver.switchTo().window(winHandle); // switch focus of WebDriver to the next found window handle (that's your newly opened window)
	 }
	if(IsElementDisplayed("//div[contains(@class,'dialogTitle')]"))
	{
	assertTrue("Failed: User registration was not successfull,check manually",driver.findElement(By.xpath("//div[contains(@class,'dialogTitle')]")).getText().contains("Registration complete"));
	Thread.sleep(3000);
	driver.findElement(By.cssSelector(".Basic_Btn.dialogButton")).click();
	Thread.sleep(5000);
	}
	//this.close_registrationDialog();
	else{
	System.out.print("Registration not completed");
	}

}



public void registernewUser2() throws InterruptedException{
	// this is to enter incorrect details (negative test)
	
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions action = new Actions(driver);
	Thread.sleep(2000);
	//driver.findElement(By.xpath(obj.register)).click();
	driver.findElement(By.xpath(obj.reg_firstName)).sendKeys("AutotestFirstName");
	driver.findElement(By.xpath(obj.reg_lastName)).sendKeys("AutotestLastName");
	driver.findElement(By.xpath(obj.reg_nickName)).sendKeys("TestNickname");
	driver.findElement(By.xpath(obj.reg_emailAddress)).sendKeys(email_address_2);
	WebElement conf_pwd= (WebElement)js.executeScript("return document.getElementById('registerFormPasswordRepeat');");
	action.moveToElement(conf_pwd).perform();
	//action.moveToElement(password).sendKeys("Test@123").perform();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.reg_password)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_confirmpassword)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_subButton)).click();
	Thread.sleep(2000);
	//assertTrue("Failed: Incorrect email error not found on registration pop up",driver.findElement(By.xpath(obj.incorrect_email_error)).getText().contains("The email address is not in the correct format"));
	driver.findElement(By.xpath(obj.reg_emailAddress)).sendKeys(email_address);
	driver.findElement(By.xpath(obj.reg_subButton)).click();
	Thread.sleep(2000);

}

public void subscribenewUser() throws InterruptedException{
	//Test Incomplete due to premium upgrade link on log in box not working - Blocked

	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions action = new Actions(driver);
	Thread.sleep(2000);
	WebElement conf_reg= (WebElement)js.executeScript("return document.getElementsByClassName('RegisterInputButton').item(0);");
	action.moveToElement(conf_reg).perform();
    Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='Window_1_RegisterForm_Text_Upgrade']/a")).click();
	Thread.sleep(2000);
	//

}

//Delete a route
public void Delete_route_from_my_routes() throws InterruptedException{
	
driver.findElement(By.xpath(".//*[@id='MyRouteMy']")).click();
Thread.sleep(2000);	
driver.findElement(By.xpath(".//*[@id='myRouteListShow']")).click();
Thread.sleep(4000);	
driver.findElement(By.xpath(".//*[@id='myRouteList']/div/div[1]/div[4]")).click();
Thread.sleep(2000);	
for (String winHandle : driver.getWindowHandles()) {
    driver.switchTo().window(winHandle); // switch focus of WebDriver to the next found window handle (that's your newly opened window)
}
driver.findElement(By.cssSelector(obj.delete_routeDlgButton)).click();
Thread.sleep(3000);	
driver.findElement(By.xpath(obj.delete_OkButton)).click();
Thread.sleep(2000);	


}
// Basic smoke test functions

public void verify_topMenuBar(){
	assertTrue("Failed:search text box not found",IsElementPresent(obj.searchBox));
	assertTrue("Failed:Directions Menu not found in top bar",IsElementPresent(obj.DirectionsTab));
	assertTrue("Failed:Routes menu not found in top bar",IsElementPresent(obj.RoutesTab));
	assertTrue("Failed:Places menu not found in top bar",IsElementPresent(obj.mapfeatures));
	
}

public void verify_routesMenu(){
	
	assertTrue("Failed:Discover Routes options not found in routes menu",IsElementPresent(obj.Discover_Routes));
	assertTrue("Failed:Create Custom trail not found in routes menu",IsElementPresent(obj.Create_Custom_Trail));
	assertTrue("Failed:My Routes not found in routes menu",IsElementPresent(obj.My_Routes));
	assertTrue("Failed:Import GPX not found in routes menu",IsElementPresent(obj.ImportGPX));
	assertTrue("Failed:Get Directions not found in routes menu",IsElementPresent(obj.Get_Directions));
	
}

public void verify_UserLogin(String usertype) throws InterruptedException{
	Thread.sleep(5000);
	assertTrue("Failed:Login was not successfull",driver.findElement(By.xpath(".//*[@id='main-top-bar-user']")).getText().contains(usertype));
}


}

