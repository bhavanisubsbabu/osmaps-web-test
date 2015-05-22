package uk.co.ordnancesurvey.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import uk.co.ordnancesurvey.utils.BusinessImplementation;
import uk.co.ordnancesurvey.utils.ObjectRepository;


public class LoginPageObj {
	
	
	 private final WebDriver driver;
	 
	 public ObjectRepository obj = new ObjectRepository();
	 BusinessImplementation bImpl;
	    
	    

	    public  LoginPageObj(WebDriver driver) {
	    	this.driver=(WebDriver) driver;
	        
	       
	    	driver.get("https://www.ordnancesurveyite.co.uk/osmaps/");
	        
	}

	  public void open_login_window() throws InterruptedException{
		  Thread.sleep(3000);	 
			 driver.findElement(By.xpath(".//*[@id='Window_1_UserIcon']")).click();
			 driver.findElement(By.xpath(".//*[@id='Window_1_CU_Action']")).click();
			 Thread.sleep(3000);
		 
		  
	  }
	    
			

	public void enter_emailAddress(String uname){	
	this.driver.findElement(By.id(obj.login_email_address)).sendKeys(uname);

	}
	public void enter_password(String pwd){
		this.driver.findElement(By.id(obj.login_pwd)).sendKeys(pwd);
	}
	public void submitLogin(){
		this.driver.findElement(By.id(obj.login_button)).click();
		
	}
	public void GuestUser(){
		driver.findElement(By.id(obj.close_login)).click();
	}

	
}
