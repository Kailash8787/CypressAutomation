class LoginPage{
    //locators

        swagLabsLogo = '.app_logo';
        usernameField = '[data-test="username"]';
        passwordField = '[data-test="password"]';
        loginButton = '[data-test="login-button"]';
        errorMessageLocator = '[data-test="error"]';
        crossMarkButton = '[data-icon="circle-xmark"]';

        //actions
        visitLoginPage(){
            cy.visit('/');
        }
        enterUsername(username){
            cy.get(this.usernameField).type(username);
        }

        enterPassword(password){
            cy.get(this.passwordField).type(password);
        }

        clickLoginButton(){
            cy.get(this.loginButton).click();
        }

        login(username, password){
            this.enterUsername(username);
            this.enterPassword(password);
            this.clickLoginButton();
        }
         
        //verifications
         verifyLogo() {
        cy.get(this.swagLabsLogo)
            .should('be.visible');
    }

    verifyCrossMarks() {
        cy.get(this.crossMarkButton)
            .eq(0)
            .should('be.visible');

        cy.get(this.crossMarkButton)
            .eq(1)
            .should('be.visible');
    }

    verifyUsername(username) {
        cy.get(this.usernameField)
            .should('have.value', username);
    }

    verifyPassword(password) {
        cy.get(this.passwordField)
            .should('have.value', password);
    }

    verifyErrorMessage(message) {
        cy.get(this.errorMessageLocator)
            .should('have.text', message);
    }

}
export default new LoginPage();