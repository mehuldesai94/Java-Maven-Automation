package automation.stepdefinitionfiles;

import java.util.concurrent.TimeUnit;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.*;
import org.openqa.selenium.support.ui.Select;

public class registration {
	WebDriver driver = null;

	@Before
	public void setUp() {
		System.setProperty("webdriver.chrome.driver", "F:\\SENECA\\Software\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	}

	@After
	public void close() {
		driver.close();
	}

	// user is at registration page
	@Given("user is at registration page")
	public void goToLogin() {
		driver.get("http://automationpractice.com/index.php?controller=authentication&back=my-account");
	}

	// user enter emailaddress
	@When("user enter emailaddress (.*)")
	public void enterEmail(String emailaddress) {
		driver.findElement(By.xpath("//*[@id=\'email_create\']")).sendKeys(emailaddress);
	}

	// user click on create new account
	@When("user click on create new account")
	public void submitCreate() {
		driver.findElement(By.xpath("//*[@id='SubmitCreate']")).click();
	}

	// user enters firstname
	@When("user enters firstname (.*)")
	public void insertFirstName(String firstName) {

		driver.findElement(By.cssSelector("input[id='customer_firstname']")).sendKeys(firstName);
	}

	// user enters lastname
	@When("user enters lastname (.*)")
	public void insertLastName(String lastName) {
		driver.findElement(By.xpath("//*[@id=\'customer_lastname\']")).sendKeys(lastName);
	}

	// user enters password
	@When("user enters password (.*)")
	public void insertValidPassword(String password) {
		driver.findElement(By.xpath("//*[@id=\'passwd\']")).sendKeys(password);
	}

	// user enters address
	@When("user enters address (.*)")
	public void insertAddress(String address) {
		driver.findElement(By.xpath("//*[@id=\'address1\']")).sendKeys(address);
	}

	// user enters city
	@When("user enters city (.*)")
	public void insertCity(String city) {
		driver.findElement(By.xpath("//*[@id=\'city\']")).sendKeys(city);
	}

	// user enters zipcode
	@When("user enters zipcode (.*)")
	public void insertZipCode(String zipcode) {
		driver.findElement(By.xpath("//*[@id=\'postcode\']")).sendKeys(zipcode);
	}

	// user selects state
	@When("user selects state (.*)")
	public void selectState(String state) {
		Select stateSelect = new Select(driver.findElement(By.xpath("//*[@id=\'id_state\']")));
		stateSelect.selectByVisibleText(state);
	}

	// user enters mobile
	@When("user enters mobile (.*)")
	public void insertPhone(String phone) {
		driver.findElement(By.xpath("//*[@id=\'phone_mobile\']")).sendKeys(phone);
	}

	// click on registration
	@When("click on registration")
	public void clickRegister() {
		driver.findElement(By.xpath("//*[@id=\"submitAccount\"]")).click();
	}

	// registration fail
	@When("registration fail")
	public void checkRegistrationFails() {
		String error = driver.findElement(By.xpath("//*[@id='center_column']/div/p")).getText();
		Assert.assertEquals(error, "There are 6 errors");
	}

	// registration success
	@Then("registration success")
	public void checkRegistrationSuccess() {
		Assert.assertEquals("My account - My Store", driver.getTitle());
	}

}