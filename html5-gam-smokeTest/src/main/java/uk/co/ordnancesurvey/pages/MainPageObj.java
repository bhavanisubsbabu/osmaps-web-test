package uk.co.ordnancesurvey.pages;

import java.util.logging.Logger;
import static org.junit.Assert.*;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.steps.SubscriberTestSteps;
import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class MainPageObj {
//	BrowserDriver driver;
	private final WebDriver driver;
	BusinessImplementation bImpl;
	 
	 public ObjectRepository obj = new ObjectRepository();
///	 public BusinessImplementation bImpl= new BusinessImplementation(WebDriver);
	 private static final Logger LOGGER = Logger.getLogger(MainPageObj.class.getName());
public MainPageObj(WebDriver driver){
	bImpl = PageFactory.initElements(driver,
            BusinessImplementation.class);
	this.driver=driver;
	
}

public void click_discoverRoutes() throws InterruptedException{
	driver.findElement(By.xpath(".//*[@id='Window_1_Btn_Mode_Route']")).click();
	driver.findElement(By.xpath(".//*[@id='Window_1_Btn_Discover']")).click();
	Thread.sleep(3000);
}
public void verify_routeExist() throws InterruptedException{
	Thread.sleep(3000);
	assertTrue("Failed:Public Route does not exist on the map,Please check manually", bImpl.IsElementPresent(".//*[@id='OpenLayers_Geometry_Point_838']"));
		
}

public void click_125Map(){
	//driver.findElement(By.xpath(obj.map125)).click();
}

public void click_150Map(){
	//driver.findElement(By.xpath(obj.map150)).click();
}

public void close_app(){
	driver.quit();
}

}
