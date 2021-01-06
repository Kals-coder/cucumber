package Overallrunner;
import org.junit.runner.RunWith;

import cucumber.api.junit.Cucumber;
import cucumber.api.CucumberOptions;
@RunWith(Cucumber.class)
	@CucumberOptions(
			features = "src\\main\\java\\OverallFeature", //the path of the feature files
			glue={"steps"},//the path of the step definition files
			format= {"pretty","html:test-outout"},
			dryRun=true,
			monochrome=true,
			strict=true
			)
public class testrun {

}
