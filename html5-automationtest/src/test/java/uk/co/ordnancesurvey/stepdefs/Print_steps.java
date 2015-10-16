package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Print_steps {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public Print_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}


	// Steps for printing map
		
		@When("^I select print option from tool bar$")
		public void i_select_print_option_from_tool_bar() throws Throwable {
			mainPage.searchMap("London");
		    mainPage.selectPrint();
		}

		@When("^I click on Preview$")
		public void i_click_on_Preview() throws Throwable {
		    mainPage.previewPrint();
		}

		@Then("^I should see preview of the map$")
		public void i_should_see_preview_of_the_map() throws Throwable {
		    mainPage.assert_A4print();
		}

	// Hide and show print preview window
		
		@When("^click on hide link on preview window$")
		public void click_on_hide_link_on_preview_window() throws Throwable {
		    mainPage.hidePrintPreview();
		}

		@Then("^window should be minimised with show link$")
		public void window_should_be_minimised_with_show_link() throws Throwable {
		    mainPage.assert_preview_hide();
		}
		
		@When("^I click on show link$")
		public void i_click_on_show_link() throws Throwable {
		    mainPage.showPrintPreview();
		}

		@Then("^window should be displayed$")
		public void window_should_be_displayed() throws Throwable {
		    mainPage.assert_preview_visible();
		}
	// Print A3 maps
		
		@When("^I select options A(\\d+), portrait and I click on Preview$")
		public void i_select_options_A_portrait_and_I_click_on_Preview(int arg1) throws Throwable {
		    mainPage.selectA3Portrait();
		    mainPage.previewPrint();
		}

		@Then("^I should see preview of the map in A(\\d+) portrait$")
		public void i_should_see_preview_of_the_map_in_A_portrait(int arg1) throws Throwable {
		    mainPage.assert_A3print();
		}

	// Steps for printing a route 
		
		@When("^I navigate to My Routes$")
		public void i_navigate_to_My_Routes() throws Throwable {
			mainPage.navigateRoutesList();	   
		}

		@When("^I select a route in edit mode$")
		public void i_select_a_route_in_edit_mode() throws Throwable {
		   mainPage.selectRouteDetails();
		}

		@When("^I select print preview$")
		public void i_select_print_preview() throws Throwable {
			mainPage.selectPrint();
			mainPage.previewPrint();
		}

		@Then("^I should see route preview$")
		public void i_should_see_route_preview() throws Throwable {
		    mainPage.assert_A4print();
		}

}
