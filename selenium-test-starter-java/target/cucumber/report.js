$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/TestFeature.feature");
formatter.feature({
  "name": "Visit a page and click on a link",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Visit a page and check the page title",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@test"
    }
  ]
});
formatter.step({
  "name": "I go to url https://www.bbc.co.uk/",
  "keyword": "Given "
});
formatter.match({
  "location": "NativeConstructorAccessorImpl.java:-2"
});
formatter.result({
  "status": "passed"
});
});