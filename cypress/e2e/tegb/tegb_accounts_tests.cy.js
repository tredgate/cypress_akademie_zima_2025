import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page.js";

describe("TEG#B Accounts Tests", () => {
  it("Accounts Title Have Text", () => {
    new TegBLoginPage()
      .openTegb()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin()
      .clickAccounts()
      .titleHaveText("Account");
  });
});
