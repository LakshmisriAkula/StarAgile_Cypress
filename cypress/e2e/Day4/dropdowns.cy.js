describe("Dropdown", () => {
    it.skip("Validate select dropdown", () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        cy.get("#zcf_address_country").select("India").should("have.value", "India");


    })

    it.skip("Validate without select dropdown", () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("India{enter}");
        cy.get("#select2-billing_country-container").should("have.text", "India");
    })

    it("Validate dropdown with static auto suggestion", () => {
        cy.visit("https://www.wikipedia.org/");
        cy.get("#searchInput").type("Delhi");
        cy.get(".suggestion-title").contains("Delhi").click();
    })

    it("dropdown with dynamic autosuggestion", () => {
        cy.visit("https://www.google.co.in/");
        cy.get("[name='q']").type('Cypress Automation');
        cy.wait(3000)
        cy.get(".wM6W7d[role='presentation'] > span").should('have.length', 10)
        cy.get(".wM6W7d[role='presentation'] > span").each(($el, index, $arrayList) => {  //jquery
            cy.log("get suggestion texts " + $el.text())
            if ($el.text() == 'cypress automation tutorial') {
                cy.log("get the text of links " + $el.text());
                cy.wrap($el).click();
            }

        })
        cy.get("[name='q']").should('have.value', 'cypress automation tutorial')
    })
})