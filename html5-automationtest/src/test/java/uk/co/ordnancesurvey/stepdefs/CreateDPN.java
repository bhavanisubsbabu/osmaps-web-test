package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import uk.co.ordnancesurvey.pagemodel.Html5Page;
import uk.co.ordnancesurvey.utils.*;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CreateDPN {

	Html5Page mainPage;
	private  WebDriver driver;
	ObjectRepository obj;
	
	public CreateDPN(SharedWebDriver driver){
		this.driver=driver;
		mainPage = PageFactory.initElements(driver, Html5Page.class);	
		obj = PageFactory.initElements(driver, ObjectRepository.class);
	}

	@When("^I select National Park Pathways from mapstack$")
	public void i_select_National_Park_Pathways_from_mapstack() throws Throwable {
		mainPage.openMapstack();
		System.out.print("I clicked mapstack button");
		mainPage.selectMapType(obj.nationalParkPathwaysMap);
	}

	@When("^I select create custom route from routes$")
	public void i_select_create_custom_route_from_routes() throws Throwable {
		mainPage.set_textBox(obj.searchBox, "New Forest");
		mainPage.hitEnterKey(obj.searchBox);
	}

	@When("^I zoom-in map till snap is enabled and plot a route$")
	public void i_zoom_in_map_till_snap_is_enabled() throws Throwable {
		mainPage.plot_newRoute();
    	
	}

	@Then("^app should auto route nearest pathways from the (\\d+) locations$")
	public void app_should_auto_route_nearest_pathways_from_the_locations(int arg1) throws Throwable {
		mainPage.save_route();
	}

}
