$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/EatMore.feature");
formatter.feature({
  "name": "Menu Management",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a menu item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a menu item with name \"chicken burger\" and price 20",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_have_a_menu_item_with_name_and_price(java.lang.String,java.lang.String,java.lang.Integer)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [I have a menu item with name {string} and price (\\d+)] is defined with 3 parameters at \u0027stepDefinitions.Steps.i_have_a_menu_item_with_name_and_price(java.lang.String,java.lang.String,java.lang.Integer)\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"chicken burger\"\nStep text: I have a menu item with name \"chicken burger\" and price 20\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I add that menu item",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_add_that_menu_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Menu Item with name \"chicken burger\" should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.menu_Item_with_name_should_be_added(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/java/features/menumanagement.feature");
formatter.feature({
  "name": "Menu Management",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add a menu item",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have a menu item with name \"chicken burger\" and price 20",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_have_a_menu_item_with_name_and_price(java.lang.String,java.lang.String,java.lang.Integer)"
});
formatter.result({
  "error_message": "io.cucumber.core.exception.CucumberException: Step [I have a menu item with name {string} and price (\\d+)] is defined with 3 parameters at \u0027stepDefinitions.Steps.i_have_a_menu_item_with_name_and_price(java.lang.String,java.lang.String,java.lang.Integer)\u0027.\nHowever, the gherkin step has 1 arguments:\n * \"chicken burger\"\nStep text: I have a menu item with name \"chicken burger\" and price 20\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.arityMismatch(PickleStepDefinitionMatch.java:134)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:42)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I add that menu item",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.Steps.i_add_that_menu_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Menu Item with name \"chicken burger\" should be added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.Steps.menu_Item_with_name_should_be_added(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});