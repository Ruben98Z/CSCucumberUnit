$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("resources/features/sample.feature");
formatter.feature({
  "line": 1,
  "name": "To test my cucumber test is running I want to run a sample feature file.",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on trello website",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Iniciar Sesion",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "login should not work",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.givenStatement()"
});
formatter.result({
  "duration": 30684053356,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 234745047,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatement()"
});
formatter.result({
  "duration": 107317471,
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat StepDefinition.thenStatement(StepDefinition.java:35)\r\n\tat ✽.Then login should not work(resources/features/sample.feature:6)\r\n",
  "status": "failed"
});
});