package automation.stepdefinitionfiles;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver; 
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.*;

public class authentication {
WebDriver driver = null;
	
	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "F:\\SENECA\\Software\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}
	
	@After
	public void close() {
		driver.quit();
	}
	
	//user is at login page
	@Given("user is at login page")
	public void goToLogin() {
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	}
	
	//user enters emailaddress
	@When("user enters emailaddress (.*)")
	public void insertEmail(String emailaddress) {
		driver.findElement(By.cssSelector("input[id='email']")).sendKeys(emailaddress);
	}
	
	//user enters password 
	@And ("user enters new password (.*)")
	public void insertPassword(String password) {
		driver.findElement(By.cssSelector("input[id='passwd']")).sendKeys(password);
	}
	
	
	//sign in click
	@And("sign in click")
	public void clicksSignIn() {
		driver.findElement(By.cssSelector("button[id='SubmitLogin']")).click();
	}
	
	
	//message displayed Login Failed
	@Then("message displayed Login Failed")
	public void displayError() {
		String error = driver.findElement(By.xpath("//*[@id=\'center_column\']/div[1]/p")).getText();
		Assert.assertEquals("There is 1 error", error);
	}
	
	//redirecte user to My Account
	@Then ("redirecte user to My Account")
	public void checkTitle() {
		Assert.assertTrue(driver.getTitle().equalsIgnoreCase("My account - My Store"));
	}
	
	//submits create an account
	@And ("submits create an account")
	public void submitCreateAccount() {
		driver.findElement(By.cssSelector("button[id='SubmitCreate']")).click();
	}
	
	//message displayed Registration Failed
	@Then ("message displayed Registration Failed")
	public void checkErrorMessageRegistration() {
		String error = driver.findElement(By.xpath("//*[@id=\'create_account_error\']/ol/li")).getText();
		Assert.assertEquals("Invalid email address.", error);
	}
	
	
	
	
	@Then ("message displayed Registration Failed existing email")
	public void messageDisplayedRegitrationFailedExistingEmail() {
		String actual = driver.findElement(By.xpath("//*[@id=\'create_account_error\']/ol/li")).getText();
		Assert.assertTrue(actual.length() > 0);
	}
}