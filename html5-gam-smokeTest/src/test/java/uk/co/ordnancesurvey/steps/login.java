package uk.co.ordnancesurvey.steps;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.ordnancesurvey.pages.LoginPageObj;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.SharedDriver;

public class login {
	private final WebDriver driver;
	LoginPageObj login;
	public login(SharedDriver driver)
	{
		this.driver=driver;
		login = PageFactory.initElements(driver,
	            LoginPageObj.class);

	}
	
	
    
	@Given("^I am Login page$")
	public void i_am_Login_page() throws Throwable {
		
	    // Write code here that turns the phrase above into concrete actions
		
	   // throw new PendingException();
	}
	
	@When("^I login as registered user$")
	public void i_login_as_registered_user() throws Throwable {
		login.open_login_window();
		login.enter_emailAddress(AppProperties.get("regUname"));
		login.enter_password(AppProperties.get("regPwd"));
		login.submitLogin();
		
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

	
	@When("^I login as subscriber user$")
	public void i_login_as_subscriber_user() throws Throwable {
		login.open_login_window();
		login.enter_emailAddress(AppProperties.get("subUname"));
		login.enter_password(AppProperties.get("subPwd"));
		login.submitLogin();
	}

	@Given("^I am on getamap app as guest user$")
	public void i_am_on_getamap_app_as_guest_user() throws Throwable {
		login.GuestUser();
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}
	
	

	@When("^I ente user name and password$")
	public void i_ente_user_name_and_password() throws Throwable {
		login.enter_emailAddress("GAMRR_test_subscribed@ordnancesurvey.co.uk");
		login.enter_password("Pa55w0rd");
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}
	
	
	@Then("^I should be able to login\\.$")
	public void i_should_be_able_to_login() throws Throwable {
		login.submitLogin();
	    // Write code here that turns the phrase above into concrete actions
	   // throw new PendingException();
	}

	
	

}
