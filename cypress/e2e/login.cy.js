
import { locators } from "../practicelocators/locators.js";
import { testData } from "../testdata/login.js";
describe("Swag Labs Login", () => {

  beforeEach(() => {
    cy.visit("/");
  })
   
  it("Login with valid credentials", () => {
    
    cy.get(locators.loginLocators.usernameField).type(testData.valid.username);
    cy.get(locators.loginLocators.passwordField).type(testData.valid.password);
    cy.get(locators.loginLocators.loginButton).click();
    cy.url().should("include", "/inventory.html");
    cy.get(locators.loginLocators.swagLabsLogo).should("be.visible");


  });

  it("Login with empty credentials", () => {
    
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.crossMarkButton).eq(0).should("be.visible");
    cy.get(locators.loginLocators.crossMarkButton).eq(1).should("be.visible");
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.emptyUsernameAndPasswordMessage);

  })

  it("Login with invalid credentials", () => {
    
    cy.get(locators.loginLocators.usernameField).clear().type(testData.invalid.username).should("have.value", testData.invalid.username);
    cy.get(locators.loginLocators.passwordField).type(testData.invalid.password);
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);    
  })

  it("Login with valid username and empty password", () => {
    
    cy.get(locators.loginLocators.usernameField).clear().type(testData.valid.username).should("have.value", testData.valid.username);
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.emptyPasswordMessage);    
  })

  it("Login with empty username and valid password", () => {
    
    cy.get(locators.loginLocators.passwordField).clear().type(testData.valid.password).should("have.value", testData.valid.password);
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.emptyUsernameMessage);
  })
  
  it("Login with invalid username and valid password", () => {
    
    cy.get(locators.loginLocators.usernameField).clear().type(testData.invalid.username).should("have.value", testData.invalid.username);
    cy.get(locators.loginLocators.passwordField).clear().type(testData.valid.password).should("have.value", testData.valid.password);
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);    
  })

  it("Login with valid username and invalid password", () => {
    
    cy.get(locators.loginLocators.usernameField).clear().type(testData.valid.username).should("have.value", testData.valid.username);
    cy.get(locators.loginLocators.passwordField).clear().type(testData.invalid.password).should("have.value", testData.invalid.password);
    cy.get(locators.loginLocators.loginButton).click();
    cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);    
  })

it("Login with locked-out user", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type(testData.lockedOutUser.username).should("have.value", testData.lockedOutUser.username);
  cy.get(locators.loginLocators.passwordField).clear().type(testData.lockedOutUser.password).should("have.value", testData.lockedOutUser.password);
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", "Epic sadface: Sorry, this user has been locked out.");

 })

it("Login with uppercase username", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type(testData.valid.username.toUpperCase()).should("have.value", testData.valid.username.toUpperCase());
  cy.get(locators.loginLocators.passwordField).clear().type(testData.valid.password).should("have.value", testData.valid.password);
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);
})

it("Login with uppercase password", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type(testData.valid.username).should("have.value", testData.valid.username);
  cy.get(locators.loginLocators.passwordField).clear().type(testData.valid.password.toUpperCase()).should("have.value", testData.valid.password.toUpperCase());
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);

})

it("login with special characters in username and password", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type("!@#$%^&*()").should("have.value", "!@#$%^&*()");
  cy.get(locators.loginLocators.passwordField).clear().type("!@#$%^&*()").should("have.value", "!@#$%^&*()");
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);
})

it("login with whitespace in username and password", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type("   ").should("have.value", "   ");
  cy.get(locators.loginLocators.passwordField).clear().type("   ").should("have.value", "   ");
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);

})

it("login with SQL injection in username and password", () => {
  
  cy.get(locators.loginLocators.usernameField).clear().type("' OR '1'='1").should("have.value", "' OR '1'='1");
  cy.get(locators.loginLocators.passwordField).clear().type("' OR '1'='1").should("have.value", "' OR '1'='1");
  cy.get(locators.loginLocators.loginButton).click();
  cy.get(locators.loginLocators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);
})
});