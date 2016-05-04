package uk.co.ordnancesurvey.stepdefs;

import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;

public class GuestUserSubscription_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public GuestUserSubscription_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I click on Sign up button$")
	public void i_click_on_Sign_up_button() throws Throwable {
	    mainPage.open_login_window();
	}

	@When("^click on Register as Subscriber$")
	public void click_on_Register_as_Subscriber() throws Throwable {
		mainPage.click(obj.registerPremium);
	}

	@When("^I select one month subscription$")
	public void i_select_one_month_subscription() throws Throwable {
	    mainPage.click(obj.premiumMonth);
	}
	

	@When("^complete registration process$")
	public void complete_registration_process() throws Throwable {
	    mainPage.subscriptionRegisternewUser();	    
	}

	@When("^complete subscription process$")
	public void complete_subscription_process() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    mainPage.Subscription();
	}

	@Then("^I am logged in as subscribed user$")
	public void i_am_logged_in_as_subscribed_user() throws Throwable {
	    mainPage.assertSubSuccess();
	}
	
	@When("^I select one year subscription$")
	public void i_select_one_year_subscription() throws Throwable {
	    mainPage.click(obj.premiumYear);
	}

	@When("^click on cancel subscription$")
	public void click_on_cancel_subscription() throws Throwable {
		mainPage.waitForElementPresent(obj.cancelSub, 60);
	    mainPage.click(obj.cancelSub);
	}

	@Then("^I am taken back to osmaps application and logged in as registered user$")
	public void i_am_taken_back_to_osmaps_application_and_logged_in_as_registered_user() throws Throwable {
	    mainPage.assertCancelSub();
	}
}
