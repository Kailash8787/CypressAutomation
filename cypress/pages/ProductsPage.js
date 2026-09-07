class ProductsPage {

    //page locators
    pageTitle = '[data-test="title"]';
    swagLabsLogo = '.app_logo';
    hamburgerMenu = '#react-burger-menu-btn';
    shoppingCartIcon = '[data-test="shopping-cart-link"]';
    productFilterDropdown = '[data-test="product-sort-container"]';

    
   //products locators
    productCards = '[data-test="inventory-item"]';
    productName = '.inventory_item_name';
    productDescription = '.inventory_item_desc';
    productPrice = '.inventory_item_price';
    productImage = '.inventory_item_img';
    addToCartButton = '[data-test="add-to-cart"]';


    //actions
    visitProductsPage() {
        cy.get(this.pageTitle)
        .should('be.visible')
        .and('contain', 'Products');
    }
    
    sortProducts(option){
        cy.get(this.productFilterDropdown).select(option);
    }
    
    openCart(){
        cy.get(this.shoppingCartIcon).click();
    }

    getProductCards() {
        return cy.get(this.productCards);
    }

    addProductToCart(productName) {
        cy.contains(this.productCards, productName)
            .find(this.addToCartButton)
            .click();
    }
      

}
export default new ProductsPage();