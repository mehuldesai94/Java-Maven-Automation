$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('automation\featurefiles\authentication.feature');
formatter.feature({
  "line": 2,
  "name": "Authentication",
  "description": "",
  "id": "authentication",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 15,
  "name": "Login with wrong credentials",
  "description": "",
  "id": "authentication;login-with-wrong-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters emailaddress nodomain@wrong",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters new password noDomain",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "sign in click",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "message displayed Login Failed",
  "keyword": "Then "
});
formatter.match({
  "location": "authentication.goToLogin()"
});
formatter.result({
  "duration": 6846290500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nodomain@wrong",
      "offset": 25
    }
  ],
  "location": "authentication.insertEmail(String)"
});
formatter.result({
  "duration": 332008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noDomain",
      "offset": 25
    }
  ],
  "location": "authentication.insertPassword(String)"
});
formatter.result({
  "duration": 231328700,
  "status": "passed"
});
formatter.match({
  "location": "authentication.clicksSignIn()"
});
formatter.result({
  "duration": 913241300,
  "status": "passed"
});
formatter.match({
  "location": "authentication.displayError()"
});
formatter.result({
  "duration": 125162000,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Login with valid credentials",
  "description": "",
  "id": "authentication;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 18,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "user is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "user enters emailaddress fpcesar2011@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user enters new password Cognizant2019",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "sign in click",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "redirecte user to My Account",
  "keyword": "Then "
});
formatter.match({
  "location": "authentication.goToLogin()"
});
formatter.result({
  "duration": 23474149000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fpcesar2011@gmail.com",
      "offset": 25
    }
  ],
  "location": "authentication.insertEmail(String)"
});
formatter.result({
  "duration": 958287700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cognizant2019",
      "offset": 25
    }
  ],
  "location": "authentication.insertPassword(String)"
});
formatter.result({
  "duration": 1725372200,
  "status": "passed"
});
formatter.match({
  "location": "authentication.clicksSignIn()"
});
formatter.result({
  "duration": 2906124500,
  "status": "passed"
});
formatter.match({
  "location": "authentication.checkTitle()"
});
formatter.result({
  "duration": 24901800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "",
  "description": "",
  "id": "authentication;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 31,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 34,
  "name": "user is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "user enters emailaddress noDomain@wrong",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "submits create an account",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "message displayed Registration Failed",
  "keyword": "Then "
});
formatter.match({
  "location": "authentication.goToLogin()"
});
formatter.result({
  "duration": 9151536300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "noDomain@wrong",
      "offset": 25
    }
  ],
  "location": "authentication.insertEmail(String)"
});
formatter.result({
  "duration": 208666100,
  "status": "passed"
});
formatter.match({
  "location": "authentication.submitCreateAccount()"
});
formatter.result({
  "duration": 193965800,
  "status": "passed"
});
formatter.match({
  "location": "authentication.checkErrorMessageRegistration()"
});
formatter.result({
  "duration": 516561700,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "",
  "description": "",
  "id": "authentication;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 44,
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user is at login page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "user enters emailaddress fpcesar2011@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "submits create an account",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "message displayed Registration Failed existing email",
  "keyword": "Then "
});
formatter.match({
  "location": "authentication.goToLogin()"
});
formatter.result({
  "duration": 7679610500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fpcesar2011@gmail.com",
      "offset": 25
    }
  ],
  "location": "authentication.insertEmail(String)"
});
formatter.result({
  "duration": 330956800,
  "status": "passed"
});
formatter.match({
  "location": "authentication.submitCreateAccount()"
});
formatter.result({
  "duration": 334729600,
  "status": "passed"
});
formatter.match({
  "location": "authentication.messageDisplayedRegitrationFailedExistingEmail()"
});
formatter.result({
  "duration": 526762400,
  "status": "passed"
});
formatter.uri('automation\featurefiles\items.feature');
formatter.feature({
  "line": 2,
  "name": "Items",
  "description": "",
  "id": "items",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "comments": [
    {
      "line": 4,
      "value": "#Functional testing"
    }
  ],
  "line": 6,
  "name": "Add an item to the Cart",
  "description": "",
  "id": "items;add-an-item-to-the-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is at the store page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "hover over on item and add item to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "items.goToLogin()"
});
formatter.result({
  "duration": 27389643600,
  "status": "passed"
});
formatter.match({
  "location": "items.hover()"
});
formatter.result({
  "duration": 2568625100,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 10,
      "value": "#Functional testing"
    }
  ],
  "line": 12,
  "name": "Items by Category",
  "description": "",
  "id": "items;items-by-category",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is at the store page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Hover over on “Women” nav bar and click on “Summer Dresses” from the sub-menu",
  "keyword": "Then "
});
formatter.match({
  "location": "items.goToLogin()"
});
formatter.result({
  "duration": 10932530800,
  "status": "passed"
});
formatter.match({
  "location": "items.hover2()"
});
formatter.result({
  "duration": 3965965200,
  "status": "passed"
});
formatter.uri('automation\featurefiles\registration.feature');
formatter.feature({
  "line": 2,
  "name": "Registration",
  "description": "",
  "id": "registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "Register for an account with invalid data",
  "description": "",
  "id": "registration;register-for-an-account-with-invalid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user is at registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter emailaddress mehul1@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on create new account",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters firstname 123",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters lastname 223",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters password 2344",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters address ",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters city ",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters zipcode 6664",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user selects state Alabama",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters mobile 354631",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on registration",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "registration fail",
  "keyword": "Then "
});
formatter.match({
  "location": "registration.goToLogin()"
});
formatter.result({
  "duration": 16072479000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehul1@gmail.com",
      "offset": 24
    }
  ],
  "location": "registration.enterEmail(String)"
});
formatter.result({
  "duration": 2316315700,
  "status": "passed"
});
formatter.match({
  "location": "registration.submitCreate()"
});
formatter.result({
  "duration": 186373500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 22
    }
  ],
  "location": "registration.insertFirstName(String)"
});
formatter.result({
  "duration": 4790580100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "223",
      "offset": 21
    }
  ],
  "location": "registration.insertLastName(String)"
});
formatter.result({
  "duration": 124661400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2344",
      "offset": 21
    }
  ],
  "location": "registration.insertValidPassword(String)"
});
formatter.result({
  "duration": 364658700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "registration.insertAddress(String)"
});
formatter.result({
  "duration": 95753600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 17
    }
  ],
  "location": "registration.insertCity(String)"
});
formatter.result({
  "duration": 116309300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6664",
      "offset": 20
    }
  ],
  "location": "registration.insertZipCode(String)"
});
formatter.result({
  "duration": 178303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 19
    }
  ],
  "location": "registration.selectState(String)"
});
formatter.result({
  "duration": 495859200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "354631",
      "offset": 19
    }
  ],
  "location": "registration.insertPhone(String)"
});
formatter.result({
  "duration": 208316600,
  "status": "passed"
});
formatter.match({
  "location": "registration.clickRegister()"
});
formatter.result({
  "duration": 1375017500,
  "status": "passed"
});
formatter.match({
  "location": "registration.checkRegistrationFails()"
});
formatter.result({
  "duration": 97907400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Register with valid credentials",
  "description": "",
  "id": "registration;register-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 27,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user is at registration page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "user enter emailaddress mehul64@gmail.com",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user click on create new account",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user enters firstname Mehul",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "user enters lastname Desai",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user enters password mehuld",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user enters address Seneca Residence",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user enters city Toronto",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user enters zipcode 45124",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user selects state Alabama",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user enters mobile 4512451252",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "click on registration",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "registration success",
  "keyword": "Then "
});
formatter.match({
  "location": "registration.goToLogin()"
});
formatter.result({
  "duration": 10972690600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehul64@gmail.com",
      "offset": 24
    }
  ],
  "location": "registration.enterEmail(String)"
});
formatter.result({
  "duration": 321104200,
  "status": "passed"
});
formatter.match({
  "location": "registration.submitCreate()"
});
formatter.result({
  "duration": 184057700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mehul",
      "offset": 22
    }
  ],
  "location": "registration.insertFirstName(String)"
});
formatter.result({
  "duration": 1296365000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desai",
      "offset": 21
    }
  ],
  "location": "registration.insertLastName(String)"
});
formatter.result({
  "duration": 294552800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mehuld",
      "offset": 21
    }
  ],
  "location": "registration.insertValidPassword(String)"
});
formatter.result({
  "duration": 627220300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Seneca Residence",
      "offset": 20
    }
  ],
  "location": "registration.insertAddress(String)"
});
formatter.result({
  "duration": 396723300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toronto",
      "offset": 17
    }
  ],
  "location": "registration.insertCity(String)"
});
formatter.result({
  "duration": 198139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45124",
      "offset": 20
    }
  ],
  "location": "registration.insertZipCode(String)"
});
formatter.result({
  "duration": 180356300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alabama",
      "offset": 19
    }
  ],
  "location": "registration.selectState(String)"
});
formatter.result({
  "duration": 192708400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4512451252",
      "offset": 19
    }
  ],
  "location": "registration.insertPhone(String)"
});
formatter.result({
  "duration": 272868900,
  "status": "passed"
});
formatter.match({
  "location": "registration.clickRegister()"
});
formatter.result({
  "duration": 1806838500,
  "status": "passed"
});
formatter.match({
  "location": "registration.checkRegistrationSuccess()"
});
formatter.result({
  "duration": 8120800,
  "status": "passed"
});
});