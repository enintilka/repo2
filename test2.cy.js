/// <reference types="cypress"/>

it('google search', ()=>{
    cy.visit('https://google.com')
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('#APjFqb1').type('escore{enter}')
    cy.wait(2500)
    cy.contains('Βίντεο').click()

    



})

