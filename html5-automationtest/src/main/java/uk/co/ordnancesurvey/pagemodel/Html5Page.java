package uk.co.ordnancesurvey.pagemodel;

import static org.junit.Assert.assertTrue;

import java.awt.Point;
import java.io.IOException;
import java.util.Iterator;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import junit.framework.Assert;

import org.apache.commons.logging.Log;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.gargoylesoftware.htmlunit.javascript.host.Document;
import com.steadystate.css.parser.Locatable;

import uk.co.ordnancesurvey.stepdefs.SharedWebDriver;
import uk.co.ordnancesurvey.stepdefs.WhenSteps;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;


public class Html5Page {
	private static final boolean Exception = false;
	private final WebDriver driver;
	public String browser = AppProperties.get("browser");
	public String route_type_radioBttn;
	public String route_name="AutoTestRoute" + System.currentTimeMillis() ;
	public String email_address="AutoTest"+System.currentTimeMillis() + "@test.com";
	public String email_address_2="AutoTesttest.com";
	 
	
	 ObjectRepository obj;
	 
	 
	 public Html5Page(WebDriver driver){
		
		 this.driver=(WebDriver) driver;
		 obj= new ObjectRepository();
	 }
	 
	 public void waitForElementPresent(String xpath,long sec) throws InterruptedException{
		  (new WebDriverWait(driver, sec)).until(ExpectedConditions.presenceOfElementLocated(By.xpath(xpath)));
		  Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS).ignoring(StaleElementReferenceException.class);
		  if(IsElementDisplayed(obj.busyElement)){				 	
				 try {
					 wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(obj.busyElement)));
				 	}
				 catch(StaleElementReferenceException e) {
					 e.getMessage();
					}
				}
		}
	 
	 
	 public void waitForElementClickable(String xpath,long sec) throws InterruptedException{
			
		 (new WebDriverWait(driver, sec)).until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
		 Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS).ignoring(StaleElementReferenceException.class);	
		 if(IsElementDisplayed(obj.busyElement)){				 	
			 try {
				 wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(obj.busyElement)));
			 	}
			 catch(StaleElementReferenceException e) {
				 e.getMessage();
				}
			}
		}
	 
	 public void waitForElementPresentifStale(WebElement xpath){
		 Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS).ignoring(StaleElementReferenceException.class);			 		 		 				  		
	 }

	 public void clickElement(WebElement locator) throws InterruptedException{
			this.waitForElementPresentifStale(locator);			
			try{
				Thread.sleep(2000);
				locator.click();
			}
			catch(Exception e){
				Thread.sleep(5000);
				locator.click();
			}
		
	 }

	
	 public void ClickAt( WebDriver driver, String selector, int x, int y)
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
		 this.waitForElementPresent(obj.RoutesTab, 5);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		 this.zoomIn();this.zoomIn();
		 this.zoomIn();
		 this.zoomIn();
		 this.zoomIn();	 
		 driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click(); 
	 }
	
	
	 //Open Discover Routes mode
	 
	 public void click_discoverRoutes() throws InterruptedException{
		 this.waitForElementPresent(obj.RoutesTab, 3);
		 Thread.sleep(3000);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		 this.waitForElementPresent(obj.RoutesTab_DiscoverRoutes, 3);
		 Thread.sleep(2000);
		 clickLinkByXpath(obj.RoutesTab_DiscoverRoutes);
		}
	 
	 public void open_myRoutes() throws InterruptedException{
		 this.waitForElementPresent(obj.RoutesTab, 3);
		 Thread.sleep(3000);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		 Thread.sleep(200);
		 this.waitForElementPresent(obj.RoutesTab, 3);
		 clickLinkByXpath(obj.My_Routes);					  
	 }
	 
	 public void zoomout(){
		 driver.findElement(By.xpath(obj.ZoomOut)).click();
	 }
	 
	 public void zoomIn() throws InterruptedException{
		 this.waitForElementPresent(obj.ZoomIn, 5);
		 this.click(obj.ZoomIn);
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
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');");
			Actions action = new Actions(driver);				
			action.moveToElement(waypoint,-20,10).click(waypoint).build().perform();
			Thread.sleep(3000);
			action.moveToElement(waypoint,40,20).click(waypoint).build().perform();
			Thread.sleep(3000);
			action.moveToElement(waypoint,60,30).click(waypoint).build().perform();			
			Thread.sleep(3000);
		 
	 }
	 
	 public void plot_newRoute() throws InterruptedException{
		 Actions action = new Actions(driver);
		 this.waitForElementPresent(obj.RoutesTab, 5);
		 this.click(obj.RoutesTab);
		    Thread.sleep(1000);
				 this.zoomIn();
				 this.zoomIn();
				 this.zoomIn();
				 this.zoomIn();	 		 
		 this.waitForElementPresent(obj.RoutesTab_CreateCustomRouteTrial, 5);
		 this.click(obj.RoutesTab_CreateCustomRouteTrial);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');");  	
		 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); 
		 Thread.sleep(500);
		 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
		 Thread.sleep(500);
		 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
		 Thread.sleep(500);
		 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();
	 }
	 
	 public void plot_newRoute_MapStack() throws InterruptedException{
		 Actions action = new Actions(driver);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();
		 this.waitForElementPresent(obj.RoutesTab_CreateCustomRouteTrial, 5);
		 driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click();	 			 
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');"); 
	 	 System.out.print(waypoint);
		
		 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); 
		 Thread.sleep(1000);
		 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
		 Thread.sleep(1000);
		 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
		 Thread.sleep(1000);
		 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();
	 }
	 
	 
	 public void delete_route() throws InterruptedException{
		 driver.findElement(By.xpath("//div[@id='myRouteListShow']")).click();
		 if(IsElementDisplayed("//div[contains(@class,'discoveredListDelete Basic_Btn')]")){
			 driver.findElement(By.xpath("//div[contains(@class,'discoveredListDelete Basic_Btn')]")).click();
			 
		 }
	 }
	 
	 /*
	  * @Ravi Kunaparaju
	  * adding login function	
	  */
	 
	 public void signIn(String userName, String Password) throws InterruptedException{
		 this.waitForElementPresent(obj.login_email_address, 3);
		 Thread.sleep(500);
		 set_textBox(obj.login_email_address, userName);
		 set_textBox(obj.login_pwd,Password);
		 clickLinkByXpath(obj.login_button);
		 Thread.sleep(1000);
	 }
	 
	//log out from application
	 
	 public void signOUt() throws InterruptedException{
		 Thread.sleep(3000);
		 this.waitForElementPresent(".//*[@id='main-top-bar-user']", 3);
		 driver.findElement(By.xpath(".//*[@id='main-top-bar-user']")).click();
		 driver.findElement(By.xpath(".//*[@id='main-top-bar-user-menu']/div[@data-action='logout']")).click();
		 Thread.sleep(2000);

	 }
	
	 
	 //--Saves routes in the db
	 
	 public void save_route() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())		 
		 {
			 this.click(obj.CustomRoute_Save);
			 this.waitForElementPresent(obj.CustomRoute_RouteName, 5);
			 Thread.sleep(1500);
		     driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); 
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("Test");
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys(Keys.ENTER);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("Test");
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys(Keys.ENTER);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteNotes)).sendKeys("12345##//");
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");			 
			 action.moveToElement(route_save).perform();
			 action.moveToElement(route_public,0,800).click(route_public).build().perform();
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 this.close_routecreateDialog();	
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			}
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 public void eidt_saved_route() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		this.waitForElementClickable((obj.CustomrRoute_Edit), 5);
		 Thread.sleep(1000);
		driver.findElement(By.cssSelector(obj.CustomrRoute_Edit)).click();
		Thread.sleep(4000);
		this.waitForElementPresent(obj.CustomRoute_Save, 5);		
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 Thread.sleep(1000);
			 driver.findElement(By.xpath(obj.CustomRoute_Save)).click(); 			
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(Keys.END);;
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys("-AutoEdited"); 
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 action.moveToElement(route_save).perform();
			 action.moveToElement(route_public,0,800).click(route_public).build().perform();
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 Thread.sleep(3000);
			 this.close_routecreateDialog();
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			  this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 public void scroll_sidePane()
	 {
		 driver.findElement(By.xpath("//div[contains(@class,'sidePaneGradient')]")).sendKeys(Keys.ARROW_DOWN);
		 driver.findElement(By.xpath("//div[contains(@class,'sidePaneBody')]")).sendKeys(Keys.ARROW_DOWN);
	 }
	 
	 
	 public void scroll_sidePane_New()
	 {
		 Actions action = new Actions(driver);
		 action.clickAndHold(driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[15]/div[1]/div[3]/div")));
		 action.sendKeys(Keys.DOWN);
		 action.release();
		 action.build().perform();
	 }
		 
 
	 
	 //save as cycle route
	 public void save_route_cycle() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 this.click(obj.CustomRoute_Save); 
			 Thread.sleep(1500);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); 
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
			 driver.findElement(By.xpath(".//*[@id='save-route-route-type-select']/div[4]")).click();
			 action.moveToElement(route_save).perform();
			 action.moveToElement(route_public,0,800).click(route_public).build().perform();
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 this.close_routecreateDialog();	
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
			 this.signOUt();
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 //save as other route
	 public void save_route_other() throws InterruptedException{
		 Actions action = new Actions(driver);
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 if(driver.findElement(By.xpath(obj.CustomRoute_Save)).isDisplayed())
			 
		 {
			 this.click(obj.CustomRoute_Save); 
			 Thread.sleep(1500);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name);
			 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
			 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
			 WebElement route_walk =(WebElement)js.executeScript("return document.getElementById('btn_activity_walking');");
			 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
			 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
			 WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
			 driver.findElement(By.xpath("//*[@id='other']")).click();
			 action.moveToElement(route_save).perform();
			 action.moveToElement(route_public,0,800).click(route_public).build().perform();
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 this.close_routecreateDialog();	
			 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
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
				 this.click(obj.CustomRoute_Save); 
				 Thread.sleep(1500);
				 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
				 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); 
				 this.waitForElementPresent(obj.CustomerRoute_RadioBtn_View_Everyone, 10);
				 WebElement route_save =(WebElement)js.executeScript("return document.getElementById('saveRouteBtn');");
				 WebElement route_run =(WebElement)js.executeScript("return document.getElementById('btn_activity_running');");
				 WebElement route_public =(WebElement)js.executeScript("return document.getElementById('btn_view_everyone');");
				 WebElement route_cycle =(WebElement)js.executeScript("return document.getElementById('btn_activity_cycling');");
				 WebElement route_other =(WebElement)js.executeScript("return document.getElementById('btn_activity_other');");
				 driver.findElement(By.xpath(".//*[@id='save-route-route-type-select']/div[3]")).click();
				 action.moveToElement(route_save).perform();
				 if(flag.equals("yes")){
					 action.moveToElement(route_public,0,800).click(route_public).build().perform();
					 Thread.sleep(3000);
				 }
				 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
				 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
				 action.moveToElement(route_save,0,900).click(route_save).build().perform();
				 this.close_routecreateDialog();	
				 assertTrue("Failedroute not created at all",IsElementPresent(".//*[@id='routeDetailName']"));
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
			 this.waitForElementPresent(obj.CustomRoute_RouteName, 5);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).clear();
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); 
			 this.waitForElementPresent(obj.CustomRoute_Type_Running, 5);
			 driver.findElement(By.xpath(obj.CustomRoute_Type_Running)).click(); 
			 this.waitForElementPresent(obj.CustomRoute_RouteSave, 5);
			 driver.findElement(By.xpath(obj.CustomRoute_RouteSave)).click();
			 this.waitForElementPresent(".//*[@id='Window_1_UserIcon']", 5);
			 driver.findElement(By.xpath(".//*[@id='Window_1_UserIcon']")).click();
			 this.waitForElementPresent(".//*[@id='Window_1_CU_Action']", 5);
			 driver.findElement(By.xpath(".//*[@id='Window_1_CU_Action']")).click();			 
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 
	 public void close_routecreateDialog() throws InterruptedException{
		 if(driver.findElement(By.xpath(obj.loadPreferences)).isDisplayed()){
			 Wait<WebDriver> wait = new FluentWait<WebDriver>(driver).withTimeout(30, TimeUnit.SECONDS).pollingEvery(5, TimeUnit.SECONDS).ignoring(StaleElementReferenceException.class);			 	
				 try {
					 wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath(obj.loadPreferences)));
				 }
				 catch(StaleElementReferenceException e) {
					 e.getMessage();
					}
		 }
		 for (String winHandle : driver.getWindowHandles()) {
		     driver.switchTo().window(winHandle); 
		 }
		 if(IsElementPresent(".//*[@id='Window_1_Content']/div[18]/div/div[3]/div[2]"))
		 driver.findElement(By.xpath(".//*[@id='Window_1_Content']/div[18]/div/div[3]/div[2]")).click();
		 else {
			 driver.findElement(By.cssSelector(".Basic_Btn.dialogButton.dialogButtonAlt")).click();
		 }
	 }
	 
	 public void close_registrationDialog() throws InterruptedException{
		 for (String winHandle : driver.getWindowHandles()) {
		     driver.switchTo().window(winHandle); 
		 }
		 if(IsElementPresent("//div[contains(@class,'dialogTitle')]"))
			 driver.findElement(By.cssSelector(".Basic_Btn.dialogButton")).click();		 
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
			 driver.findElement(By.xpath(obj.CustomRoute_RouteName)).sendKeys(route_name); 
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
			 Thread.sleep(2000);
			 action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
				action.moveToElement(route_save).sendKeys(Keys.ARROW_DOWN);
			 action.moveToElement(route_save,0,900).click(route_save).build().perform();
			 Thread.sleep(4000);
			 this.close_routecreateDialog();
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
	 public void launch_app() throws InterruptedException{		
		 String envurl= AppProperties.get("envurl");
		 driver.get(envurl);
		 Thread.sleep(2000);
		 if(this.IsElementPresent(obj.InterfaceTourClose)){
			 this.closeInterfaceTour();
		 }
	 }
	 
	 
	 public void click_Discover(){
		obj.discoverRoute.click();
	 
}
	 
	 //* Login Functions //
	 
	 public void open_login_window() throws InterruptedException{
		 Thread.sleep(3000);
		  if (IsElementDisplayed(".//*[@id='main-top-bar-sign-in']")){	
			  this.click(".//*[@id='main-top-bar-sign-in']");
		}
		  else {
			  this.signOUt();
			  this.click(".//*[@id='main-top-bar-sign-in']");
		  }
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
			 this.clickLinkByXpath(obj.mapfeatures); 
		 }
	 
	 
	 
	 public void verify_poi_categories_exist() throws InterruptedException{
		 this.waitForElementPresent(obj.poi_CastlesAndAttractions, 5);
		 assertTrue(this.IsElementDisplayed(obj.poi_CastlesAndAttractions));
}
	public void set_textBox(String locator,String value) throws InterruptedException{
		this.waitForElementPresent(locator, 10);
		this.driver.findElement(By.xpath((locator))).clear();
		this.driver.findElement(By.xpath((locator))).sendKeys(value);
	}
	
	public void hitEnterKey(String locator) throws InterruptedException{
		this.driver.findElement(By.xpath(locator)).sendKeys(Keys.ENTER);
	}
	//--click link by xpath
	public void clickLinkByXpath(String locator) throws InterruptedException{
		this.waitForElementPresent(locator, 10);
		this.driver.findElement(By.xpath(locator)).click();
	}
	
		public void click(String locator) throws InterruptedException{
			this.waitForElementClickable(locator, 10);			
				try{
					this.driver.findElement(By.xpath(locator)).click();
				}
				catch(Exception e){
					Thread.sleep(5000);
					this.driver.findElement(By.xpath(locator)).click();
				}
			
		}
	
	 public void enter_emailAddress(String uname){	
	this.driver.findElement(By.id(obj.login_email_address)).sendKeys(uname);

	}
	
	public void submitLogin() throws InterruptedException{
		this.waitForElementClickable(obj.login_button, 10);
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
	 	 System.out.println("Element not found on the page");
	 	 return false;
	  }
	 }
	 
	 public boolean elementDoesntExists(String element){
		 
		if(driver.findElement(By.xpath(element)).isDisplayed()){ 
		 return false;
		}
		return true;
	 }
	 
	 public boolean IsElementDisplayed(String xpath) throws InterruptedException{
		  boolean flag;
		  try{
			  driver.findElement(By.xpath(xpath)).isDisplayed();			  
		  }
		  catch(NoSuchElementException e){
			  e.getAdditionalInformation();
			  Thread.sleep(2000);
		  }
		  if(driver.findElement(By.xpath(xpath)).isDisplayed())
			  flag= true; 
		 else{
			 flag= false;
		 }
		  return flag;
	 }
	 
	 
	 /*
	  * @Ravi Kunaparaju
	  * New POI methods
	  */
	 
	 public void viewPOI() throws InterruptedException{
		 this.click(obj.POI);
		 this.click(obj.POIMoreInfo);
	 }
	 
	 public void assertPOI() throws InterruptedException{
			this.waitForElementPresent(obj.POIVerification, 10);
	 }
	 
	 public void pinPOI() throws InterruptedException{
		 if(this.IsElementPresent(obj.POIunpin)){
			 unpinPOI();
			 this.click(obj.POIMoreInfo);
		 }
		 this.waitForElementPresent(obj.POIpin,10);	
		 this.click(obj.POIpin);
	 }
	 
	 public void unpinPOI() throws InterruptedException{
		 	this.click(obj.POIunpin);
	 }
	 
	 public void verifyPinOnMap() throws InterruptedException{
		 this.waitForElementPresent(obj.POI, 3);
		 this.IsElementPresent(obj.POI);
		 
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
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('image').item"+"("+arg2+")");  
		 action.moveToElement(POI).click(POI).build().perform();
		 Thread.sleep(4000);

	 }

	public void PageRefresh(){
		driver.navigate().refresh();
	}
	 
		// Locating a  First POI from results
	 public void clickOnPOICluster(int arg2) throws InterruptedException {
		 
		 
		 Actions action = new Actions(driver);;		 
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement POI= (WebElement) js.executeScript("return document.getElementsByTagName('circle').item"+"("+arg2+")"); 
	 	 int total=Integer.parseInt(js.executeScript("return document.getElementsByTagName('circle').length").toString());
		 System.out.println(total);
		 action.moveToElement(POI).click(POI).build().perform();

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
		this.click(obj.mapStackButton);
		
	}
	
	public void Verify_droppedPin() throws InterruptedException{
		//verify dropped pin
		
		assertTrue("Failed:Dropped pin not found",driver.findElement(By.xpath(obj.SearchBoxPopUp)).isDisplayed());
		assertTrue("Failed,Dropped pin no options given",driver.findElement(By.xpath("//div[contains(@class,'PopUp_Link')]")).getText().contains("Directions to here"));
		assertTrue("Failed: weather info not displayed on dropped pin",IsElementPresent("//div[contains(@style,'cursor: pointer;')]"));
		driver.findElement(By.xpath(obj.searchBoxPopUpClose)).click();;
		Thread.sleep(4000);		
	}
	
	/*	@Author Ravi Kunaparaju
	 * 	updated assert as mapstack buttons for guest, registered and subscribed users are same now, when clicked on these buttons based on user type allowed maps are displayed or prompted to subscribe
	 */
	
public void verifyMapstackButtons_Subscriber() throws InterruptedException{
	assertTrue("Failed:, MapStack 25k not found",driver.findElement(By.xpath(obj.standardMap)).isDisplayed());
	assertTrue("Failed:, MapStack 50k not found",driver.findElement(By.xpath(obj.standardAndLeisureMap)).isDisplayed());
	assertTrue("Failed:, MapStack zoom Map not found",driver.findElement(By.xpath(obj.nationalParkPathwaysMap)).isDisplayed());
	assertTrue("Failed:, MapStack Aerial not found",driver.findElement(By.xpath(obj.AerialMap)).isDisplayed());

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

/*	@Author Ravi Kunaparaju
 * 	updated assert as mapstack buttons for guest, registered and subscribed users are same now, when clicked on these buttons based on user type allowed maps are displayed or prompted to subscribe
 */

public void verifyMapstackButtons_registered(){
	assertTrue("Failed:, MapStack 25k not found",driver.findElement(By.xpath(obj.standardMap)).isDisplayed());
	assertTrue("Failed:, MapStack 50k not found",driver.findElement(By.xpath(obj.standardAndLeisureMap)).isDisplayed());
	assertTrue("Failed:, MapStack zoom Map not found",driver.findElement(By.xpath(obj.nationalParkPathwaysMap)).isDisplayed());
	assertTrue("Failed:, MapStack Aerial not found",driver.findElement(By.xpath(obj.AerialMap)).isDisplayed());
}


public void verify_carouselPanelandClose() throws InterruptedException{
	Thread.sleep(3000);
	assertTrue("Failed: On board Carousel not displayed,pls check manually",IsElementPresent("//div[contains(@class,'carouselSlide')]/div[1]"));
	driver.findElement(By.xpath("//div[@id='carouselCheckbox']")).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath("//div[@id='closeCarousel']")).click(); 
	
}

public void close_carousel() throws InterruptedException{
	
	if(driver.findElement(By.xpath("//div[contains(@class,'carouselSlide')]/div[1]")).isDisplayed())
		{
			this.waitForElementPresent("//div[@id='carouselCheckbox']", 5);
			this.click("//div[@id='carouselCheckbox']");
			this.waitForElementPresent("//div[@id='closeCarousel']", 5);
			this.click("//div[@id='closeCarousel']");
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
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_1)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_2)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_3)).click();
	Thread.sleep(1000);
	driver.findElement(By.xpath(obj.Select_Weather_Forecast_day_4)).click();
	Thread.sleep(1000);
	clickLinkByXpath(".//*[@id='Window_1_Content']/div[17]/div/div[1]/div[1]");
	Thread.sleep(1000);
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
	driver.findElement(By.xpath(".//*[@id='discPopupContent']/img")).click();
	Thread.sleep(1000);
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
	driver.findElement(By.xpath(".//*[@id='myRouteListShow']")).click();
	Thread.sleep(2000);
	set_textBox(".//*[@id='MyRoutesSearchBox']", "Test Message");
	Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='MyRoutesSearchBox']")).clear();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Routes_Tab)).click();
	
	

}



//GET DIRECTIONS

public void Verify_Get_Directions() throws InterruptedException{
	
	//Start:Current Location
	assertTrue(driver.findElement(By.xpath(".//*[@id='Window_1_Search_Input']")).isDisplayed());
	System.out.println(getText(".//*[@id='Window_1_Search_Input']"));
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
	Thread.sleep (1000);
}

// lib funtions related AB routing

public void openABwindow() throws InterruptedException{
	Thread.sleep(5000);
	driver.findElement(By.xpath(obj.Routes_Tab)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.Get_Directions)).click();
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
	     driver.switchTo().window(winHandle); 
	 }
	if(IsElementDisplayed("//div[contains(@class,'dialogTitle')]"))
	{
	assertTrue("Failed: User registration was not successfull,check manually",driver.findElement(By.xpath("//div[contains(@class,'dialogTitle')]")).getText().contains("Registration complete"));
	Thread.sleep(3000);
	driver.findElement(By.cssSelector(".Basic_Btn.dialogButton")).click();
	Thread.sleep(5000);
	}
	else{
	System.out.print("Registration not completed");
	}

}

public void registernewUser2() throws InterruptedException{
	// this is to enter incorrect details (negative test)
	
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions action = new Actions(driver);
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.reg_firstName)).sendKeys("AutotestFirstName");
	driver.findElement(By.xpath(obj.reg_lastName)).sendKeys("AutotestLastName");
	driver.findElement(By.xpath(obj.reg_nickName)).sendKeys("TestNickname");
	driver.findElement(By.xpath(obj.reg_emailAddress)).sendKeys(email_address_2);
	WebElement conf_pwd= (WebElement)js.executeScript("return document.getElementById('registerFormPasswordRepeat');");
	action.moveToElement(conf_pwd).perform();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.reg_password)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_confirmpassword)).sendKeys("Test@123");
	driver.findElement(By.xpath(obj.reg_subButton)).click();
	Thread.sleep(2000);
	driver.findElement(By.xpath(obj.reg_emailAddress)).sendKeys(email_address);
	driver.findElement(By.xpath(obj.reg_subButton)).click();
	Thread.sleep(2000);

}

public void subscribenewUser() throws InterruptedException{
	JavascriptExecutor js = (JavascriptExecutor) driver;
	Actions action = new Actions(driver);
	Thread.sleep(2000);
	WebElement conf_reg= (WebElement)js.executeScript("return document.getElementsByClassName('RegisterInputButton').item(0);");
	action.moveToElement(conf_reg).perform();
    Thread.sleep(2000);
	driver.findElement(By.xpath(".//*[@id='Window_1_RegisterForm_Text_Upgrade']/a")).click();
	Thread.sleep(2000);
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
    driver.switchTo().window(winHandle); 
}
driver.findElement(By.cssSelector(obj.delete_routeDlgButton)).click();
Thread.sleep(3000);	
driver.findElement(By.cssSelector(obj.delete_OkButton)).click();
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

/*	@Author Ravi Kunaparaju
 * 	Added this method to select  a map type from mapstack options 
 */

	public void selectMapType(String maptype) throws InterruptedException{
		this.click(maptype);
//Mandatory sleep for map to load
		Thread.sleep(5000);
	}
	
	public void snapZoom() throws InterruptedException{
		if(IsElementDisplayed(obj.Snapdisabled)){
			for(int i=0;i<3;i++){zoomIn();}
		}
	}
	

	public void createDpnRoute() throws InterruptedException{
		 Actions action = new Actions(driver);
		 driver.findElement(By.xpath(obj.RoutesTab)).click();	    				 		 
		 Thread.sleep(3000);	
		 driver.findElement(By.xpath(obj.RoutesTab_CreateCustomRouteTrial)).click();
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');"); 
		 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); 
		 Thread.sleep(2000);
		 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
		 Thread.sleep(2000);
		 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
		 Thread.sleep(2000);
		 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();
		
	}

/*
 * @Ravi Kunaparaju
 * Added methods for extending tests 
 */
	
		public void searchMap(String place) throws InterruptedException{
			this.set_textBox(obj.searchBox, place);
			this.hitEnterKey(obj.searchBox);
		}
		
		
		public void verifyRouteRatings() throws InterruptedException{
			this.waitForElementPresent(obj.star_ratings_discover_routes, 5);
			Thread.sleep(500);
			this.IsElementDisplayed(obj.star_ratings_discover_routes);
			this.IsElementDisplayed(obj.user_count_discover_routes);
		}
		
		public void rateRoute() throws InterruptedException{
			driver.findElement(By.xpath(obj.star_ratings_discover_routes)).click();
			this.waitForElementPresent(obj.route_popup_moreInfo, 5);
			Thread.sleep(500);
		}

/*
 * Print related methods	
 */
	
		public void selectPrint() throws InterruptedException{
			this.click(obj.print_toolbar);					
			this.waitForElementPresent(obj.preview_window, 5);
		}
		
		public void hidePrintPreview(){
			driver.findElement(By.xpath(obj.preview_window_hide)).click();
		}
		
		public void assert_preview_hide(){
			assertTrue(driver.findElement(By.xpath(obj.preview_window_show)).isDisplayed());
		}
		
		public void showPrintPreview() throws InterruptedException{
			this.click(obj.preview_window_show);			
		}
		
		public void assert_preview_visible() throws InterruptedException{
			assertTrue(driver.findElement(By.xpath(obj.preview_window_hide)).isDisplayed());
		}
		
		public void selectA3Portrait() throws InterruptedException{
			this.waitForElementPresent(obj.A3Portrait, 5);
			this.click(obj.A3Portrait);
		}
		
		public void previewPrint() throws InterruptedException{
			this.click(obj.preview_button);			
			this.waitForElementPresent(obj.back_to_map, 50);
		}
		
		public void assert_A4print(){
			assertTrue(driver.findElement(By.xpath(obj.preview_page_A4_assert)).isDisplayed());
		}
		public void assert_A3print(){
			assertTrue(driver.findElement(By.xpath(obj.preview_page_A3_assert)).isDisplayed());
		}
		
/*
 *  My Routes navigation
 *  
 */
		public void navigateRoutesList() throws InterruptedException{			
			this.click(obj.Routes_Tab);			
			this.click(obj.RoutesTab_MyRoutes);			
			this.click(obj.MyRoutes_routes);			
			this.waitForElementPresent(obj.routeNameDiv1, 10);
		}
		
/*
 *  Select Top route
 */
		public void selectRouteDetails() throws InterruptedException{			
			this.click(obj.routeNameDiv1);
			try{
				this.click(obj.routeMoreInfo);
			}
			catch(Exception e){
				this.click(obj.routeViewroute);
			}
			this.waitForElementPresent(obj.routeDetailsSidePanel, 5);
		}
/*
 * 	route popup more info 	
 */
		public void selectRouteDirections() throws InterruptedException{
			this.waitForElementPresent(obj.routeNameDiv1, 10);
			driver.findElement(By.xpath(obj.routeNameDiv1)).click();
			this.waitForElementPresent(obj.routePopup, 5);
			driver.findElement(By.xpath(obj.routeGetDirection)).click();
			this.waitForElementPresent(obj.routeDirectionsSidePanel, 5);
		}
/*
 *  Close Interface Tour for new user		
 */
		public void closeInterfaceTour() throws InterruptedException{
				this.waitForElementClickable(obj.InterfaceTourClose, 5);
				this.click(obj.InterfaceTourClose);			
		}
/*
 * Edit route 
 */
		
		public void editrouteNav() throws InterruptedException{
			this.waitForElementClickable(obj.routeEdit, 5);
			this.click(obj.routeEdit);
			if(this.IsElementPresent(obj.editSideLink)){
				System.out.print("found edit link");
				JavascriptExecutor js = (JavascriptExecutor) driver;
				WebElement editLink = (WebElement) js.executeScript("return $('div[class^=sidePaneAction]')[4];");
				Actions action = new Actions(driver);
				action.click(editLink).build().perform();
				Thread.sleep(2000);
			}
		}
		public void editroutewaypoints() throws InterruptedException{
			Actions action = new Actions(driver);
			this.editrouteNav();
			if(IsElementDisplayed(obj.loadPreferences)){
				this.waitForElementClickable(obj.CustomRoute_Save, 10);				
			}
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');"); 
			action.moveToElement(waypoint,410,96).click(waypoint).build().perform();
			Thread.sleep(500);
			action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
			Thread.sleep(500);
		}
		
		public void confirmRouteSaved() throws InterruptedException{
			this.waitForElementPresent(obj.savedRouteConfirm, 5);
			assertTrue(driver.findElement(By.xpath(obj.savedRouteConfirm)).isDisplayed());
			driver.findElement(By.xpath(obj.saveDialogDone)).click();
			assertTrue(driver.findElement(By.xpath(obj.routeDetailName)).isDisplayed());
		}
		
		public void saveRoute() throws InterruptedException{
			this.click(obj.CustomRoute_Save);
			this.waitForElementClickable(obj.CustomRoute_RouteSave, 5);
			this.click(obj.CustomRoute_RouteSave);
		}
		
		public void deleteWaypoint() throws InterruptedException{
			this.editrouteNav();
			this.click(obj.delete);		
			JavascriptExecutor js = (JavascriptExecutor) driver;
			int waypoints = Integer.parseInt(js.executeScript("return $('image[id^=OpenLayers]').length;").toString());
			WebElement removeWaypoint = (WebElement) js.executeScript("return $('image[id^=OpenLayers]')[1];");
			this.clickElement(removeWaypoint);			
		}
		
		public void routeStyle() throws InterruptedException{
			this.editrouteNav();
			this.click(obj.style);
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement routeStyleYellow = (WebElement) js.executeScript("return "+obj.routeStyleYellow+";");
			WebElement routeStyleThickness2 = (WebElement) js.executeScript("return "+obj.routeStyleThickness2 +";");
			this.clickElement(routeStyleYellow);
			this.clickElement(routeStyleThickness2);			
		}
		
		public void walkRoute() throws InterruptedException{
			this.editrouteNav();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement walk = (WebElement) js.executeScript("return $('#create-route-route-type-select > div:eq(1)')[0];");
			Actions action = new Actions(driver);
			action.click(walk).build().perform();
		}
		
		public void runRoute() throws InterruptedException{
			this.editrouteNav();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement run = (WebElement) js.executeScript("return $('#create-route-route-type-select > div:eq(2)')[0];");
			Actions action = new Actions(driver);
			action.click(run).build().perform();
		}
		
		public void cycleRoute() throws InterruptedException{
			this.editrouteNav();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement cycle = (WebElement) js.executeScript("return $('#create-route-route-type-select > div:eq(3)')[0];");
			Actions action = new Actions(driver);
			action.click(cycle).build().perform();
		}
		
		public void otherRoute() throws InterruptedException{
			this.editrouteNav();
			JavascriptExecutor js = (JavascriptExecutor) driver;
			WebElement other = (WebElement) js.executeScript("return $('#create-route-route-type-select > div:eq(4)')[0];");
			Actions action = new Actions(driver);
			action.click(other).build().perform();
		}
		
		public void waypointeditNav() throws InterruptedException{
			this.editrouteNav();
			this.click(obj.selectWaypoint);
			this.click(obj.editWaypoint);
		}
		
		public void waypointName(String Name, String Description) throws InterruptedException{
			this.waypointeditNav();
			this.set_textBox(obj.waypointName, Name);
			this.set_textBox(obj.waypointDescription, Description);
			this.click(obj.saveWaypoint);
		}

		/*
		 * Share route		
		 */
				
		public void shareRouteNav() throws InterruptedException{
			this.click(obj.shareRoute);
		}

		public void shareRouteByEmail(String emailaddr) throws InterruptedException{
			this.click(obj.shareEmailButton);
			this.click(obj.shareEmailSend);
			this.set_textBox(obj.shareEmailAddr, emailaddr);
			this.click(obj.shareEmailSend);
		}
		public void shareRouteEmailText(String text) throws InterruptedException{
			this.set_textBox(obj.shareEmailMessage, text);
		}
				
		public void shareRouteConfirm() throws InterruptedException{
			this.IsElementDisplayed(obj.shareEmailConfirm);
			this.click(obj.ShareEmailConfirmOkButton);
		}
				
		public void shareRouteByFacebook() throws InterruptedException{
			this.shareRouteNav();
			this.click(obj.facebookShare);
			Thread.sleep(10000);
			for (String winHandle : driver.getWindowHandles()) {
				driver.switchTo().window(winHandle);
				String title = driver.switchTo().window(winHandle).getTitle();
				System.out.print(title);
				this.facebookLogin();
				this.facebookShare();
			}								
		}
				
		public void facebookLogin() throws InterruptedException{
			this.waitForElementPresent(obj.facebookEmail, 5);
			this.set_textBox(obj.facebookEmail, "testerosmaps@gmail.com");
			this.set_textBox(obj.facebookPassword, "testerosmaps");
			this.click(obj.facebookLoginButton);
		}
		public void facebookShare() throws InterruptedException{
			this.waitForElementPresent(obj.facebookShareNotes, 5);
			System.out.print("element present");
			this.set_textBox(obj.facebookShareNotes, "Fantastic route to explore, have fun");
			this.click(obj.facebookShareSubmit);
		}
		
		/*
		 * Import gpx
		 */
		public void navImportRoute() throws InterruptedException{
			this.click(obj.RoutesTab);
			this.click(obj.importGPX);			
		}
		
		public void importRoute() throws InterruptedException, IOException{
			this.click(obj.browseFile);
			System.out.println("selecting gpx file");
			String filepath = System.getProperty("user.dir")+"/src/test/resources/testdata";
			if(browser.equalsIgnoreCase("chrome")){
				Runtime.getRuntime().exec(filepath+"/ChromeUploadgpx.exe");
			}
			else if(browser.equalsIgnoreCase("firefox")){
				Runtime.getRuntime().exec(filepath+"/firefoxUploadgpx.exe");
			}
			else if(browser.equalsIgnoreCase("ie")){
				Runtime.getRuntime().exec(filepath+"/IEUploadgpx.exe");
			}	
			Thread.sleep(4000);
			this.click(obj.importSave);
			if(IsElementDisplayed(obj.loadPreferences)){
				this.waitForElementClickable(obj.editImportRouteButton, 60);				
			}
		}
		
		public void importSuccess() throws InterruptedException{
			assertTrue(this.IsElementDisplayed(obj.confirmImportSuccess));
			assertTrue(this.IsElementDisplayed(obj.editImportRouteButton));
		}
		
		public void exportRoute()throws InterruptedException{
			this.click(obj.exportGPX);
			Thread.sleep(1000);
		}
		/*
		 *  to create a Route with 500 way points 
		 */

		public void longRoute() throws InterruptedException{
			int i,j;
			Actions action = new Actions(driver);
			 this.waitForElementPresent(obj.RoutesTab, 5);
			 this.click(obj.RoutesTab);
			    Thread.sleep(1000);
					 this.zoomIn();
					 this.zoomIn();
					 this.zoomIn();
					 this.zoomIn();	 		 
			 this.waitForElementPresent(obj.RoutesTab_CreateCustomRouteTrial, 5);
			 this.click(obj.RoutesTab_CreateCustomRouteTrial);
			 JavascriptExecutor js = (JavascriptExecutor) driver;
			 WebElement waypoint= (WebElement) js.executeScript("return document.getElementById('g_mapController.m_currentMap.m_map.id');");  	
			 action.moveToElement(waypoint,410,96).click(waypoint).build().perform(); 
			 Thread.sleep(500);
			 action.moveToElement(waypoint,300,205).click(waypoint).build().perform();
			 Thread.sleep(500);
			 action.moveToElement(waypoint,300,150).click(waypoint).build().perform();
			 Thread.sleep(500);
			 action.moveToElement(waypoint,500,224).click(waypoint).build().perform();		 
		}
		
		// #################################### WhiteLabel + DofE functions ####################################

		/*
		 * Login as DoE
		 */
		public void loginDoE() throws InterruptedException {
			WhenSteps whenSteps = new WhenSteps((SharedWebDriver) driver);
			whenSteps.loginToApplication(AppProperties.get("Login"), AppProperties.get("Password"));
		}

		public void loginDoERoutesDisabled() throws InterruptedException {
			WhenSteps whenSteps = new WhenSteps((SharedWebDriver) driver);
			whenSteps.loginToApplicationRoutesDisabled(AppProperties.get("Login"), AppProperties.get("Password"));
		}

		/*
		 * Assert Login Successful
		 */
		public void verify_Login() throws InterruptedException {
			this.waitForElementPresent(obj.user_logged, 5);
			assertTrue(this.IsElementDisplayed(obj.user_logged));
		}
		
		
		 //----- Launches application with the given url (for SingleUserMode) --//
		 public void LaunchAppSingleUserMode() throws InterruptedException{		
			 
			 Set<String> windows = driver.getWindowHandles();
//			 String firstWindow = driver.getWindowHandle();
			 ((JavascriptExecutor)driver).executeScript("window.open('http://osmaps.dev1-beta.ordsvy.gov.uk:9090/');");
			 Thread.sleep(5000);
			 Set<String> newWindow = driver.getWindowHandles();
			 newWindow.removeAll(windows);
			 String sumWindow = ((String)newWindow.toArray()[0]);
			 driver.switchTo().window(sumWindow);

			 if(this.IsElementPresent(obj.InterfaceTourClose)){
		    	this.closeInterfaceTour();
			    }
		 }
			 
		public boolean IsElementEnabled(String xpath) throws InterruptedException{
			WebElement webElement = driver.findElement(By.xpath(xpath));
			return !webElement.getAttribute("class").contains("disabled");
		}
		
		public void plot_Route() throws InterruptedException{
			 Actions action = new Actions(driver);
			    Thread.sleep(1000);
					 this.zoomIn();
					 this.zoomIn();
					 this.zoomIn();
					 this.zoomIn();	 		 
			 WebElement waypoint = driver.findElement(By.xpath(".//*[@id='create-route-draw']"));
			 Thread.sleep(500);
			 action.moveToElement(waypoint,-50,120).click().build().perform(); 
			 Thread.sleep(500);
			 action.moveToElement(waypoint,-150,200).click().build().perform();
			 Thread.sleep(500);
			 action.moveToElement(waypoint,-50,300).click().build().perform();
			 Thread.sleep(500);
			 action.moveToElement(waypoint,100,200).click().build().perform();
			 Thread.sleep(500);
		 }
		
//		/*
//		 * Open User Login Window
//		 */
//		public void open_user_login_window() throws InterruptedException{
//			 Thread.sleep(3000);
//			  if (IsElementDisplayed(".//*[@id='main-top-bar-user']")){	
//				  this.click(".//*[@id='main-top-bar-user']");
//			}
//			  else {
//				  this.signOUt();
//				  this.click(".//*[@id='main-top-bar-user']");
//			  }
//		 }
		
}
