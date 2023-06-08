//// <reference types= "Cypress" />
//// <reference types= "Cypress-xpath" />

describe("Test Contact Us form via Autmation Test Store", () => {
  it("Should be able to submit a successful submission via constact us form", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get("a[href$='contact']").click().then(function(containText){
        cy.log("Click on the button " + containText.text())
    } );
    //cy.get('.info_links_footer > :nth-child(5) > a').click()
    //a[contains(@href, 'contact')]
    //cy.xpath("//a[contains(@href, 'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("Alina");
    cy.get("#ContactUsFrm_email").type("alina1@gmail.com");
    cy.get("#ContactUsFrm_email").should('have.have.attr', 'name', 'email')
    cy.get("#ContactUsFrm_enquiry").type("Do you provide additional discount on bulk orders?");
    //cy.get('.col-md-6 > .btn').click()
    //cy.get("buttont[title='Submit']").click();
    cy.get("button[title='Submit']").click(); 
    cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    cy.log("Test has completed")

  });
});
