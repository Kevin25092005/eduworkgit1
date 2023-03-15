/// <reference types="cypress" />

describe("My First Test",() => {
   
    it("clicking "type shows the right headings", () => {
        cy.visit ("http://example.cypress.io",)
       
       cy.pause()

       cy.contains("type").click()

       // should be on a new URL which includes "/command/actions"
       cy.url().should("include", "/command/actions")

       // get an input, type into it verify that the value has been
       cy.get(".action-email")
       cy.type("click")
       cy.should("have.value", "10000")
    })
})
    