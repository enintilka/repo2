import {LoginPage} from "./pages/login_page" 
const loginpage = new LoginPage()
describe ('all login tests', ()=>{
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')

    })
    it('pom test',()=>{
    
       
        loginpage.enterUsername('Admin')
        loginpage.enterpassword('admin123')
        loginpage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
       
    
    
    })
    
    it('pom test2',()=>{
        
        loginpage.enterUsername('Admin2')
        loginpage.enterpassword('admin123')
        loginpage.clickLogin()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
       
    
    
    })

})
