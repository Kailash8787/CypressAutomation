import { testData } from "../testdata/login.js";
import { locators } from "../practicelocators/locators.js";
 
describe('Swag Labs Products', () => {
    beforeEach(() => {
    cy.login(testData.valid.username, testData.valid.password);
  })
  
it('user are able to directed to products page after login', () => {
  cy.get(locators.productsLocators.pageTitle).should('have.text', 'Products');
})

it('Swag Labs logo is displayed on the products page', () => {
  
 
  cy.get(locators.productsLocators.swagLabsLogo).should('be.visible');
})

it('Hamburger menu is displayed on the products page', () => {
  cy.get(locators.productsLocators.hamburgerMenu).should('be.visible');
})

it('Shopping cart icon is displayed on the products page', () => {
  cy.get(locators.productsLocators.shoppingCartIcon).should('be.visible');

})

it.only("verify all card details are displayed on the products page", () => {
  cy.get(locators.firstproductsLocators.firstProductsCard).each(($card) => {
  cy.wrap($card).find(locators.firstproductsLocators.firstProductsName)
    .should('be.visible');

  cy.wrap($card).find(locators.firstproductsLocators.firstProductsDescription)
    .should('be.visible');

  cy.wrap($card).find(locators.firstproductsLocators.firstProductsPrice)
    .should('be.visible');

  cy.wrap($card).find(locators.firstproductsLocators.firstProductsImage)
    .should('be.visible');

  cy.wrap($card).contains('Add to cart').should('be.visible');
  })
})
})