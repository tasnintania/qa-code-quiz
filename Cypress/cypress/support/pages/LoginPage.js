class LoginPage {
    elements = {
        usernameInput: () =>cy.get('[placeholder="Enter Username"]'),   
        passwordInput: () => cy.get('[placeholder="password"]'),   
        loginButton: () => cy.get('.sc-bZQynM'),  
      
    }

    // Visit URL
    visit() {
        cy.visit('http://localhost:8080/')  
    }

 
    enterUsername(username) {
        this.elements.usernameInput().clear().type(username)
    }

    enterPassword(password) {
        this.elements.passwordInput().clear().type(password)
    }

    clickLogin() {
        this.elements.loginButton().click()
    }

    login(username, password) {
        this.enterUsername(username)
        this.enterPassword(password)
        this.clickLogin()
    }
}

module.exports = new LoginPage();