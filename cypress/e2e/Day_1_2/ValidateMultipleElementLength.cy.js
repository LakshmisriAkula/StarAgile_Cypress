describe("Validate element length", () => {

       // Ignore uncaught exceptions from the site
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("validate length of t-shirt", function () {
        cy.visit("https://automationexercise.com/")
        cy.get("[href='#Men']").click();
        cy.get("[href='/category_products/3']").click();
        cy.get(".features_items .col-sm-4").should('have.length', 6)

        cy.get(".features_items .col-sm-4").eq(0).contains("Add to cart").click();

        cy.wait(5000);

        cy.get(".btn.btn-success").click();

    })
})