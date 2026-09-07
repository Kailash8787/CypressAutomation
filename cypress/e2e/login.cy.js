//Login.cy.js

import LoginPage from '../pages/LoginPage';
import { testData } from '../testdata/login.js';


describe('Swag Labs Login', () => {

    
    // BEFORE EACH TEST
    

    beforeEach(() => {
        LoginPage.visitLoginPage();
    });


    
    // 1. VALID LOGIN
    

    it.only('Login with valid credentials', () => {

        LoginPage.login(
           Cypress.env('VALID_USERNAME'),
            Cypress.env('VALID_PASSWORD')
        );

        cy.url()
            .should('include', '/inventory.html');

        LoginPage.verifyLogo();
    });


    
    // 2. EMPTY USERNAME AND PASSWORD
   

    it('Login with empty credentials', () => {

        LoginPage.clickLoginButton();

        LoginPage.verifyCrossMarks();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.emptyUsernameAndPasswordMessage
        );
    });


   
    // 3. INVALID USERNAME AND PASSWORD
    

    it('Login with invalid credentials', () => {

        LoginPage.enterUsername(
            testData.invalid.username
        );

        LoginPage.verifyUsername(
            testData.invalid.username
        );

        LoginPage.enterPassword(
            testData.invalid.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


    
    // 4. VALID USERNAME + EMPTY PASSWORD
    

    it('Login with valid username and empty password', () => {

        LoginPage.enterUsername(
            testData.valid.username
        );

        LoginPage.verifyUsername(
            testData.valid.username
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.emptyPasswordMessage
        );
    });


   
    // 5. EMPTY USERNAME + VALID PASSWORD
  

    it('Login with empty username and valid password', () => {

        LoginPage.enterPassword(
            testData.valid.password
        );

        LoginPage.verifyPassword(
            testData.valid.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.emptyUsernameMessage
        );
    });


    
    // 6. INVALID USERNAME + VALID PASSWORD
   

    it('Login with invalid username and valid password', () => {

        LoginPage.enterUsername(
            testData.invalid.username
        );

        LoginPage.verifyUsername(
            testData.invalid.username
        );

        LoginPage.enterPassword(
            testData.valid.password
        );

        LoginPage.verifyPassword(
            testData.valid.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


    
    // 7. VALID USERNAME + INVALID PASSWORD
    

    it('Login with valid username and invalid password', () => {

        LoginPage.enterUsername(
            testData.valid.username
        );

        LoginPage.verifyUsername(
            testData.valid.username
        );

        LoginPage.enterPassword(
            testData.invalid.password
        );

        LoginPage.verifyPassword(
            testData.invalid.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


   
    // 8. LOCKED-OUT USER
    

    it('Login with locked-out user', () => {

        LoginPage.enterUsername(
            testData.lockedOutUser.username
        );

        LoginPage.verifyUsername(
            testData.lockedOutUser.username
        );

        LoginPage.enterPassword(
            testData.lockedOutUser.password
        );

        LoginPage.verifyPassword(
            testData.lockedOutUser.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            'Epic sadface: Sorry, this user has been locked out.'
        );
    });


    // 9. UPPERCASE USERNAME
    

    it('Login with uppercase username', () => {

        const uppercaseUsername =
            testData.valid.username.toUpperCase();

        LoginPage.enterUsername(
            uppercaseUsername
        );

        LoginPage.verifyUsername(
            uppercaseUsername
        );

        LoginPage.enterPassword(
            testData.valid.password
        );

        LoginPage.verifyPassword(
            testData.valid.password
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


    
    // 10. UPPERCASE PASSWORD
    

    it('Login with uppercase password', () => {

        const uppercasePassword =
            testData.valid.password.toUpperCase();

        LoginPage.enterUsername(
            testData.valid.username
        );

        LoginPage.verifyUsername(
            testData.valid.username
        );

        LoginPage.enterPassword(
            uppercasePassword
        );

        LoginPage.verifyPassword(
            uppercasePassword
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


    
    // 11. SPECIAL CHARACTERS
   

    it('Login with special characters in username and password', () => {

        const specialCharacters = '!@#$%^&*()';

        LoginPage.enterUsername(
            specialCharacters
        );

        LoginPage.verifyUsername(
            specialCharacters
        );

        LoginPage.enterPassword(
            specialCharacters
        );

        LoginPage.verifyPassword(
            specialCharacters
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


  
    // 12. WHITESPACE
   

    it('Login with whitespace in username and password', () => {

        const whitespace = '   ';

        LoginPage.enterUsername(
            whitespace
        );

        LoginPage.verifyUsername(
            whitespace
        );

        LoginPage.enterPassword(
            whitespace
        );

        LoginPage.verifyPassword(
            whitespace
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });


    
    // 13. SQL INJECTION INPUT
    

    it('Login with SQL injection in username and password', () => {

        const sqlInjection = "' OR '1'='1";

        LoginPage.enterUsername(
            sqlInjection
        );

        LoginPage.verifyUsername(
            sqlInjection
        );

        LoginPage.enterPassword(
            sqlInjection
        );

        LoginPage.verifyPassword(
            sqlInjection
        );

        LoginPage.clickLoginButton();

        LoginPage.verifyErrorMessage(
            testData.errorMessages.invalidCredentials
        );
    });

});