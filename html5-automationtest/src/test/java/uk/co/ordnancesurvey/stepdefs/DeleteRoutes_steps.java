package uk.co.ordnancesurvey.stepdefs;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DeleteRoutes_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public DeleteRoutes_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@Then("^I should delete all routes$")
	public void i_should_delete_all_routes() throws Throwable {
	    mainPage.deleteRoutes();
	}

}