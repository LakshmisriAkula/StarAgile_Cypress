const { expect } = require("chai");

describe("Assertions", () => {
    it("Implicit Assertions - Should", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include', 'orangehrmlive');
        cy.url().should('not.include', 'orangehrm123');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    })

    it("Implicit Assertions - And", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.url().should('include', 'orangehrmlive')
            .and('not.include', 'orangehrm123')
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    })

    it("Implicit Asssertions on title", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.title().should('eq', 'OrangeHRM')

        cy.title().should('include', 'OrangeHRM')

        cy.title().should('contain', 'OrangeHRM')

        cy.get('.orangehrm-login-branding >img').should('be.visible').and('exist')

        cy.get('a').should('have.length', 5)

        cy.get("input[name='username']").type('Admin').should('have.value', 'Admin')

    })

    it("Explicit Assertio - Expect", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type('Admin');

        cy.get("input[name='password']").type('admin123');

        cy.get("button[type='submit']").click();

        let expName = "mandas user";

        cy.get(".oxd-userdropdown-name").then((strUserName) => {

            let actName = strUserName.text();

            expect(actName).to.equal(expName, "User name does not match");

            expect(actName).to.not.equal('expName@123', "User name does not match");


        })

    })


    it("Explicit Assertio - assert", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type('Admin');

        cy.get("input[name='password']").type('admin123');

        cy.get("button[type='submit']").click();

        let expName = "mandas user";

        cy.get(".oxd-userdropdown-name").then((strUserName) => {

            let actName = strUserName.text();

            assert.equal(actName, expName, "User name does not match");
            assert.notEqual(actName, 'expName@123', "User name does not match");

        })

    })

})