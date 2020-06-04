package stepDefinitions;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hook {
	
	@Before
	public void setUp()
	{
		System.out.println("This will run before scenario");
	}
	
	@After
	public void tearDown()
	{
		System.out.println("This will run after scenario");
	}

}
