// login_page_custom_element_tests.cy.js
// cypress/e2e/pmtool/custom-element

import { LoginPageCustom } from "../../../page-objects/pmtool/login_page_custom.js";

describe(
  "Login Page atomic tests with custom elements",
  { testIsolation: false },
  () => {
    beforeEach(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      new LoginPageCustom().openPmtool();
    });

    context("Username input tests", () => {
      it("Username is visible", () => {
        new LoginPageCustom().usernameInput.isVisible();
      });

      it("Username has placeholder", () => {
        new LoginPageCustom().usernameInput.havePlaceholder("Username");
      });

      it("Username has value after type", () => {
        new LoginPageCustom()
          .typeUsername("TEST")
          .usernameInput.haveValue("TEST");
      });
    });

    context("Password input tests", () => {
      it("Password is visible", () => {
        new LoginPageCustom().passwordInput.isVisible();
      });

      it('Password have placeholder "Password"', () => {
        new LoginPageCustom().passwordInput.havePlaceholder("Password");
      });
    });
  }
);
/*










*/
