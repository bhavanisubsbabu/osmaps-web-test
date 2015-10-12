package uk.co.ordnancesurvey.stepdefs;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class ImportRoutes_steps {
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public ImportRoutes_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I navigate to importGPX panel$")
	public void i_navigate_to_importGPX_panel() throws Throwable {
	    mainPage.navImportRoute();
	}

	@When("^select a gpx file and clicked on save$")
	public void select_a_gpx_file_and_clicked_on_save() throws Throwable {
	    mainPage.importRoute();
	    Thread.sleep(5000);
	}

	@Then("^route should be added to the application$")
	public void route_should_be_added_to_the_application() throws Throwable {
		mainPage.importSuccess();
	}
	
}
