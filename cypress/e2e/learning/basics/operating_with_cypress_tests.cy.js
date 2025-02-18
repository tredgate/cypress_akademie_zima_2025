// Všechny testy musí být ve složce cypress/e2e

describe("Operating with Cypress Tests", () => {
  it("Login Tests", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username");
  });

  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2");
  });
});
