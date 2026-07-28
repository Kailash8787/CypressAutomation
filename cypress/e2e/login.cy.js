
const locators = {
  usernameField:'[data-test="username"]',
  passwordField:'[data-test="password"]',
  loginButton:'[data-test="login-button"]',
  errorMessageLocator:'[data-test="error"]',
  crossMarkButton:'[data-icon="circle-xmark"]',
  pageTitle:'[data-test="title"]',
  addToCartButton:'[data-test="add-to-cart-sauce-labs-backpack"]',
 
};

const testData={

  valid:{
    username:"standard_user",
    password:"secret_sauce"
  },

  invalid:{
    username:"jpt",
    password:"123"
  },
  
 errorMessages:{
    invalidCredentials:"Epic sadface: Username and password do not match any user in this service",
    emptyUsernameMessage:"Epic sadface: Username is required",
    emptyPasswordMessage:"Epic sadface: Password is required",
    emptyUsernameAndPasswordMessage:"Epic sadface: Username is required"
  }
};




describe("Swag Labs Login", () => {
  it("Login with valid credentials", () => {
    cy.visit("https://www.saucedemo.com/");

    cy.get(locators.usernameField).type(testData.valid.username);

    cy.get(locators.passwordField).type(testData.valid.password);
    

    cy.get(locators.loginButton).click();

    cy.url().should("include", "/inventory.html");

    cy.get(locators.pageTitle).should("have.text", "Products");

    cy.get(locators.addToCartButton).should("be.visible");



  });

  it.only("Login with empty credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(locators.loginButton).click();
    cy.get(locators.crossMarkButton).eq(0).should("be.visible");
    cy.get(locators.crossMarkButton).eq(1).should("be.visible");

    cy.get(locators.errorMessageLocator).should("have.text", testData.errorMessages.emptyUsernameAndPasswordMessage);

  })

  it("Login with invalid credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get(locators.usernameField).type(testData.invalid.username);
    cy.get(locators.passwordField).type(testData.invalid.password);
    cy.get(locators.loginButton).click();
    cy.get(locators.errorMessageLocator).should("have.text", testData.errorMessages.invalidCredentials);    
  })
});