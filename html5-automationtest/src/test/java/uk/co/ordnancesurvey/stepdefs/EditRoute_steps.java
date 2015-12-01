package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.PendingException;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class EditRoute_steps {
	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public EditRoute_steps(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}
	
	@When("^I navigate to my routes to select a route for editing$")
	public void i_navigate_to_my_routes_to_select_a_route_for_editing() throws Throwable {
	    mainPage.navigateRoutesList();
	}

	@When("^I click on edit link, add way points and save$")
	public void i_click_on_edit_link_add_way_points_and_save() throws Throwable {
		mainPage.editroutewaypoints();
		mainPage.saveRoute();
	}

	@Then("^route is saved with updates$")
	public void route_is_saved_with_added_way_points() throws Throwable {
	    mainPage.confirmRouteSaved();
	}

	@When("^I click on edit link, delete way points and save$")
	public void i_click_on_edit_link_delete_way_points_and_save() throws Throwable {
	    mainPage.deleteWaypoint();
	    mainPage.saveRoute();
	}
	
	@When("^I click on edit link, add styling and save$")
	public void i_click_on_edit_link_add_styling_and_save() throws Throwable {
	    mainPage.routeStyle();
	    mainPage.saveRoute();
	}

	@When("^I click on edit link, change route type running and save$")
	public void i_click_on_edit_link_change_route_type_running_and_save() throws Throwable {
		mainPage.runRoute();
		mainPage.saveRoute();
	}
	

	@When("^I click on edit link, change route type cycling and save$")
	public void i_click_on_edit_link_change_route_type_cycling_and_save() throws Throwable {
		mainPage.cycleRoute();
		mainPage.saveRoute();
	}
	
	@When("^I click on edit link, change route type other and save$")
	public void i_click_on_edit_link_change_route_type_other_and_save() throws Throwable {
		mainPage.otherRoute();
		mainPage.saveRoute();
	}
	
	@When("^I click on edit link, edit waypoint name and description and save$")
	public void i_click_on_edit_link_edit_waypoint_name_and_description_and_save() throws Throwable {
		mainPage.editrouteNav();
		mainPage.addWayPoint("ravi", "automation testing");
	    mainPage.saveRoute();
	}
}
