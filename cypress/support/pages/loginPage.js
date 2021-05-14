/// <reference types="Cypress" />

import loginElements from '../pages/elements/loginElements'
const el = new loginElements
class loginPage {

    doLogin(email, password) {
        this.fillEmail(email)
        this.fillPassword(password)
        this.clickEntrar()
    }

    fillEmail(email) {
        cy.get(el.inputEmail())
            .clear()
            .type(email)
    }

    fillPassword(password) {
        cy.get(el.inputPass())
            .clear()
            .type(password)
    }

    clickEntrar() {
        cy.get(el.btnEntrar())
            .click();
    }
}

export default loginPage;
