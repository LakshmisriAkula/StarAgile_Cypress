describe('Locator By CSS', () => {
    it('Product Search', () => {
        cy.visit('https://automationexercise.com/')

        cy.get("[href = '/products']").click();

        cy.get("#search_product").type("T-Shirt");

        cy.get("#submit_search").click();


    })
})

describe('Get length of products', () => {
    it('Get Length of Products', () => {

        cy.visit('https://automationexercise.com/')

        cy.get("[href = '#Men']").click();

        cy.get("[href='/category_products/3']").click();

        cy.get(".features_items .col-sm-4").should('have.length', 6);

    })
})

describe('Get attribute value', () => {
    it('Get Attribute Value', () => {

        cy.visit('https://automationexercise.com/')

        cy.get("[href = '/products']").invoke('attr', 'href').then((href) => {
            cy.log('The href attribute value is: ' + href);

        })

    })
})

describe('Get CSS Property', () => {

    it('Get CSS Property', () => {

        cy.visit('https://automationexercise.com/')

        cy.get("[href = '/products']").invoke('css', 'color').then((color) => {
            cy.log('The color of the link is: ' + color);
        })

    })

})