import {elements} from '../fixtures/selector'
describe('Task', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })

    it('POM TASK', ()=>{
        cy.get(elements.usernameField).type(elements.standardUser)
        cy.get(elements.passwordField).type(elements.password)
        cy.get(elements.loginButton).click()
        cy.get(elements.products).should('be.visible')
        cy.get(elements.backPack).click()
        cy.get(elements.bikeLight).click()
        cy.get(elements.boltTshirt).click()
        cy.get(elements.fleeceJacket).click()
        cy.get(elements.Onesie).click()
        cy.get(elements.tshirtRed).click()
        cy.get(elements.inventoryContainer).should('not.be.empty')
        cy.get(elements.carts).click()
        cy.get(elements.checkout).click()
        cy.get(elements.firstNameField).type('Michael')
        cy.get(elements.lastNameField).type('Akintayo')
        cy.get(elements.postalCode).type('100001')
        cy.get(elements.continue).click()
        cy.get(elements.finish).click()
        cy.get(elements.complete).should('be.visible')
        cy.get(elements.backHome).click()
        cy.get(elements.menu).click()
        cy.get(elements.logOut).click()
        cy.get(elements.usernameField).type(elements.standardUser)
        cy.get(elements.passwordField).type(elements.invalidPassword)
        cy.get(elements.loginButton).click()
        cy.get(elements.error).should('be.visible')

    })

    
})