import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.chrome.ChromeDriver;


public class StepDefinition {

    WebDriver driver = null;

    @Given("^I am on trello website$")
    public void givenStatement(){
        System.setProperty("webdriver.chrome.driver","C:\\SeleniumChrome\\chromedriver.exe");;
        ChromeOptions capabilities = new ChromeOptions();
        capabilities.setCapability("marionette", true);
        driver = new ChromeDriver();
        driver.navigate().to("https://trello.com/login");
        System.out.println("Given statement executed successfully");
    }

    @When("^I click on Iniciar Sesion$")
    public void whenStatement(){
        driver.findElement(By.id("login")).click();
        System.out.println("When statement executed successfully");
    }

    @Then("^login should not work$")
    public void thenStatement(){
        String mensaje ="Falta el correo electrónico";
        String mensajeObtenido=driver.findElements(By.id("error-message")).toString();
        Assert.assertTrue(mensaje.equals(mensajeObtenido));
        System.out.println("Then statement executed successfully");
    }
}
