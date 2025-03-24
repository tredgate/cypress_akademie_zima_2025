import { TegBLoginPage } from "../../page-objects/tegb/tegb_login_page.js";

describe("TEGB Login Tests", () => {
  beforeEach(() => {
    new TegBLoginPage().openTegb();
  });

  it("Successful login", () => {
    new TegBLoginPage()
      .typeUsername(Cypress.env("tegb_username"))
      .typePassword(Cypress.env("tegb_password"))
      .clickLogin();
  });
});
