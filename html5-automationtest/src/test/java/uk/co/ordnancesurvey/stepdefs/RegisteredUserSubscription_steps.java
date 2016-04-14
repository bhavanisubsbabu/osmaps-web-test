package uk.co.ordnancesurvey.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;

public class RegisteredUserSubscription_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public RegisteredUserSubscription_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I registered a user$")
	public void i_registered_a_user() throws Throwable {
		mainPage.navRegistration();
	    mainPage.registernewUser();
	   // mainPage.registrationSuccess();
	}
	
	@When("^selected upgrade from menu$")
	public void selected_upgrade_from_menu() throws Throwable {
	    mainPage.upgradeRegisteredUser();
	}

}
