/*
Assignment 3: Testing User Authentication

Tasks:
- Write a test to log in with valid credentials.
- Verify that the user is redirected to a dashboard page.
*/

describe("Assignment 3: Testing User Authentication", () => {

    it("Logs in with valid credentials and verifies redirection to dashboard", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type("Admin");

        cy.get("input[name='password']").type("admin123");

        cy.get("button[type='submit']").click();

        cy.url().should('include', '/dashboard');

        cy.get("h6").should("contain.text", "Dashboard");
    });
});
