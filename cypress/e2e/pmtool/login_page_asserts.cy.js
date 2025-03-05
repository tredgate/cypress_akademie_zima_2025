import { LoginPage } from "../../page-objects/pmtool/login_page.js";

describe("Login Page Tests with Asserts", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Page header Has Text 'Login'", () => {
    new LoginPage().pageHeaderHasText("Login");
  });

  it("Dashboard Constructor Assert", () => {
    new LoginPage()
      .login("cypress_zima_2024", "Zima2024Cypress")
      .clickProfile()
      .clickLogout();
  });
});
