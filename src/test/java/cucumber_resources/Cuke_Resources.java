package cucumber_resources;
import org.openqa.selenium.OutputType;
import java.io.File;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.apache.commons.io.FileUtils;



public class Cuke_Resources {
	public ChromeDriver getChromedriver() {
		ChromeDriver driver;
		ChromeOptions options = new ChromeOptions();
		
		
		/* linux settings 
		options.setBinary("/usr/bin/google-chrome-stable");
		options.addArguments("--headless", "--disable-gpu", "--window-size=1920,1080", "--no-sandbox");
		System.setProperty("webdriver.chrome.driver", "/var/lib/jenkins/chromedriver");*/
		  
		
		// headless chrome settings windows 
		options.setBinary("C://Program Files (x86)/Google/Chrome/Application/chrome.exe");
		// options.addArguments("--headless", "--window-size=1920,1080");
		System.setProperty("webdriver.chrome.driver", "C://Users/trayemo/Documents/Selenium-cucumber/Webdrivers/driver/chromedriver.exe");
		
		
		driver = new ChromeDriver(options);
	    driver.manage().window().maximize();
		return driver;
}
	public void takeScreenshot(String snapName, WebDriver driver) throws Exception {
		File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		FileUtils.copyFile(scrFile, new File("build/reports/" + snapName + ".png"));
	}

}


