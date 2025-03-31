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

  it("Login API has POST HTTP method in request", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api").its("request.method").should("eq", "POST");
    //cy.get("@login_api").its("request.method").should("eq", "POST"); // ? Vytažení výsledku api pomocí get potom, co už jsme počkali na response
  });

  it("Login API response have status 201", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api").its("response.statusCode").should("eq", 201);
  });

  it("Login API response have access_token in body", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api").its("response.body.access_token").should("exist");
  });

  it.only("Mock GET Account API", () => {
    cy.intercept("/auth/login").as("login_api");
    cy.intercept("/accounts/user/**", {
      fixture: "mock_accounts.json", // ? Nahrazujeme RESPONSE odchycené api naším mockem
    }).as("tegb_accounts_api");
    cy.visit("http://localhost:3001/");
    cy.get("input[data-testid='username']").type(Cypress.env("tegb_username"));
    cy.get("input[data-testid='password']").type(Cypress.env("tegb_password"));
    cy.get("button[data-testid='log_in']").click();
    cy.wait("@login_api");
    cy.get('li[data-testid="accounts_section_link"]').click();
  });
});
