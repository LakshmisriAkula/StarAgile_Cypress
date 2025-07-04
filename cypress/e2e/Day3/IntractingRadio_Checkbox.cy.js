
describe("Check UI Element", () => {
    it("Handling Radio Button", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#male').should('be.visible').and('exist')

        cy.get('#female').should('be.visible').and('exist')


        cy.get('#male').check().should('be.checked')

        cy.get('#female').should('not.be.checked')

        cy.wait(2000)

        cy.get('#female').check().should('be.checked')

        cy.get('#male').should('not.be.checked')

    })

    it("Handling Checkbox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#sunday').should('be.visible').and('exist')

        cy.get('#sunday').check().should('be.checked')

        cy.get('#sunday').uncheck().should('not.be.checked')

        cy.wait(2000)

        cy.get('#sunday').check().should('be.checked')

        cy.get('#sunday').click().should('not.be.checked')

        cy.get(".form-check-input[type='checkbox']").check().should('be.checked')

        cy.wait(2000)

        cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        cy.wait(2000)

        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')

        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')



    })

})

