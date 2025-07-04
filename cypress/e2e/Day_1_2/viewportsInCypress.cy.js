describe("resize the browser window", () => {


    it("viewport screentest", () => {
        cy.visit("https://google.com")
        cy.wait(2000)
        cy.log("URL Launched");
        cy.viewport(500, 700) // resize the browser window
        cy.wait(2000)

        cy.viewport('iphone-se2')
        cy.wait(2000)

    })

})