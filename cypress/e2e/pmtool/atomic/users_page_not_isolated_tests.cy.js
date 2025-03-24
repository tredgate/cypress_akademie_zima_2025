//users_page_not_isolated_tests.cy.js
import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../../page-objects/pmtool/users_page.js";

// ? Tento describe ma vypnutou izolaci testu, to znamena, ze vsechny testy pokracuji na tom miste v prohlizeci, kde predchozi test skoncil - { testIsolation: false }
describe("Users Page Atomic Tests", { testIsolation: false }, () => {
  // ? V neizolovaných testech používáme namísto beforeEach before (běží vždy jen před prvním testem)
  // ! Před během prvního testu chceme vyčistit cache, protože to za nás Cypress neudělá a mohlo by to způsobit pád jiných testů!
  // ? tři čistící funkce - nutné v ne-izolovaných testech
  before(() => {
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    new LoginPage()
      .openPmtool()
      .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"));
    new UsersPage().visit(); // ? Použití přímého navštívení stránky pomocí BasePage visit()
  });

  context("Title Tests", () => {
    it("Title is visible", () => {
      new UsersPage().pageTitleIsVisible();
    });

    it("Title have text", () => {
      new UsersPage().pageTitleHaveText("Users");
    });
  });

  context("Add User Button Tests", () => {
    it("Add user button is visible", () => {
      new UsersPage().addUserButtonIsVisible();
    });

    it("Add user button have text", () => {
      new UsersPage().addUserButtonHaveText("Add User");
    });
  });
});
