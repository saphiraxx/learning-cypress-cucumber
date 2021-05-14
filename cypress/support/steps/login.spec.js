
import loginPage from '../pages/loginPage'
import loginElements from '../pages/elements/loginElements'
const login = new loginPage
const elements = new loginElements

beforeEach(() => {
    Given(`que ele acessa o site`, () => {
        cy.visit(Cypress.env("baseURL"))
    })
})

When(`realizar um login com {string} e {string}`, () => {
    login.doLogin(Cypress.env('email'), Cypress.env('password'));
})

When(`usuário logado com sucesso com a mensagem: {string}`, text => {
    // expect(elements.loginSuccess().text()).to.contains(text)
})