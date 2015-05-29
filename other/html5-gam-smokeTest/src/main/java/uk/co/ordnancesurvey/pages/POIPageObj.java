package uk.co.ordnancesurvey.pages;

import java.util.logging.Logger;
import org.openqa.selenium.By;
import static org.junit.Assert.*;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class POIPageObj {

	private final WebDriver driver;
	BusinessImplementation bImpl;
	 
	 public ObjectRepository obj = new ObjectRepository();
///	 public BusinessImplementation bImpl= new BusinessImplementation(WebDriver);
	 private static final Logger LOGGER = Logger.getLogger(MainPageObj.class.getName());
	 
	 public POIPageObj(WebDriver driver){
		 bImpl = PageFactory.initElements(driver,
		            BusinessImplementation.class);
			this.driver=driver;
	 }

	 public void openMapfeatures(){
		 if(bImpl.IsElementPresent(obj.mapfeatures))
		 driver.findElement(By.xpath(obj.mapfeatures)).click();
		 else{
			 LOGGER.info("Map Feature menu is not available,please check manually");
		 }
	 }
	 public void verify_POI_CategoriesExist(){
		if (bImpl.IsElementPresent("//div[contains(@class,'POI_Category_Parent')]/div[1]"))
		{
			System.out.println(driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText());
			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("[+/-] Sport, Health & Fitness"));
			//assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("[+/-] Attractions"));
//			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]")).getText().contains("[+/-] Eating and drinking"));
//			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("Entertainment"));
//			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("National Parks"));
//			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("National Trails"));
//			assertTrue("Failed:, Category not found",driver.findElement(By.xpath("//div[contains(@class,'POI_Category_Parent')]/div[1]")).getText().contains("[+/-] Places to stay"));
			
			
		}
			
		 
		

	 }
}




