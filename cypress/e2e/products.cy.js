import LoginPage from '../pages/LoginPage';
import ProductsPage from '../pages/ProductsPage';

describe('Swag Labs Products', () => {

    // BEFORE EACH TEST
    beforeEach(() => {
        LoginPage.visitLoginPage();

        LoginPage.login(
            Cypress.env('VALID_USERNAME'),
            Cypress.env('VALID_PASSWORD')
        );
    });


    // 1. PRODUCTS PAGE

    it('User is directed to Products page after login', () => {
        ProductsPage.visitProductsPage();
    });


    // 2. PAGE ELEMENTS

    it('Swag Labs logo is displayed on the Products page', () => {
        cy.get(ProductsPage.swagLabsLogo)
            .should('be.visible');
    });


    it('Hamburger menu is displayed on the Products page', () => {
        cy.get(ProductsPage.hamburgerMenu)
            .should('be.visible');
    });


    it('Shopping cart icon is displayed on the Products page', () => {
        cy.get(ProductsPage.shoppingCartIcon)
            .should('be.visible');
    });


    it('Product filter dropdown is visible', () => {
        cy.get(ProductsPage.productFilterDropdown)
            .should('be.visible');
    });


    // 3. PRODUCT SORTING

    it('Should sort product name accurately when filter is applied', () => {

        ProductsPage.sortProducts('Name (Z to A)');

        ProductsPage.getProductCards()
            .find(ProductsPage.productName)
            .then(($names) => {

                const nameValues = $names
                    .map((index, name) => name.innerText)
                    .get();

                const sortedNames = [...nameValues]
                    .sort()
                    .reverse();

                expect(nameValues)
                    .to.deep.equal(sortedNames);
            });
    });


    it('Should sort product prices accurately when filter is applied', () => {

        ProductsPage.sortProducts('Price (high to low)');

        ProductsPage.getProductCards()
            .find(ProductsPage.productPrice)
            .then(($prices) => {

                const priceValues = $prices
                    .map((index, price) => {
                        return Number(
                            price.innerText
                                .replace('$', '')
                                .trim()
                        );
                    })
                    .get();

                const sortedPrices = [...priceValues]
                    .sort((a, b) => b - a);

                expect(priceValues)
                    .to.deep.equal(sortedPrices);
            });
    });


    // 4. PRODUCT CARD DETAILS

    it('Verify all card details are displayed on the Products page', () => {

        ProductsPage.getProductCards()
            .each(($card) => {

                cy.wrap($card)
                    .find(ProductsPage.productName)
                    .should('be.visible');

                cy.wrap($card)
                    .find(ProductsPage.productDescription)
                    .should('be.visible');

                cy.wrap($card)
                    .find(ProductsPage.productPrice)
                    .should('be.visible');

                cy.wrap($card)
                    .find(ProductsPage.productImage)
                    .should('be.visible');

                cy.wrap($card)
                    .contains('Add to cart')
                    .should('be.visible');
            });
    });

});