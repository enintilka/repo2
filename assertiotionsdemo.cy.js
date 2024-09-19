it('assertiotions demo', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('get').click()

    cy.get('#query-btn')
    .should('have.class','query-btn')
    .and('contain','Button')
    .and('be.visible')
    .and('be.enabled')

expect(true).to.be.true
assert.equal(4,'4', 'EQUAL')
assert.strictEqual(4,4, 'EQUAL')
assert.isString('come','go', 'YES')
    




  })