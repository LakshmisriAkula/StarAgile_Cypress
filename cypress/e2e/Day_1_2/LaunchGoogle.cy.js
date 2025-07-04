
describe('Launch Google',()=>{
  it('Should Launch Google and Veriy Title', () => {

    cy.visit('https://www.google.com')

    cy.title().should('eq', 'Google')

    cy.log("Google launched successfully and title verified as 'Google'")

    cy.get("[name='q']").type("facebook{Enter}");

    cy.wait(2000);

  })
})