package gradle.cucumber;

import java.util.*;

import static org.junit.Assert.fail;



import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


import cucumber_resources.Cuke_Resources;



public class Step_Definitions {
	
	Cuke_Resources resource = null;
	ChromeDriver driver = null;
	WebDriverWait wait = null;
	
	String userAccountToUse = null;

	
	@Before public void setUp() throws Exception
	{
		resource = new Cuke_Resources();
		driver = resource.getChromedriver();	
		wait = new WebDriverWait(driver, 30);
		
		
	}
	
	@After public void tearDown(Scenario scenario) throws Exception
	{
		resource.takeScreenshot(scenario.getName() + "_"+scenario.getStatus(), driver);
		driver.quit();
	}
	
	
	/***************** test steps for user log in **********************/
	
	@Given("^I open the chrome browser and the webapp$")
	public void i_open_the_chrome_browser_and_the_webapp() throws Throwable{
		Thread.sleep(5000);
		String baseUrl = System.getProperty("loginURL");
		driver.get(baseUrl);
		driver.manage().window().maximize();	
	}

	@Given("I input {string} Credentials")
	public void i_input_Credentials(String role) throws Throwable {
		
		String username = "", password = "";

		
		if (role.equalsIgnoreCase("Admin")) {
			userAccountToUse = System.getProperty("adminUsername");
			
			username = System.getProperty("adminUsername");
			password = System.getProperty("adminPassword");
		}
		else if (role.equalsIgnoreCase("Manager")) {
			userAccountToUse = System.getProperty("analystUsername");
			username = System.getProperty("analystUsername");
			password = System.getProperty("analystPassword");
		}
		else if (role.equalsIgnoreCase("Employee")) {
			userAccountToUse = System.getProperty("employeeUsername");
			username = System.getProperty("employeeUsername");
			password = System.getProperty("analystPassword");
			}
		else {
			fail("invalid role");
		}
		driver.findElement(By.id("username")).clear();
		driver.findElement(By.id("username")).sendKeys(username);
		driver.findElement(By.id("password-sign-in")).clear();
		driver.findElement(By.id("password-sign-in")).sendKeys(password);
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	   
	}

	@When("^I click the sign-in button$")
	public void i_click_the_Sign_in_button() throws Throwable {
		Thread.sleep(3000);
		  driver.findElementById("submit").click();
		  
	}

	@Then("^I will successfully be logged in$")
	public void i_will_successfully_be_logged_in() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//span[contains(text(),'Log Out')]"));
	}

	
	/******************User is able to reset password*********************/
	@When ("^I click the forgot password link$")
	public void I_click_the_forgot_password_link() throws Throwable{
		driver.findElementById("modify1").click();
	}
	
	@Then ("^I am shown the Forgot password page$")
	public void I_am_shown_the_Forgot_password_page() throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(), 'Forgot Password')]"));
	}
	
	@Then ("^I am able to enter my username into the textbox$")
	public void I_am_able_to_enter_my_username_into_the_textbox() throws Throwable {
		String adminUser = System.getProperty("adminUsername");
		driver.findElementById("username").sendKeys(adminUser);
		Thread.sleep(3000);
		//driver.findElementById("setTemp").click();
	}
	

	/*************Steps for user log off ***********************/
	
	@Given("^I am logged onto the site$")
	public void i_am_logged_onto_the_site() throws Throwable{
		driver.findElement(By.xpath("//span[contains(text(),'Log Out')]"));
		Thread.sleep(2000);
	}
	
	@Given("^I click on the movie tab$")
	public void I_click_on_the_movie_tab() throws Throwable{
		driver.findElement(By.xpath("//*[@id=\"ui-tabpanel-1-label\"]")).click(); 
		Thread.sleep(3000);
	}

	@When("^I click on the log off button$")
	public void i_click_on_the_button() throws Throwable {
	 driver.findElement(By.xpath("//span[contains(text(),'Log Out')]")).click();
	 
	}

	@Then("^I am will be successfully logged out$")
	public void i_am_will_be_successfully_logged_out() throws Throwable {
		driver.findElementById("submit");
	}

	@Then("^i will be sent back to the sign in screen$")
	public void i_will_be_sent_back_to_the_sign_in_screen() throws Throwable {
		driver.findElementByXPath("//span[contains(text(),'Sign in')]");
		Thread.sleep(3000);
	}	
}
