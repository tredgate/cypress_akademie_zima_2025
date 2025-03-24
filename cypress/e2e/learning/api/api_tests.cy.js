describe("Api Display Tests", () => {
  it("Check Login APIs", () => {
    cy.intercept("/auth/login").as("login_api"); // ? Instrukce Cypressu, aby odchytával všechny API, která končí řetězcem: /auth/login
    // Celá url: http://localhost:3000/auth/login
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
  });

  it("Wait for login", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api"); // ? Příkaz, který čeká na to, než přijde response API s aliasem login_api (dokončí se request)
  });
});
