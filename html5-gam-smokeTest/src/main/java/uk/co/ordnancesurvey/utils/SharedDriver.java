package uk.co.ordnancesurvey.utils;


import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.events.EventFiringWebDriver;



public class SharedDriver extends EventFiringWebDriver {
    public SharedDriver() {
    	
        super(new FirefoxDriver());
    }
    
}