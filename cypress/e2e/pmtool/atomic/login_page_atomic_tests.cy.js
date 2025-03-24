// login_page_atomic_tests.cy.js
// složka: cypress/e2e/pmtool/atomic

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Login Page Atomic Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  context("Username Input Tests", () => {
    it("Username is visible", () => {
      new LoginPage().usernameIsVisible();
    });

    it("Username has placeholder", () => {
      new LoginPage().usernameHavePlaceholder("Username");
    });

    it("Username has value after type", () => {
      const username = "Test";
      new LoginPage().typeUsername(username).usernameHaveValue(username);
    });

    it("Username has no value", () => {
      new LoginPage().usernameHaveValue("");
    });
  });

  context("Password Input Tests", () => {
    it("Password is visible", () => {
      new LoginPage().passwordIsVisible();
    });

    it("Password has placeholder", () => {
      new LoginPage().passwordHasPlaceholder("Password");
    });
  });

  context("Logo Tests", () => {
    it("Logo is visible", () => {
      new LoginPage().logoIsVisible();
    });
  });

  context("Functionality Tests", () => {
    it("Successfull Login", () => {
      new LoginPage()
        .login(Cypress.env("pmtool_username"), Cypress.env("pmtool_password"))
        .welcomePageHeaderIsVisible();
    });

    it("Unsuccessful login", () => {
      new LoginPage().typeUsername("ABCD").typePassword("DEFG").clickLogin(); // ? Musíme ukončit Fluent z toho důvodu, že clickLogin nás přesměrovává na DashboardPage a my potřebujeme zůstat v LoginPage
      new LoginPage()
        .alertIsVisible()
        .alertHasText("No match for Username and/or Password."); // ? Udělali jsme 2 asserty za sebou. To je vlastně jeden ze způsobů jak zredukovat množství testů, testy ale mohou být méně účinné a složitější na analýzu.
    });
  });
});

/*
Připravte metody a testy (do contextu) pro:
heslo,
logo, 

V prvcích vždy otestujte:
Viditelnost
Text (v případě textu)
Funkčnost netestujte.

*/
