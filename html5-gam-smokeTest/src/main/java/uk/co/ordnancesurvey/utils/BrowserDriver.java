package uk.co.ordnancesurvey.utils;

import java.util.logging.Logger;
import org.openqa.selenium.By;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.UnreachableBrowserException;

import uk.co.ordnancesurvey.steps.SubscriberTestSteps;

public class BrowserDriver {
	private static final Logger LOGGER = Logger.getLogger(SubscriberTestSteps.class.getName());
	private static WebDriver mDriver;
	
	public synchronized static WebDriver getCurrentDriver() {
		if (mDriver==null) {
			try {
	                	mDriver = new FirefoxDriver();
		        } finally{
		        	Runtime.getRuntime().addShutdownHook(
						new Thread(new BrowserCleanup()));
		        }
		}
		return mDriver;
	}

	private static class BrowserCleanup implements Runnable {
		public void run() {
			LOGGER.info("Closing the browser");
			close();
		}
	}

	public static void loadPage(String url){;
	LOGGER.info("Directing browser to:" + url);
	getCurrentDriver().get(url);
}
	
	public static void close() {
		try {
			getCurrentDriver().quit();
			mDriver = null;
			LOGGER.info("closing the browser");
		} catch (UnreachableBrowserException e) {
			LOGGER.info("cannot close browser: unreachable browser");
		}
	}

}
