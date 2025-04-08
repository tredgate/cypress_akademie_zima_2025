// multi_domain.cy.js
describe("Multi Domain Tests", () => {
  it("Using cy.origin", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username").type("admin");
    cy.origin("https://tegb-frontend-88542200c6db.herokuapp.com/", () => {
      cy.visit("/");
      cy.get('[data-testid="username-input"]').type("druhá aplikace");
    });
    // pokračovat v tredgate.com doméně, ale je potřeba si opět zavolat visit
    cy.visit("/");
    cy.get("#username").type("adminPodruhé");
  });
});
