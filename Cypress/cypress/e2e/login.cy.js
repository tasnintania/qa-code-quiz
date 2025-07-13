const loginPage = require('../support/pages/LoginPage')

// User Data
const users = {
    "SomeUser_name": {
        "name": "SomeUser_name",
        "password": "TopSecret1234!"
    },
    "dummytree": {
        "name": "dummytree",
        "password": "test1"
    },
    "Tania": {
        "name": "Tania",
        "password": "tania123"
    }
}

describe('Login Functionality Tests', () => {

    beforeEach(() => {
        loginPage.visit()
    })

// Test Cases 
    it('Try to login with credentials', () => {
        loginPage.login(users.SomeUser_name.name, users.SomeUser_name.password)
        cy.url().should('not.include', '/login')  
    })

    it('Try to login another valid credentials', () => {
        loginPage.login(users.Tania.name, users.Tania.password)
        cy.url().should('not.include', '/login')
    })

    it('Login fails with incorrect password', () => {
        loginPage.login(users.dummytree.name, 'wrongpassword')
        cy.url().should('include', '/login')  
    })

    it('Login fails with empty username and password', () => {
        loginPage.clickLogin()
        cy.url().should('include', '/login')
    })

})
