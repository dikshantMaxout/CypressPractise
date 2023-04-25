/// <reference types = "Cypress" />


describe("Scholastic first Test",function(){

before("Launch URL",function(){
    cy.visit(Cypress.env('url'))
    cy.url().should('include','scholastic') 
})

it("TC01:Click on Sign-in ",function(){
    cy.get('a.firstname.toggle-item').click({force:true})
    cy.contains('Sign In').click({force:true})
    cy.wait(2000)
    cy.iframe('#iframeMyScholastic').find('form input#user-text-field').type('dikshantagarwal.cool@gmail.com')

})


})