//// <reference types= "Cypress" />


describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Click on the first item using item header", () => {
      cy.visit("https://www.automationteststore.com/");
        cy.contains('Skinsheen Bronzer Stick').click()
    });
    it("Click on the second product item using item's index", ()=>{
        cy.visit("https://www.automationteststore.com/");
        cy.get(".fixed_wrapper").find(".prdocutname").eq(1).click()
        cy.get(".thumbnail").each(($el, index, $list) => {
          if($el.text().includes()){
              
              cy.wrap($el).click()
          }
      });
    })
  });
  
