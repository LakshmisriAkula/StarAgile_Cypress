/*
Assignment 4 : Testing Dropdown Functionality

Tasks:

Visit a Page with a Dropdown Menu: Navigate to a webpage that contains at least one dropdown menu.
Select an Option from the Dropdown: Write a test that selects an option from a dropdown menu.
Verify the Selected Option: Ensure that the selected option is correctly reflected in the UI
(e.g., displayed in the dropdown or a related output).

*/


describe("Assignment 4: Testing Dropdown Functionality", () => {
    it("Visits a page with a dropdown menu and selects an option", () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html");

        cy.get("#zcf_address_country").select("India").should("have.value", "India");


    })

})