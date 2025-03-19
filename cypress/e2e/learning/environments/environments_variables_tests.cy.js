// environments_variables_tests.cy.js

describe("Environments tests", () => {
  it("Open PMTool", () => {
    const url = Cypress.env("pmtool_url");
    cy.visit(url);
  });

  it("Open Eshop", () => {
    const url = Cypress.env("eshop_url");
    cy.visit(url);
  });

  it("Open AutomationTestStore", () => {
    const url = Cypress.env("automation_test_store_url");
    cy.visit(url);
  });

  it("Open Webtrain", () => {
    const url = Cypress.env("webtrain_url");
    cy.visit(url);
  });
});
