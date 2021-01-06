package steps;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class scenariosteps {
	WebDriver driver;

	@Before
	public void initiate_browser() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "\\src\\main\\java\\source\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@After
	public void Close_browser() {
		driver.quit();
	}

	@Given("^User is on Home Page$")
	public void user_is_on_Home_Page() {

		driver.get("https://www.mycontactform.com/samples/basiccontact.php");
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

	}

	@When("^Check Title of Home Page$")
	public void check_Title_of_Home_Page() {
		String title = driver.getTitle();
		Assert.assertEquals("Basic Contact Form - myContactForm.com", title);
	}

	@Then("^Click the Signup Button$")
	public void click_the_Signup_Button() {
		/*
		 * WebElement signinBtn =
		 * driver.findElement(By.xpath("//a[contains(text(),'Free Account Sign Up!')]"))
		 * ; JavascriptExecutor js = (JavascriptExecutor) driver;
		 * js.executeScript("arguments[0].click();", signinBtn);
		 */
		driver.findElement(By.xpath("//a[contains(text(),'Free Account Sign Up!')]")).click();

	}

	@Then("^Enter the Details \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_the_Details_and(String arg1, String arg2) {
		driver.findElement(By.name("name")).sendKeys(arg1);
		driver.findElement(By.name("email")).sendKeys(arg2);
		driver.findElement(By.name("user_signup")).sendKeys(arg1 + "abc");

		driver.findElement(By.name("pass_signup")).sendKeys("Kalayappan@008");
		driver.findElement(By.name("pass2")).sendKeys("Kalayappan@008");
		driver.findElement(By.name("useragree")).click();
	}

	@Then("^Click the Signup$")
	public void click_the_Signup() {

		driver.findElement(By.name("Submit")).click();
	}

	@When("^Navigates to next page$")
	public void navigates_to_next_page() {

		try {
			Thread.sleep(1000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String tit = driver.getTitle();
		Assert.assertEquals("Free Contact and Email Forms - myContactForm.com", tit);

	}
	@Then("^Click the Help option$")
	public void click_the_Help_option() {
		
		driver.findElement(By.xpath("//a[contains(text(),'Help')]")).click();
	}

	@Then("^Click the Email filtering issue$")
	public void click_the_Email_filtering_issue() {
		
		driver.findElement(By.xpath("//body/div[@id='content_wrapper']/div[@id='left_col_wrapper']/div[@id='left_col_top']/ul[1]/li[3]/a[1]")).click();
		
	}

	@Then("^Check the Title page$")
	public void check_the_Title_page()  {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String actual=driver.getTitle();
		Assert.assertEquals("Preventing E-mail Filtering Issues - myContactForm.com", actual);
		
	}

}
