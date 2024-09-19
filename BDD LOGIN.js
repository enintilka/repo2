
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('i open login page',()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

When('i submit login',()=>{
    cy.get('#oxd-input oxd-input--active').type('Admin')
    cy.get('#oxd-input oxd-input--active').type('admin123')
    cy.get('oxd-button oxd-button--medium oxd-button--main orangehrm-login-button').click()
})

Then('i should see homepage',()=>{
    cy.get('oxd-text oxd-text--span oxd-main-menu-item--name').should('be.visible')

})