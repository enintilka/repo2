
it('google search', ()=>{
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('[name="q"]')
    .type('youtube')
    .type('{enter}')
    cy.wait(3000)
    cy.contains('YouTube:').click()



})

it('login test', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.contains('Admin').click()
    cy.contains('Add').click()
    cy.get('.oxd-button--secondary').click()




})

import { LoginFunction } from "../functions/loginFunction"
const loginfunction = new LoginFunction

it('pom login test', ()=> {

    loginfunction.navigate('https://trytestingthis.netlify.app/')
    loginfunction.enterUsername('test')
    loginfunction.enterPassword('test')
    loginfunction.clicklogin()
    

})

