describe("HandlingTabs", () => {
    it("Approach1", () => {

        cy.visit("https://the-internet.herokuapp.com/windows")// parent window.

        cy.get('.example  >a').invoke('removeAttr', 'target').click();

        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000)

    })


    it("Approach2", () => {

        cy.visit("https://the-internet.herokuapp.com/windows")// parent window.

        cy.screenshot("ParentWindow")

        cy.get('.example  >a').then((childURL) => {
            let newURL = childURL.prop('href');

            cy.visit(newURL);

            cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')

            cy.screenshot("ChildWindow")

            cy.wait(5000)



        })


    })

})