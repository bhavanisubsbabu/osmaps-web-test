package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ShareRoute_steps {
	
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public ShareRoute_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I navigate to my routes to select a route$")
	public void i_navigate_to_my_routes_to_select_a_route() throws Throwable {
	    mainPage.navigateRoutesList();
	    mainPage.selectRouteDetails();
	}

	@When("^I clicked on Share icon, select email, enter email address and share$")
	public void i_clicked_on_Share_icon_select_email_enter_email_address_and_share() throws Throwable {
	    mainPage.shareRouteNav();
	    mainPage.shareRouteByEmail("ravikumar.kunaparaju@os.uk");
	}

	@Then("^application should send email with route details and default message$")
	public void application_should_send_email_with_route_details_and_default_message() throws Throwable {
		mainPage.shareRouteConfirm();
	}

	@When("^I clicked on Share icon, select email, enter multiple email addresses and share$")
	public void i_clicked_on_Share_icon_select_email_enter_multiple_email_addresses_and_share() throws Throwable {
		mainPage.shareRouteNav();
		mainPage.shareRouteByEmail("ravikumar.kunaparaju@os.uk,tester@os.uk");
	}
	
	@When("^I clicked on Share icon, select email, enter email address, update text and share$")
	public void i_clicked_on_Share_icon_select_email_enter_email_address_update_text_and_share() throws Throwable {	    
	    mainPage.shareRouteNav();
	    mainPage.shareRouteByEmail("ravikumar.kunaparaju@os.uk");	
	    mainPage.shareRouteEmailText("I am sharing this test route by automation script");
	}
	
	@When("^I clicked on Share icon, select facebook, looged into facebook and share$")
	public void i_clicked_on_Share_icon_select_facebook_looged_into_facebook_and_share() throws Throwable {
	    //mainPage.shareRouteByFacebook();
		//TODO
	}

	@Then("^application should show confirmation message and post route on facebook$")
	public void application_should_show_confirmation_message_and_post_route_on_facebook() throws Throwable {
		//mainPage.shareRouteConfirm();
		//TODO
	}


}
