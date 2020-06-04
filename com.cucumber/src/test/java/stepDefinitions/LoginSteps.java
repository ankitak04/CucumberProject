package stepDefinitions;

import java.util.List;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
	public LoginSteps()
	{
		System.out.println("Constructor called");
	}
	
	@When("user is registed user")
	public void user_is_registed_user() {
	   System.out.println("user is registered.");
	}

	@Then("user proceed with sign in button.")
	public void user_proceed_with_sign_in_button() {
	    System.out.println("Sign in button");
	}

	@Given("user should be on Home page")
	public void user_should_be_on_Home_page() {
	    System.out.println("user should be on Home page");
	}

	@When("User enters following data")
	public void user_enters_following_data(io.cucumber.datatable.DataTable dataTable) {
	   
	    List<String> data = dataTable.asList(String.class);
	  for(int i = 0 ; i<data.size(); i++)
	  {
		  System.out.println(data.get(i));
	  }
	}
 
	@When("user clicks on login button")
	public void user_clicks_on_login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

	@Then("user should be successfully loggeedin")
	public void user_should_be_successfully_loggeedin() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new io.cucumber.java.PendingException();
	}

}

