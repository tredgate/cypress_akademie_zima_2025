import { DashboardPage } from "../../page-objects/pmtool/dashboard_page.js";
import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login and Logout Tests", () => {
  beforeEach(() => {
      
  });
  it("Login to pmtool", () => {
    const pmtool = new LoginPage();
    pmtool.openPmtool();
    pmtool.typeUsername("cypress_zima_2024");
    pmtool.typePassword("Zima2024Cypress");
    pmtool.clickLogin();
  });

  //   it("Example: More PO", () => {
  //     const loginPage = new LoginPage();
  //     const homePage = new HomePage();
  //     loginPage.login(username, password);
  //     homePage.clickLogout();
  //   });

  it.only("Pmtool Login and Logout test", () => {
    const loginPage = new LoginPage();

    loginPage.openPmtool();
    loginPage.login("cypress_zima_2024", "Zima2024Cypress");

    const dashboardPage = new DashboardPage();
    dashboardPage.clickProfile();
    dashboardPage.clickLogout();
  });
});

/*
Cvičení - Vytvořte nový test a PageObject výkazy (⌛00:00)
V souboru: login_logout_tests.cy.js vytvořte nový test (it): Pmtool Login and Logout test
Ve složce cypress/page-objects/pmtool Vytvořte nový Page Object pro domovskou stránku (dashboard_page.js / DashboardPage).
Page Object (DashboardPage) bude obsahovat:
Klik na profilovou sekci - selektor: #user_dropdown
Klik na odhlášení - selektor: #logout
Do testu vložte přihlášení a následně odhlášení (použijte metodu login)

*/
