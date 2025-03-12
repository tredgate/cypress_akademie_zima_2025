// keyboard_arguments.cy.js

import { LoginPage } from "../../../page-objects/pmtool/login_page.js";

describe("Keyboard Arguments", () => {
  it("Confirm form by pressing enter key", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername(Cypress.env("pmtool_username"))
      .typePassword(Cypress.env("pmtool_password") + "{enter}");
  });
});
