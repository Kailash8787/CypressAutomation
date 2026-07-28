export const locators = {
    loginLocators: {
        swagLabsLogo: '.app_logo',
        usernameField: '[data-test="username"]',
        passwordField: '[data-test="password"]',
        loginButton: '[data-test="login-button"]',
        errorMessageLocator: '[data-test="error"]',
        crossMarkButton: '[data-icon="circle-xmark"]',
    },

    productsLocators: {

        pageTitle: '[data-test="title"]',
        swagLabsLogo: '.app_logo',
        hamburgerMenu: '#react-burger-menu-btn',
        shoppingCartIcon: '[data-test="shopping-cart-link"]',
        addToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]'
        
    },

    firstproductsLocators: {
        firstProductsCard:'[data-test="inventory-item"]',
        firstProductsName: '.inventory_item_name',
        firstProductsDescription: '.inventory_item_desc',
        firstProductsPrice: '.inventory_item_price',
        firstProductsImage: '.inventory_item_img',
        firstProductsAddToCartButton: '[data-test="add-to-cart"]',
    }
}
