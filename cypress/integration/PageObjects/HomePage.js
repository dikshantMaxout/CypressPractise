class HomePage {

    getnamebox() {
        return cy.get(':nth-child(1) > .form-control')
    }

    gettwowaybinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getemail() {
        return cy.get(':nth-child(2) > .form-control')
    }

    getPassword() {
        cy.get('#exampleInputPassword1')
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1')
    }
    getemployedradiobutton() {
        return cy.get('#inlineRadio2')
    }

    getshopbutton() {
        return cy.get('.btn')
    }
    getshopbutton() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage;