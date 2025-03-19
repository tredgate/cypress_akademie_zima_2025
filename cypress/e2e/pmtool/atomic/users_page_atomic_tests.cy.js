//users_page_atomic_tests.cy.js
//složka: cypress/e2e/pmtool/atomic

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";
import { UsersPage } from "../../../page-objects/pmtool/users_page.js";

describe("Users Page Atomic Tests", () => {
  beforeEach(() => {
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
