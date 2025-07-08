describe("Each Usage",() =>{
    it("Validate text using each", () =>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm");
        cy.get("ul[class='leftmenu'] > li").each(($el,index,$arrayList) =>{
             const menuText = $el.text();
             cy.log(`Menu ${index+1}: ` + menuText);
        })
    })
})