/// <reference types="Cypress" />


class elements {
    inputEmail = () => { return 'input[name="email"]' }
    inputPass = () => { return 'input[name="password"]' }
    btnEntrar = () => { return 'button[data-testid="entrar"]' }
}

export default elements;

class loginPage {

    doLogin(email, password) {
        typeEmail(email)
        typePassword(password)
        clickEntrar()
    }

    typeEmail(email) {
        cy.get(elements.inputEmail())
            .type(email)
    }

    typePassword(password) {
        cy.get(elements.inputPass())
            .type(password)
    }

    clickEntrar() {
        cy.get(elements.btnEntrar())
            .click()
    }
}

export default loginPage;