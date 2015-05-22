package uk.co.ordnancesurvey.utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ObjectRepository {
	
	//Top Nav Menu
	
	@FindBy(how = How.XPATH, using = ".//*[@id='Window_1_Btn_Mode_Route']")
	public WebElement routes;
	
	//public final String routes= ".//*[@id='Window_1_Btn_Mode_Route']";
	public final String groups= ".//*[@id='Window_1_Btn_Mode_Group']";
	public final String mapfeatures=".//*[@id='Window_1_Btn_Mode_POI']";
	
	//Routes sub menu
	public final String planRoute=".//*[@id='Window_1_Btn_Plan']";
	public final String createRoute=".//*[@id='Window_1_Btn_Create']";
	
	@FindBy(how = How.XPATH, using = ".//*[@id='Window_1_Btn_Discover']")
	public WebElement discoverRoute;
	
	// Login page objects
	public final String login_email_address="Window_1_LI_UN";
	public final String login_pwd="Window_1_LI_PW";
	public final String login_button="Window_1_LI_BTN";
	public final String close_login="Window_1_Login_Close";
	
	
	//1:25 and 1:50 maps
	public final String map125=".//*[@id='Window_1_Btn_Leisure25k']";
	public final String map150=".//*[@id='Window_1_Btn_Leisure50k']";
	public final String MapFeatures=".//*[@id='Window_1_Btn_Mode_POI']";
	
	public final String poi_CategoryList=".//div[contains(@class,'POI_Category_Parent')]/div[1]";
	


}
