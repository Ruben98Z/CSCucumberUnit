$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/sample.feature");
formatter.feature({
  "line": 2,
  "name": "To test my cucumber test is running I want to run a sample feature file.",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smokeTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "cucumber setup",
  "description": "",
  "id": "to-test-my-cucumber-test-is-running-i-want-to-run-a-sample-feature-file.;cucumber-setup",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "sample feature file is ready",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I run the feature file",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "run should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.givenStatement()"
});
formatter.result({
  "duration": 311439287,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.whenStatement()"
});
formatter.result({
  "duration": 90004,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.thenStatement()"
});
formatter.result({
  "duration": 72636,
  "status": "passed"
});
});