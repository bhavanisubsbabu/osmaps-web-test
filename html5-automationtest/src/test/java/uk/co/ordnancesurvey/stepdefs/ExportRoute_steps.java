package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ExportRoute_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public ExportRoute_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I click on export button$")
	public void i_click_on_export_button() throws Throwable {
		mainPage.exportRoute();	   
	}

	@Then("^route should be exported as gpx file$")
	public void route_should_be_exported_as_gpx_file() throws Throwable {
	    
	}


}
