$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("mainfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Overall Registration Feature",
  "description": "",
  "id": "overall-registration-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Contact Registarion",
  "description": "",
  "id": "overall-registration-feature;contact-registarion",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Check Title of Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click the Signup Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the Details \"\u003cusername\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the Signup",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigates to next page",
  "keyword": "When "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "overall-registration-feature;contact-registarion;",
  "rows": [
    {
      "cells": [
        "username",
        "Email"
      ],
      "line": 12,
      "id": "overall-registration-feature;contact-registarion;;1"
    },
    {
      "cells": [
        "mikkre",
        "mikkly@yahoo.com"
      ],
      "line": 13,
      "id": "overall-registration-feature;contact-registarion;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Contact Registarion",
  "description": "",
  "id": "overall-registration-feature;contact-registarion;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Check Title of Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Click the Signup Button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter the Details \"mikkre\" and \"mikkly@yahoo.com\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Click the Signup",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Navigates to next page",
  "keyword": "When "
});
formatter.match({
  "location": "scenariosteps.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.check_Title_of_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.click_the_Signup_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "mikkre",
      "offset": 19
    },
    {
      "val": "mikkly@yahoo.com",
      "offset": 32
    }
  ],
  "location": "scenariosteps.enter_the_Details_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.click_the_Signup()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.navigates_to_next_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Help for E-mail filtering issue",
  "description": "",
  "id": "overall-registration-feature;help-for-e-mail-filtering-issue",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "Check Title of Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Click the Help option",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Click the Email filtering issue",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Check the Title page",
  "keyword": "Then "
});
formatter.match({
  "location": "scenariosteps.user_is_on_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.check_Title_of_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.click_the_Help_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.click_the_Email_filtering_issue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "scenariosteps.check_the_Title_page()"
});
formatter.result({
  "status": "skipped"
});
});