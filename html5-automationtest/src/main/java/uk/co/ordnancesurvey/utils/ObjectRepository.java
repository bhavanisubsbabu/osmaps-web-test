package uk.co.ordnancesurvey.utils;

import static org.junit.Assert.assertTrue;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class ObjectRepository {
	
		 
	

	
	@FindBy(how = How.XPATH, using = ".//*[@id='Window_1_Btn_Mode_Route']")
	public WebElement routes;
	

	// public final String routes= ".//*[@id='Window_1_Btn_Mode_Route']";
	public final String groups = ".//*[@id='Window_1_Btn_Mode_Group']";
	public final String mapfeatures = ".//*[@id='main-top-bar-places']";
	// public final String MapFeatures=".//*[@id='Window_1_Btn_Mode_POI']";
	public final String mapStackButton="//*[@id='layer_menu']";
	
	
//Search box object
	public final String searchBox=".//*[@id='main-top-bar-search-input']";
	public final String searchBoxPopUpClose="//div[contains(@class,'Close_Btn')]/img[@src='bundles/osapp/images/close_window.png']";
	public final String SearchBoxPopUp="//div[contains(@class,'PopUp_Canvas')]";
	// Routes sub menu
	public final String planRoute = ".//*[@id='Window_1_Btn_Plan']";
	public final String createRoute = ".//*[@id='Window_1_Btn_Create']";

	@FindBy(how = How.XPATH, using = ".//*[@id='Window_1_Btn_Discover']")	
	public WebElement discoverRoute;
	
		

	// Register Page Objects
	
	public final String register="//div[@id='Window_1_RE_BTN']";	

	public final String  reg_firstName="//input[@id='registerFormName']";
	
	public final String  reg_lastName=".//*[@id='register-form-surname']";	

	public final String  reg_emailAddress=".//*[@id='register-form-email']";	
	
	public final String reg_password=".//*[@id='register-form-password']";	

	public final String  reg_confirmpassword=".//*[@id='register-form-password-repeat']";	
	
	public final String reg_nickName=".//*[@id='register-form-nickname']";	
	
	public final String reg_subButton=".//*[@id='register-form-register-button']";
	
	// Subscriber Page Objects

	
	
	// Login page objects

	public final String Settings = ".//*[@id='Window_1_SettingsText']";
	public final String settings_Login = ".//*[@id='SettingsLogin']";
	public final String login_email = ".//*[@id='login-form-email']";
	public final String login_email_address = "//input[@id='login-form-email']";
	public final String login_pwd = "//input[@id='login-form-password']";
	public final String login_button = "//div[contains(@class,'button center login-form-login-button margin-top-big')]";
	public final String close_login = "//div[contains(@class,'button-x')]";
	
	public final String loadPreferences = "//div[@class='Window_1_GlobalWait_Outer']";
	

	public final String ZoomIn = ".//*[@id='zoom-slider-plus']";
	public final String ZoomOut = ".//*[@id='zoom-slider-minus']";

	// Routes Tab Elements on the Web Page ******************
	public final String RoutesTab = ".//*[@id='main-top-bar-routes']";
	public final String Route_list=".//*[@id='discoveredRoutesList']/div[1]";
	
	
	public final String ab_Directionstab = ".//*[@id='MyRouteAB']";
	public final String ab_startLocation="//*[@id='routeABSearchInput0']";
	public final String ab_finishLocation="//*[@id='routeABSearchInput1']";
	public final String ab_getDirectionBttn="//div[@id='routeABGetBtn']";
	public final String ab_carIcon="//img[@id='routeABTypeDrive']";
	public final String ab_walkIcon="//img[@id='routeABTypeWalk']";
	public final String ab_resultPopup="//div[@class='AB_PopUp_Details']";

/*
 *  Elements for routes list navigation and manipulation
 *  @author Ravi kunaparaju	
 */
	
	public final String RoutesTab_MyRoutes = "//div[text()='My Routes']";
	public final String MyRoutes_routes = "//*[@id='myRouteListShow']";
	public final String routeNameDiv1 = "//div[@class='discoveredListName']";
	public final String routeEdit = "//div[@class='discoveredListEdit link']";
	public final String routeDelete = "//div[@class='discoveredListDelete link']";
	
	public final String busyElement="//div[@class='common-box-busy']";
// route popup elements

	public final String routePopup = "//div[@class='Basic_Style DiscoverRoute_PopUp']";
	public final String routeMoreInfo = "//span[@class='link'][text()='View route']";
	public final String routeViewroute = "//span[@class='link'][text()='More info']";
	public final String routeGetDirection = "//*[@id='directions-route-pin']";
	public final String routeDetailsSidePanel = "//div[@class='sidePaneTitle'][text()='Route Details']";
	public final String routeDirectionsSidePanel = "//div[@class='sidePaneTitle'][text()='Directions']";
	public final String savedRouteConfirm = "//div[@class='dialogText'][text()='Saved in My Routes']";
	public final String saveDialogDone = "//div[@class='Basic_Btn dialogButton dialogButtonAlt '][text()='Done']";
	public final String routeDetailName = "//*[@id='routeDetailName']";
	
// Elements for the Routes Tab -Create CustomRoute Trail
	
	public final String RoutesTab_CreateCustomRouteTrial = ".//*[@id='MyRouteCreate']";

// Updated save to click on tool bar save 	

	public final String CustomRoute_Save = ".//*[@id='create-route-save']";
	public final String CustomRoute_Cancel = ".//*[@id='createRouteDelete']";
	public final String CustomRoute_Undo = ".//*[@id='createRouteUndo']";
	public final String CustomrRoute_Edit="//*[contains(text(),'Edit')]";
											
	
	public final String CustomRoute_RouteName = ".//*[@id='saveRouteNameInput']";
	public final String CustomRoute_RouteNotes = ".//*[@id='saveRouteNoteInput']";
	public final String CustomRoute_RouteSave = ".//*[@id='saveRouteBtn']";
	public final String CustomRoute_Type_Walking = ".//*[@id='btn_activity_walking']";
	public final String CustomRoute_Type_Running = ".//*[@id='btn_activity_running']";
	public final String CustomRoute_Type_Cycling = ".//*[@id='btn_activity_cycling']";
	public final String CustomRoute_Type_Other = ".//*[@id='btn_activity_other']";
	public final String CustomerRoute_RadioBtn_View_OnlyMe = ".//*[@id='btn_view_me']";
	public final String CustomerRoute_RadioBtn_View_Everyone = ".//*[@id='btn_view_everyone']";
	public final String delete_routeDlgButton=".Basic_Btn.dialogButton";
    public final String delete_OkButton=".Basic_Btn.dialogButton";
	// Elements for Routes Tab Discover Route:
	public final String RoutesTab_DiscoverRoutes = ".//*[@id='MyRouteDiscover']";
	
	// Directions Tab
	
	public final String DirectionsTab=".//*[@id='main-top-bar-directions']";
	
	public final String DiscoverRoutes_routlist = ".//*[@id='discoveredRoutesList']/div";
	public final String DiscoverRoutes_routeType_Run = ".//*[@id='discSelectRouteTypeRun']";
	public final String DiscoverRoutes_routeType_Walk = ".//*[@id='discSelectRouteTypeWalk']";
	public final String DiscoverRoutes_routeType_Cycle = ".//*[@id='discSelectRouteTypeCycle']";
	public final String DiscoverRoutes_routeType_Other = "/html/body/div[2]/div[2]/div[15]/div[1]/div[4]/div/div[1]/div[1]/div[5]";
	public final String DiscoverRoutes_routeType_All = ".//*[@id='discSelectRouteTypeAll']";
	public final String DiscoverRoutes_routeFiler_Distance_List = ".//*[@id='discSelectDistance']/option";
	public final String DiscoverRoutes_route_List_FirstRoute = ".//*[@id='discoveredRoutesList']/div[1]/div[1]/div[2]";
//@Author Ravi Kunaparaju, updated xpath
	public final String DiscoverRoutes_route_List_FirstRoute_ViewLink = "./html/body/div[2]/div[2]/div[17]/div[1]/div[4]/div/div[1]/div[4]/div[1]/div[2]";
	public final String DiscoverRoutes_route_POI_RouteName = ".//*[@id='discPopupContent']/div[2]/div/b";

	
	/*
	 * 	@Author Ravi Kunaparaju
	 *  Updated map stack elements to select map type
	 */
	
	public final String standardMap = "//*[@id='Window_1_Btn_ZoomMap']";
	public final String standardAndLeisureMap = "//*[@id='Window_1_Btn_Leisure50k']";
	public final String nationalParkPathwaysMap="//*[@id='Window_1_Btn_NationalParks']";
	public final String AerialMap="//*[@id='Window_1_Btn_BingAerial']";
	
	 
 	//Elements for POI

	public final String poi_CategoryList = ".//div[contains(@class,'POI_Category_Parent')]/div[1]";
	public final String poi_Attractions = "//div[contains(@class,'POI_Category_Child_Name')][text()='Castles and historic houses']";
	public final String poi_AttractionsSlide = ".//*[@class='POI_Category_Parent'][2]/div/img[2]";
	public final String poi_CastlesAndAttractions = "//div[contains(@class,'POI_Category_Child_Name')][text()='Castles and historic houses']";
	public final String poi_Closebutton = ".//*[@id='Window_1_Btn_Mode_POI']";

	public final String poi_window = ".//*[@id='Window_1_Btn_Mode_POI' and @class='Basic_Btn Basic_Btn_Selected']/div";
	public final String poi_Information_Window = ".//*[@id='Window_1_Content']/div[11]/div[1]/div/div[3]";
	// Route list window Objects
	
	//Star Rating object
	
	public final String star_rating_pop_up = ".//*[@id='discPopupContent']/div[1]";
	public final String star_rating_discover_routes = ".//*[@id='discoveredRoutesList']/div[1]/div[1]/div[1]";
	
	/*
	 * @Ravi Kunaparaju
	 * Star Ratings  
	 */
	public final String star_ratings_discover_routes = "/html/body/div[2]/div[2]/div[15]/div[1]/div[4]/div/div[1]/div/div[4]/div/div[1]/div[1]/div[1]/div[1]";
	public final String user_count_discover_routes = "/html/body/div[2]/div[2]/div[15]/div[1]/div[4]/div/div[1]/div/div[4]/div/div[1]/div[1]/div[1]/div[2]";
	public final String route_popup_moreInfo = "/html/body/div[2]/div[2]/div[16]/div/div[4]/span[1]";
	
	
	// Turn on Live Map
	
	public final String Live_Map = ".//*[@id='liveMapSlider']";
	
	//Turn on weather
	
	public final String Turn_On_Weather = ".//*[@id='Window_1_Content']/div[15]/div/div[1]/div[3]/div[3]/div";
	
	//Select forecast days
	
	public final String Select_Weather_Forecast_day_1 = ".//*[@id='day1Btn']";
	public final String Select_Weather_Forecast_day_2 = ".//*[@id='day2Btn']";
	public final String Select_Weather_Forecast_day_3 = ".//*[@id='day3Btn']";
	public final String Select_Weather_Forecast_day_4 = ".//*[@id='day4Btn']";
	
	//Close Weather panel
	
	public final String Close_Weather_Panel = "//div[contains(@class,'Basic_Btn Allow_Select sidePaneClose')][text()='Close']";
	
	//Attraction
	public final String Attractions = "//div[@class='POI_Parent_Name'][text()='Attractions']";
	//Adventure & Theme Parks
	public final String Adventure_Theme_Parks = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[1]";
	//Brewery
	public final String Brewery_Distillery_Vineyard = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[2]/div";
	//Castles
	public final String Castles_And_Historic_Houses = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[3]/div";
	//Countryside
	public final String Countryside = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[4]/div";
	//History
	public final String History = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[5]/div";
	//Museums
	public final String Museums = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[6]/div";
	//Parks & Gardens
	public final String Parks_And_Gardens= ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[7]/div";
	//Shopping
	public final String Shopping = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[8]/div";
	//Tours
	public final String Tours = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[4]/div[3]/div[9]/div";
	//Eating & Drinking
	public final String Eating_And_Drinking = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[2]/img[1]";
	//Picnic Site
	public final String Picnic_Site = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[3]/div[1]/div";
	//Pub
	public final String Pub = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[3]/div[2]/div";
	//Restaurant
	public final String Restuarant = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[3]/div[3]/div";
	//Tea/Coffee
	public final String Coffee_Shop = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[5]/div[3]/div[4]/div";
	
	
	//Close Map Features Panel
	
	public final String Close_Map_Features_Panel = ".//*[@id='Window_1_Content']/div[13]/div/div[1]/div[1]";
	
	//ROUTES TAB
	public final String Routes_Tab = ".//*[@id='main-top-bar-routes']";	
	//Close
	public final String Routes_Tab_Close_Button = ".//*[@id='Window_1_Content']/div[15]/div/div[1]/div[1]";
	//Discover Routes
	public final String Discover_Routes = ".//*[@id='MyRouteDiscover']";
	//Create Custom Trail
	public final String Create_Custom_Trail = ".//*[@id='MyRouteCreate']";
	//My Routes
	public final String My_Routes = ".//*[@id='MyRouteMy']";
	/*
	 * @Author Ravi Kunaparaju
	 * Adding element Directions to fix ABDirections test failures
	 * 
	 * Directions
	 */
	
	public final String Directions = ".//*[@id='main-top-bar-directions']";
	
	//Get Directions
	public final String Get_Directions = ".//*[@id='MyRouteAB']";//*[@id="main-top-bar-directions"];
	//directions results for to field
	public final String dirLocSearch="//div[@class='GazTown']";
	//Import GPX 	
	public final String ImportGPX=".//*[@id='MyRouteImport']";
	
	//Close Discover Routes Panel
	public final String Close_Discover_Routes_Panel = ".//*[@id='Window_1_Content']/div[15]/div[1]/div[1]/div[1]";
	
	//Close Create Custom Trail Panel
	public final String Close_Create_Custom_Trail_Panel = ".//*[@id='Window_1_Content']/div[16]/div[1]/div[1]/div[1]";
	
	//Close My Routes Panel
	public final String Close_My_Routes_Panel = ".//*[@id='Window_1_Content']/div[15]/div[1]/div[1]/div[1]";
	
	//Close A-B Panel
	public final String Close_AB_Panel = ".//*[@id='Window_1_Content']/div[16]/div[1]/div[1]/div[1]";
	
	//Close Get Directions Panel
	public final String Close_Get_Directions_Panel = ".//*[@id='Window_1_Content']/div[15]/div/div[1]/div[1]";
	
	//Sign up for paid subscription via upsell message
	
	//Close Get Directions Panel
	public final String Sign_up_for_paid_subscription = ".//*[@id='Window_1_Login_Header']/div[4]";
	/* Adding new objects for extending tests
	 * @Author Ravi Kunaparaju 
	 * Added snap for DPN 
	 */
	public final String SnapActive = ".//div[contains(@class,'tooltipstered active')][text()='Snap']";
	public final String Snapdisabled = ".//div[contains(@class,'tooltipstered')][text()='Snap']" ;	
	/*
	 * POI castles london location assert element cluster image for castles
	 */
	public final String POICastelsLondon = "/html/body/div[2]/div[2]/div[1]/div/div[1]/div[8]/svg/g[3]/g[1]/image[17]";	
	/*
	 *  POI
	 */
	public final String POI = "//*[starts-with(@id,'OpenLayers_Geometry_Point_')]";
	/*
	 * POI window
	 */
	public final String POIMoreInfo = "//*[@id='more-info-dropped-pin']";
	public final String POIGetMeHere = "//*[@id='directions-dropped-pin']";
	public final String POIVerification = "//*[@id='popup-pin-panel-name']";
	/*
	 * POI Panel
	 */
	public final String POIpin = "//*[contains(@class,'pin-to-map-icon')]";
	public final String POIunpin = "//*[contains(@class,'unpin-from-map-icon')]";	
	/*
	 * Print
	 */
	public final String print_toolbar = "//*[@id='create-route-print']";
	public final String preview_window = "//*[@id='print-preview-map-disable-interaction']";
	public final String preview_window_hide = "//*[@id='print-preview-toggle']";
	public final String preview_window_show = "//div[contains(@class,'link active')]";
	public final String preview_button = "//div[contains(@class,'printSelectorButton Basic_Btn')][text()='Preview']";
	public final String preview_page_A4_assert = "//div[contains(@class,'PrintPageA4')]";
	public final String preview_page_A3_assert = "//div[contains(@class,'PrintPageA3')]";
	public final String back_to_map = "//*[@id='previewCancelButton']";
	public final String A4Portrait = "//div[@class='printSelectorOptionRadio'][text()='A4 portrait']";
	public final String A3Portrait = "//div[@class='printSelectorOptionRadio'][text()='A3 portrait']";
	public final String A4Landscape = "//div[@class='printSelectorOptionRadio'][text()='A4 landscape']";
	public final String A3Landscape = "//div[@class='printSelectorOptionRadio'][text()='A3 landscape']";
	
	/*
	 * waypoint images & Toolbar
	 */	
	public final String waypointImage = "//image[starts-with(@id,'OpenLayers_Geometry_Point_')]";
	public final String delete = "//*[@id='create-route-delete']";
	public final String undo = "//*[@id='create-route-style']";
	public final String gridRef = "//*[@id='create-route-gridRef']";
	public final String expand = "//*[@id='create-route-expand']";
	public final String cancel = "//*[@id='create-route-cancel']";
	public final String style = "//*[@id='create-route-style']";		
	
	/*
	 * Route edit side panel link
	 */
	public final String editSideLink="//div[@class='sidePaneAction link'][text()='Edit']";
	/*
	 * stylying elements. 
	 */	
	public final String routeStyleBlack = "//div[@class='ng-scope'][0]";
	public final String routeStylePurple = "//div[@class='ng-scope'][1]";
	public final String routeStyleRed = "//div[@class='ng-scope'][2]";
	public final String routeStyleGreen = "//div[@class='ng-scope'][3]";
	public final String routeStyleYellow = "$('div[class=ng-scope]')[4]";
	public final String routeStyleBlue = "//div[@class='ng-scope'][5]";
	public final String routeStyleThickness1 = "//div[@class='ng-scope'][6]";
	public final String routeStyleThickness2 = "$('div[class=ng-scope]')[7]";
	public final String routeStyleThickness3 = "//div[@class='ng-scope'][8]";
	public final String routeStyleThickness4 = "//div[@class='ng-scope'][9]";
	public final String routeStyleTransper20 = "//span[@class='ui-slider-pip ui-slider-pip-1']";
	public final String routeStyleTransper20Selected = "//span[@class='ui-slider-pip ui-slider-pip-1 ui-slider-pip-selected']";
	public final String routeStyleTransper40 = "//span[@class='ui-slider-pip ui-slider-pip-2']";
	public final String routeStyleTransper60 = "//span[@class='ui-slider-pip ui-slider-pip-3']";
	public final String routeStyleTransper80 = "//span[@class='ui-slider-pip ui-slider-pip-4']";
	
	/*
	 * Interface tour
	 */
	public final String InterfaceTourClose = "//div[@class='bbutton-close']";
	/*
	 * Waypoint name and description
	 */
	public final String selectWaypoint = "//div[@id='createRoutePointTitle0']";
	public final String editWaypoint = "//*[@id='createRoutePointEdit0']";
	public final String waypointName = "//*[@id='createRoutePointInputName0']";
	public final String waypointDescription = "//*[@id='createRoutePointInputNote0']";
	public final String saveWaypoint = "//div[@class='link'][text()='Save']";
	
	/*
	 * Share route
	 */
	public final String shareRoute = "//div[@id='routeDetailShare']";
	public final String shareEmailButton = "//div[@id='email-share-button']";
	public final String shareEmailAddr = "//*[@id='shared-email-to']";
	public final String shareEmailMessage = "//*[@id='shared-email-message']";
	public final String shareEmailSend = "//*[@id='share-email-form-submit']";
	public final String shareEmailConfirm = "//div[@class='dialogText'][text()='Share complete!']";
	public final String ShareEmailConfirmOkButton = "//div[@class='Basic_Btn dialogButton '][text()='Ok']";
	
	/*
	 * 
	 */
	public final String facebookShare = "//*[@id='facebook-share-button']";
	public final String facebookWindow = "//*[@id='homelink']";
	public final String facebookEmail = "//*[@id='email']";
	public final String facebookPassword = "//*[@id='pass']";
	public final String facebookLoginButton = "//*[@id='u_0_2']"; 
	public final String facebookShareNotes = "//*[@id='feedform_user_message']";
	public final String facebookShareSubmit = "//*[@id='u_0_2']";
	
	
	/*
	 * forgot password
	 */
	public final String forgotPassword = "//div[@class='margin-top-medium center']";
	
	/*
	 * import route
	 */
	public final String importGPX = "//div[@id='MyRouteImport']"; 
	public final String browseFile = "//*[@id='import-gpx-file']";
	public final String importSave = "//div[@id='import-route-form-save']";
	public final String confirmImportSuccess = "//span[@class='header'][text()='Success.']";
	public final String editImportRouteButton = "//*[@id='route-import-edit-route-details-button']";
	/*
	 * Export route
	 */
	public final String exportGPX = "//*[@id='routeDetailExportRoute']";
	
	// #################################### WhiteLabel + DofE objects ####################################
	
		public final String user_logged = ".//*[@id='main-top-bar-user']";
		public final String routeType = ".//*[@id='routeABType']";
		public final String burgerMenu = ".//*[@id='main-top-bar-burger-menu']";
		public final String burgerDirections = ".//*[@id='BurgerRouteAB']";
		public final String burgerRoutes = ".//*[@id='BurgerRouteMy']";
		public final String discoveredRoutes = ".//*[@id='discover-route-panel-routes']/div[1]/div[2]";
		public final String showMyRoutes = ".//*[@id='myRouteListShow']";
		public final String myRoute = ".//*[@id='myRouteList']/div/div/div[1]/div[2]";
		public final String openHelp = ".//*[@id='create-route-help']";
		public final String helpRoutesMenuTopic = "html/body/div[5]/div[1]/div/div[1]/div[3]/span[1]";
		public final String helpCreateRouteTopic = "html/body/div[5]/div[1]/div/div[1]/div[3]/span[2]";
		public final String helpDiscoverRouteTopic = "html/body/div[5]/div[1]/div/div[1]/div[3]/span[3]";
		public final String helpPlacesMenuTopic = "html/body/div[5]/div[1]/div/div[1]/div[3]/span[4]";
		public final String helpDirectionsMenuTopic = "html/body/div[5]/div[1]/div/div[1]/div[3]/span[5]";
		public final String findMyLocationButton = ".//*[@id='Window_1_CurrLocation']";
		public final String viewRoute = ".//*[@id='Window_1_Content']/div[17]/div/div[4]/span[1]";
	
}
