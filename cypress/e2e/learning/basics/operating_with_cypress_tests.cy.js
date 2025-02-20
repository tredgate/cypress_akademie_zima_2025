// Všechny testy musí být ve složce cypress/e2e

describe("Operating with Cypress Tests", () => {
  // Only slouží pro vývoj testů a dělá to, že spouští jen testy označené "it.only"
  // ! Nezapomeňte only smazat před pushováním do repozitáře. Způsobí problémy při běhu testů v cloudu
  it.only("Login Tests", () => {
    cy.visit("https://tredgate.com/pmtool"); // Otevře webovou stránku
    cy.get("#username").type("cypress_zima_2024"); // Vyplnění pole uživatelské jméno
    cy.get("#password").type("Zima2024Cypress");
    cy.get(".btn").click(); // Kliknutí na tlačítko
  });

  it.skip("Test failure - element not present", () => {
    cy.visit("https://tredgate.com/pmtool");
    cy.get("#username2");
  });
});
