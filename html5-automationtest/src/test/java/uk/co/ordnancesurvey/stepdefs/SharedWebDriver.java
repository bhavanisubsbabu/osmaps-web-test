package uk.co.ordnancesurvey.stepdefs;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import io.appium.java_client.AppiumDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.events.EventFiringWebDriver;

import io.appium.java_client.AppiumDriver;
import io.appium.java_client.android.AndroidDriver;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.remote.RemoteWebDriver;

import uk.co.ordnancesurvey.utils.AppProperties;

public class SharedWebDriver extends EventFiringWebDriver {
	//private static AndroidDriver driver1;
	private static WebDriver driver;
	//private static AppiumDriver mobdriver;
	static {
			
		
		try {
			// DefaultEnvironment env=new DefaultEnvironment();
			String browser = AppProperties.get("browser");
			String env = AppProperties.get("environment");
			String platform= AppProperties.get("platform");
		   if(platform.equalsIgnoreCase("Mobile")){
			   DesiredCapabilities capabilities = new DesiredCapabilities(); 
		        capabilities.setCapability("platformVersion", "4.3");
		        capabilities.setCapability("platformName","Android");
		        capabilities.setCapability("context","Auto-Webview");
		       // capabilities.setCapability("appActivity", ".ApiDemos");
		        capabilities.setCapability("deviceName", "5ea8582c");
		        capabilities.setCapability("app", "C:\\Users\\NKhan\\AppData\\Local\\Temp\\resigned-android-driver4184407910641574526.apk");
		        capabilities.setCapability("browserName", "chrome");
		        
		        //mobdriver = new AppiumDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
		        driver = new RemoteWebDriver(new URL("http://127.0.0.1:4723/wd/hub"), capabilities);
			   
			   
			   
		   }
		   else{
			// *Code to run tests in Remote machine -Selenium grid
			if (env.equalsIgnoreCase("Remote")) {
				if (browser.equalsIgnoreCase("firefox")) {
					DesiredCapabilities cap = DesiredCapabilities.firefox();
					cap.setBrowserName("firefox");
					cap.setPlatform(org.openqa.selenium.Platform.ANY);
					// driver = new RemoteWebDriver(new
					// URL("http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);
					driver = new RemoteWebDriver(new URL(
							"http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);

					// FirefoxProfile prof = new FirefoxProfile();
					// prof.setEnableNativeEvents(true);
					// driver = new FirefoxDriver(prof);
					driver.manage().window().maximize();
				} else if (browser.equalsIgnoreCase("chrome")) {
					DesiredCapabilities cap = DesiredCapabilities.chrome();
					cap.setBrowserName("chrome");
					cap.setPlatform(org.openqa.selenium.Platform.WINDOWS);
					System.out.println(System.getProperty("user.dir"));
					// System.setProperty("webdriver.chrome.driver","c://jar//chromedriver.exe");
					driver = new RemoteWebDriver(new URL(
							"http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);

					// driver = new ChromeDriver();
					driver.manage().window().maximize();
					Thread.sleep(10000);

				} else if (browser.equalsIgnoreCase("ie")) {
					DesiredCapabilities cap = DesiredCapabilities
							.internetExplorer();
					cap.setCapability("ignoreProtectedModeSettings", true);
					cap.setBrowserName("ie");

					cap.setPlatform(org.openqa.selenium.Platform.ANY);
					// driver = new RemoteWebDriver(new
					// URL("http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);
					driver = new RemoteWebDriver(new URL(
							"http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);
					driver.manage().window().maximize();

				}

				else if (browser.equalsIgnoreCase("safari")) {
					DesiredCapabilities cap = DesiredCapabilities.safari();
					cap.setBrowserName("safari");
					cap.setPlatform(org.openqa.selenium.Platform.WINDOWS);
					System.out.println(System.getProperty("user.dir"));
					// System.setProperty("webdriver.chrome.driver","c://jar//chromedriver.exe");
					driver = new RemoteWebDriver(new URL(
							"http://osvm944.ordsvy.gov.uk:4444/wd/hub"), cap);

					// driver = new ChromeDriver();
					driver.manage().window().maximize();

				}

			}

			// * To run tests in Local machine

			else {
				if (browser.equalsIgnoreCase("firefox")) {
					System.out.println("In the ie block");
					FirefoxProfile prof = new FirefoxProfile();
					prof.setEnableNativeEvents(true);
					driver = new FirefoxDriver(prof);
					driver.manage().window().maximize();
				} else if (browser.equalsIgnoreCase("chrome")) {

					System.setProperty("webdriver.chrome.driver",
							System.getProperty("user.dir")
									+ "/src/test/resources/chromedriver.exe");
					driver = new ChromeDriver();
					driver.manage().window().maximize();

				} else if (browser.equalsIgnoreCase("ie")) {

					System.setProperty("webdriver.ie.driver",
							
							System.getProperty("user.dir")
									+ "/src/test/resources/IEDriverServer.exe");
					driver = new InternetExplorerDriver();
					Thread.sleep(3000);
					driver.manage().window().maximize();
				}

			}
		}} catch (Exception e) {
			e.printStackTrace();
		}
		
		Runtime.getRuntime().addShutdownHook(new Thread() {
			@Override
			public void run() {
				try {
					driver.quit();
				} catch (Exception e) {
					System.out.println(e);
				}
			}

		});
	}
	
	public SharedWebDriver() {

		super(driver);
	}

}
