

package automation.mainRunner;

import org.junit.runner.RunWith; 
import cucumber.junit.Cucumber; 

@RunWith(Cucumber.class) 
@Cucumber.Options(
		format = {"pretty", "html:target/cucumber"},
		glue = { "automation.stepdefinitionfiles" },
		features = { "automation/featurefiles" })

public class MainRunnerSuiter { }
