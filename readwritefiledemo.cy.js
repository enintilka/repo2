before(function() {

    
    cy.fixture("example.json").as('test_data')
})



it("should be able to read and write files()", () => {

    cy.fixture("example.json").then((data) => {
    
        cy.log(data.name)
        cy.log(data.email)

    })
   
})

it('write file demo',() =>{
    cy.writeFile('sample.txt', 'hello im eni ntilka\n')
    cy.writeFile('sample.txt', 'im learning cypress', {flag:'a+'})

})