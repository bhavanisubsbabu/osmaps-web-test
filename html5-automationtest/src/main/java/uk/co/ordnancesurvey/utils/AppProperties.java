package uk.co.ordnancesurvey.utils;

import java.io.FileInputStream;
import java.util.Properties;

public class AppProperties {
	 
    private static Properties properties = null;
 
    public static String testclasspath="target/test-classes/";
 
    public static Properties getProperties(){

    	if(properties == null){     	
	        // Check whether the property file location is specified in environment variable "properties"
	        // otherwise default 
	        String propertyFile = System.getProperty("properties", System.getProperty("user.dir")+"/src/test/resources/TestConfig-ite.properties");
	
	        try {
	        	System.out.println("Loading properties from file " + propertyFile);
	            properties=new Properties();
	            properties.load(new FileInputStream(propertyFile)); 
	        } catch (Throwable e) {
	            e.printStackTrace();
	        } // try
    	} // if
        	
        return properties;
    }
 
 
    public static String get(String propertyKey){
        if (propertyKey.equalsIgnoreCase("browser") ||
               propertyKey.equalsIgnoreCase("env")){
            
            if (System.getProperty(propertyKey) != null){
                return  System.getProperty(propertyKey);
            }
        }
 
        return  getProperties().getProperty(propertyKey);
    }
 
}
