//// <reference types= "Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via constact us form", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#contact-us').click()
    //cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.document().should('have.property', 'charset', 'UTF-8')
    cy.title().should('include', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')
    cy.get('[name="first_name"]').type("Älina");
    cy.get('[name="last_name"]').type("Ghetler");
    cy.get('[name="email"]').type("alina@gmail.com");
    cy.get("textarea.feedback-input").type("I don't know what to write");
    cy.get('[type="submit"]').click({ force: true });
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  it.only("Should not be able to submit a successful submission via contact us form as all fields are required ", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#contact-us').click()
    cy.get('[name="first_name"]').type("Älina");
    cy.get('[name="last_name"]').type("Ghetler");
    cy.get("textarea.feedback-input").type("I don't know what to write");
    cy.get('[type="submit"]').click({ force: true });
    cy.get('body').contains('Error: all fields are required')
  });
});
