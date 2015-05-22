package uk.co.ordnancesurvey.utils;

import java.io.FileInputStream;
import java.util.Properties;

public class AppProperties {
	 
    private static Properties properties = null;
 
    public static String testclasspath="target/test-classes/";
 
    public static Properties getProperties(){
        if(properties ==null){
            try {
                properties=new Properties();
                String propertyFile = System.getProperty("properties","//home//nasirkhan//workspace//html5-gam-smokeTest//src//test//resources//TestConfig.properties");
               System.out.println(propertyFile);
                properties.load(new FileInputStream(propertyFile));
 
                for(String key : properties.stringPropertyNames()) {
                    String value = properties.getProperty(key);
                 //   System.out.println(key +":" + value);
                    //System.out.println(key + " => " + value);
                }
 
            } catch (Throwable e) {
                e.printStackTrace();
            }
        }
        return properties;
    }
 
 
    public static String get(String propertyKey){
        if (propertyKey.equalsIgnoreCase("browser") ||
                propertyKey.equalsIgnoreCase("brand") ||
                propertyKey.equalsIgnoreCase("env")){
            
            if (System.getProperty(propertyKey) != null){
                return  System.getProperty(propertyKey);
            }
        }
 
        return  getProperties().getProperty(propertyKey);
    }
 
}
