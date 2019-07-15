package Developer;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By; 
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.*;

public class items {
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
	
	@Given("user is at the store page")
	public void goToLogin() {
		driver.get("http://automationpractice.com/index.php");
	}

	@Then ("hover over on item and add item to cart")
	public void hover() {
		WebElement element = driver.findElement(By.cssSelector("img[title='Faded Short Sleeve T-shirts']"));
		Actions action = new Actions(driver);
		action.moveToElement(element,1, 1).build().perform();
		driver.findElement(By.xpath("//*[@id=\'homefeatured\']/li[1]/div/div[2]/div[2]/a[1]")).click();
		Assert.assertNotNull(driver.findElement(By.cssSelector("i[class='icon-ok']")));
	}
	@Then("Hover over on “Women” nav bar and click on “Summer Dresses” from the sub-menu")
	public void hover2() {
		WebElement element = driver.findElement(By.cssSelector("a[title='Women']"));
		Actions action = new Actions(driver);
		action.moveToElement(element, 1, 1).build().perform();
		driver.findElement(By.cssSelector("a[title='Summer Dresses']")).click();
		Assert.assertTrue(driver.getTitle().equals("Summer Dresses - My Store"));
	}

	

}
