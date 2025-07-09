describe("Read data from fixtures", () => {
    it("Read data from fixtures", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("orangeHRM").then((data) => {
            cy.get("input[name='username']").screenshot("OrangeHRM Username Field");
            cy.get("input[name='username']").type(data.un);
            cy.get("input[name='password']").type(data.pwd);
            cy.get("input[name='password']").screenshot("OrangeHRM Password Field");
            cy.screenshot("OrangeHRM Login Page");
        })

    })
})