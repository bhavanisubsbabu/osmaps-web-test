package uk.co.ordnancesurvey.utils;

import java.awt.Desktop.Action;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;




public class BusinessImplementation {
	
	 private final WebDriver driver;
	 ObjectRepository obj= new ObjectRepository();
	 
	
	 public BusinessImplementation(WebDriver driver){
		 JavascriptExecutor js = (JavascriptExecutor) driver;
		 this.driver=(WebDriver) driver;
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
	 
	
	 
	 public void plot_newRoute() throws InterruptedException{
		 Thread.sleep(3000);
		 //click on create Routes
		 driver.findElement(By.id("Window_1_Btn_Mode_Route")).click();
		 //click on Create route button
		 
		 driver.findElement(By.xpath(".//*[@id='Window_1_Btn_Create']")).click();
		 driver.findElement(By.xpath(".//*[@id='Window_1_ZoomIn']")).click();
		 driver.findElement(By.xpath(".//*[@id='Window_1_ZoomIn']")).click();
		 driver.findElement(By.xpath(".//*[@id='Window_1_ZoomIn']")).click();
		 driver.findElement(By.xpath(".//*[@id='Window_1_ZoomIn']")).click();
		 
		 //plot route
		 Thread.sleep(6000);		 
		 ClickAt(driver,".//*[@id='Window_1_CurrLocation']",893,194);
		 ClickAt(driver,".//*[@id='Window_1_CurrLocation']",1280,347);
		// driver.findElement(By.xpath(".//*[@id='OpenLayers_Geometry_Point_[%s]']")).click();
		// driver.findElement(By.id("OpenLayers_Geometry_Point_343")).click();
		// driver.findElement(By.id("OpenLayers_Geometry_Point_345")).click();
		 //driver.findElement(By.id("OpenLayers_Geometry_Point_419")).click();		 
		 
	 }
	 
	 public void save_route(){
		 if(driver.findElement(By.xpath("//div[contains(@class,'Basic_Style Basic_Btn Create_RouteCard_InLineBtn')][text()='Save']")).isDisplayed())
		 {
			 driver.findElement(By.xpath("//div[contains(@class,'Basic_Style Basic_Btn Create_RouteCard_InLineBtn')][text()='Save']")).click(); 
		 }
		 else{
			 System.out.println("Save button not enabled");
		 }
	 }
	 
	 
	 public void launch_app(){		
		 String envurl= AppProperties.get("envurl");
		 driver.get(envurl);
	 }
	 public void close_app(){
		 driver.quit();
	 }
	 
	 public void click_Discover(){
		obj.discoverRoute.click();
	 
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
}
