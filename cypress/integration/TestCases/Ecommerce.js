/// <reference types = "Cypress" />


import HomePage from "../PageObjects/HomePage"
import ProductPage from "../PageObjects/ProductPage"

describe("Regresison Test",function(){

before("Launch URL",function(){
    cy.visit("https://rahulshettyacademy.com/angularpractice/")
    cy.url().should('include','rahulshettyacademy') 
})

it("TC01:Fill Form ",function(){
    const homepage = new HomePage()
    const productPage = new ProductPage()

    homepage.getnamebox().type("Dikshant")
    homepage.getemail().type("dikshant@perftest.com")
    homepage.getGender().select("Female")
    homepage.getemployedradiobutton().check().should('be.checked',true)
    homepage.getshopbutton().click()
    homepage.getshopbutton().click()
    cy.selectproduct("Blackberry")
    cy.selectproduct("Samsung")
    productPage.checkoutbutton().click()
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>
    {   
        const amount = $el.text()
        cy.log(amount)
        var formtAmount = amount.split(" ")
        cy.log(formtAmount[1])
    })
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type("India")
    cy.get('.suggestions > ul > li > a').click()
    cy.get('input#checkbox2').check({force:true})
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').then(function(element)
    {
    expect(element.text().includes("Success")).to.true
    
    })

   
        


    

})


})