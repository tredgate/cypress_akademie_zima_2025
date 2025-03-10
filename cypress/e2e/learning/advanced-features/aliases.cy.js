// aliases.cy.js
//cypress/e2e/learning/advanced-features

describe("Using Aliases", () => {
  it("Checking Login Placeholders Consistency", () => {
    cy.visit("https://tredgate.com/pmtool");
    // ! Nemůžeme ukládat výsledky do proměnných, nikdy nedostaneme co chceme.
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder");
    cy.get("#password").invoke("attr", "placeholder").as("passwordPlaceholder");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    cy.get("@usernamePlaceholder").then((storedPlaceholder) => {
      cy.log(storedPlaceholder);
      cy.get("#username").should("have.attr", "placeholder", storedPlaceholder);
    });
    cy.get("@passwordPlaceholder").then((storedPlaceholder) => {
      cy.log(storedPlaceholder);
      cy.get("#password").should("have.attr", "placeholder", storedPlaceholder);
    });
  });
});
