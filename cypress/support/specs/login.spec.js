
beforeEach(() => {
    Given(`que ele acessa o site`, () => {
        cy.visit(Cypress.env("baseURL"))
    })
})