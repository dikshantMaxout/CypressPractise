/// <reference types = "Cypress" />

describe("Facebook Regresison Test",function(){

before("Launch URL",function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.url().should('include','rahulshettyacademy') 
})

it("TC01 : Add Brocoli in Cart ",function(){

    cy.get("input[type='search']").type("bro")
    cy.wait(2000)
    cy.contains("ADD TO CART").click({force:true})
    cy.get("a.cart-icon").click({force:true})
    cy.get("p.product-name:visible").should('have.text','Brocolli - 1 Kg')
    cy.get(".cart-item").find('.product-info:visible').should('have.length',1)
    cy.get('p.amount:visible').should('have.text','120')
    cy.contains("PROCEED TO CHECKOUT").click({force:true})

})


})