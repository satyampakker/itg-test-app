package dataProvider;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;


public class ConfigReader {

	private Properties properties;
	private final String propertyFilePath= "Config.properties";


public ConfigReader () {
	BufferedReader reader;
	try {
		reader = new BufferedReader(new FileReader(propertyFilePath));
		properties = new Properties();
		try {
			properties.load(reader);
			reader.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	} catch (FileNotFoundException e) {
		e.printStackTrace();
		throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
	}		
}


public String getLoginUrl() {

String loginUrl = properties.getProperty("loginUrl");
System.out.println(loginUrl);
if(loginUrl!= null) return loginUrl;
else throw new RuntimeException("url not specified in the Configuration.properties file.");
}

public String getAdminUser() {

String adminUser = properties.getProperty("adminUser");
if(adminUser!= null) return adminUser;
else throw new RuntimeException("user not specified in the Configuration.properties file.");
}


public String getAdminPass() {

String adminPass = properties.getProperty("adminPass");
if(adminPass!= null) return adminPass;
else throw new RuntimeException("user password not specified in the Configuration.properties file.");
}

public String getManagerUser() {

String managerUser = properties.getProperty("managerUser");
if(managerUser!= null) return managerUser;
else throw new RuntimeException("username not specified in the Configuration.properties file.");
}

public String getManagerPass() {

String managerPass = properties.getProperty("managerPass");
if(managerPass!= null) return managerPass;
else throw new RuntimeException("user password not specified in the Configuration.properties file");

}

public String getEmployeeUser() {

String employeeUser = properties.getProperty("employeeUser");
if(employeeUser!= null) return employeeUser;
else throw new RuntimeException("username not specified in the Configuration.properties file.");
}

public String getEmployeePass() {

String employeePass = properties.getProperty("employeePass");
if(employeePass!= null) return employeePass;
else throw new RuntimeException("user password not specified in the Configuration.properties file");

}

}



                

                                                                                                                                                                                                                             