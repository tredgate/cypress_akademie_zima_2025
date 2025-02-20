import { LoginPage } from "../../page-objects/pmtool/login_page.js";

//login_tests_fluent.cy.js
describe("Fluent Login Tests", () => {
  it("PMTool login - Fluent API", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin();
  });

  it("PMTool login and logout - Fluent API", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("cypress_zima_2024")
      .typePassword("Zima2024Cypress")
      .clickLogin()
      .clickProfile()
      .clickLogout();
  });
});

/*
Cvičení - vytvoření testu na ztrátu hesla pomocí Fluent API ⌛20:00:
Vytvořte nový test na ztrátu hesla v Pmtoolu (lost_password_tests.cy.js) do složky cypress/e2e/pmtool
Vytvořte nový Page Object pro stránku ztráta hesla (lost_password_page.js)
Vytvořte akce v novém objektu:
Vyplnění username
Vyplnění e-mailu
Kliknutí na Send
Kliknutí na tlačítko zpět
Vytvořte testy:
Ztracené heslo end to end (username: lost_password_user, mail: lost_password@tredgate.cz)
Otevření stránky ztraceného hesla, návrat na login.

*/
