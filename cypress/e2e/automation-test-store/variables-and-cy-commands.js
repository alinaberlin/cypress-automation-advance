
/// <reference types="cypress" />

describe("Verifying variables, cypress commands and jquery commands", () => {
    it("Navigating to specific product pages", () => {
        // cy.visit("https://www.automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click();
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click();

        //Recomanded Approach
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
        

    });
})