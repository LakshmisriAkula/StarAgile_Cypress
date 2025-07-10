/*
Assignment 2: Interacting with Form Elements

Tasks:
- Write a test to fill out a form and submit it.
- Verify that the form submission was successful.
*/

describe("Assignment 2: Interacting with Form Elements", () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    it("Fills out the login form and verifies successful submission", () => {
        cy.visit("https://demoqa.com/automation-practice-form");

        cy.get("#firstName").type("Lakshmi");

        cy.get("#lastName").type("Akula");

        cy.get("#userEmail").type("lakshmi@example.com");

        cy.get("label[for='gender-radio-2']").click();

        cy.get("#userNumber").type("9876543210");

        cy.get("#dateOfBirthInput").click();

        cy.get(".react-datepicker__month-select").select("July");

        cy.get(".react-datepicker__year-select").select("1994");

        cy.get(".react-datepicker__day--003")
            .not(".react-datepicker__day--outside-month")
            .first()
            .click();

        cy.get("#subjectsInput").type("Computer Science{enter}");

        cy.get("label[for='hobbies-checkbox-1']").click();

        cy.get("label[for='hobbies-checkbox-2']").click();

        cy.get('#uploadPicture').attachFile('Sumo Logo.png');// Placed file in cypress/fixtures folder

        cy.get("#currentAddress").type("Visakhapatnam, Andhra Pradesh");

        cy.get("#state").click().type("NCR{enter}");

        cy.get("#city").click().type("Delhi{enter}");

        cy.get("#submit").click();

        cy.get(".modal-title").should("have.text", "Thanks for submitting the form");

        cy.get("tbody > :nth-child(1) > :nth-child(2)").should("contain", "Lakshmi Akula");

    });
});
