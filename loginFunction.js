export class LoginFunction{
    login_username = '#uname'
    login_password = '#pwd'
    login_button = '[type="submit"]'
navigate(url){
    cy.visit(url)
}
enterUsername(username){
    cy.get(this.login_username).type(username)
}
enterPassword(password){
    cy.get(this.login_password).type(password) 
}
clicklogin(){
    cy.get(this.login_button).click()
}
}