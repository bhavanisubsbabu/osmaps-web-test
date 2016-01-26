package uk.co.ordnancesurvey.stepdefs;

import java.util.Hashtable;
import java.util.List;

import static org.junit.Assert.assertTrue;
import junit.framework.Assert;
//import junit.framework.Assert;
import net.sourceforge.htmlunit.corejs.javascript.ast.SwitchCase;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;
import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.AppProperties;
import uk.co.ordnancesurvey.utils.ObjectRepository;

public class MultiUserRegistration_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	String platform= AppProperties.get("platform");
	ObjectRepository obj = new ObjectRepository();

	public MultiUserRegistration_steps(SharedWebDriver driver){	
		this.driver=driver;
		mainPage = PageFactory.initElements(driver,Html5Page.class);
	}


	@Then("^user should be allow to create multiple accounts with \"([^\"]*)\", \"([^\"]*)\" \"([^\"]*)\"$")
	public void user_should_be_allow_to_create_multiple_accounts_with(String arg1, String arg2, String arg3) throws Throwable {
	    mainPage.multiUserRegistration(arg1,arg2,arg3);
	}
	
}
