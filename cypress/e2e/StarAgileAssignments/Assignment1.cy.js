/*
Assignment 1: Basic Setup and Navigation

Tasks:
- Install Cypress in your project.
- Write a test to visit a webpage and verify its title.
*/

describe("Assignment 1: Basic Setup and Navigation", () => {
    /*
      Cypress Setup Steps:
      1. npm init -y
      2. npm install cypress --save-dev
      3. npx cypress open
    */

    it("Visits OrangeHRM login page and verifies the title", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.title().should('include', 'OrangeHRM');
    });
});
